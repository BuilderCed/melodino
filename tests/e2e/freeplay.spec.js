import { test, expect } from '@playwright/test';
import { createProfileAndGoHome } from './helpers.js';

test.describe('Freeplay Mode', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await createProfileAndGoHome(page, 'FreePl');
  });

  test('navigating to freeplay shows piano', async ({ page }) => {
    await page.click('.nav-btn[data-s="freeplay"]');
    await page.waitForTimeout(300);
    const freeplay = page.locator('#freeplay');
    await expect(freeplay).toBeVisible();
    const keys = page.locator('#fp .wk');
    const count = await keys.count();
    expect(count).toBeGreaterThan(0);
  });

  test('octave buttons change display', async ({ page }) => {
    await page.click('.nav-btn[data-s="freeplay"]');
    await page.waitForTimeout(300);
    const display = page.locator('#odisp');
    const initial = await display.textContent();
    await page.click('#ou');
    const after = await display.textContent();
    expect(after).not.toBe(initial);
  });

  test('clicking a piano key does not crash', async ({ page }) => {
    await page.click('.nav-btn[data-s="freeplay"]');
    await page.waitForTimeout(300);
    const firstKey = page.locator('#fp .wk').first();
    await firstKey.click();
    await page.waitForTimeout(200);
    // App should still be functional
    await expect(page.locator('#freeplay')).toBeVisible();
  });
});
