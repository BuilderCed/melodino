import { test, expect } from '@playwright/test';

test.describe('Splash → Game Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('splash screen visible on load', async ({ page }) => {
    const splash = page.locator('#splash');
    await expect(splash).toBeVisible();
    await expect(page.locator('#splash h1')).toContainText('Melodino');
  });

  test('clicking Commencer dismisses splash and shows login', async ({ page }) => {
    await page.click('#go');
    await page.waitForTimeout(800);
    const splash = page.locator('#splash');
    await expect(splash).toBeHidden();
    const login = page.locator('#login');
    await expect(login).toBeVisible();
  });

  test('can create a new profile', async ({ page }) => {
    await page.click('#go');
    await page.waitForTimeout(800);
    // Click the "add" card (generated dynamically with class .av-add)
    const addCard = page.locator('.av-add');
    await expect(addCard).toBeVisible({ timeout: 5000 });
    await addCard.click();
    // Fill inline form
    const nameInput = page.locator('#pf-nm');
    await expect(nameInput).toBeVisible({ timeout: 3000 });
    await nameInput.fill('TestKid');
    await page.click('#pf-ok');
    await page.waitForTimeout(500);
    // Profile should appear in the list
    const profileCard = page.locator('.av-card').first();
    await expect(profileCard).toBeVisible();
  });

  test('selecting a profile shows home with songs', async ({ page }) => {
    await page.click('#go');
    await page.waitForTimeout(800);
    // Create profile
    await page.click('.av-add');
    await page.locator('#pf-nm').fill('E2E');
    await page.click('#pf-ok');
    await page.waitForTimeout(500);
    // Click the profile card to select it
    const profileCard = page.locator('.av-card').first();
    await profileCard.click();
    await page.waitForTimeout(500);
    // Home should be visible with song cards
    const home = page.locator('#home');
    await expect(home).toBeVisible();
    const songCards = page.locator('.s-card');
    const count = await songCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('clicking a song play button starts lesson', async ({ page }) => {
    await page.click('#go');
    await page.waitForTimeout(800);
    await page.click('.av-add');
    await page.locator('#pf-nm').fill('E2E');
    await page.click('#pf-ok');
    await page.waitForTimeout(500);
    await page.locator('.av-card').first().click();
    await page.waitForTimeout(500);
    // Click first play button on a song card
    const playBtn = page.locator('.s-card .btn-p').first();
    if (await playBtn.count()) {
      await playBtn.click();
      await page.waitForTimeout(500);
      const lesson = page.locator('#lesson');
      await expect(lesson).toBeVisible();
      const canvas = page.locator('#cv');
      await expect(canvas).toBeVisible();
    }
  });
});
