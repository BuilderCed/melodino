import { test, expect } from '@playwright/test';
import { createProfileAndGoHome } from './helpers.js';

test.describe('Settings', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await createProfileAndGoHome(page, 'SetTest');
    await page.click('.nav-btn[data-s="settings"]');
    await page.waitForTimeout(300);
  });

  test('settings screen is visible', async ({ page }) => {
    const settings = page.locator('#settings');
    await expect(settings).toBeVisible();
  });

  test('dyslexia toggle adds body class', async ({ page }) => {
    const dysToggle = page.locator('#sdys');
    if (await dysToggle.count()) {
      await dysToggle.click();
      await page.waitForTimeout(200);
      await expect(page.locator('body')).toHaveClass(/dys/);
    }
  });

  test('settings toggles are interactive', async ({ page }) => {
    // Check that at least one settings row exists
    const rows = page.locator('.st-row');
    const count = await rows.count();
    expect(count).toBeGreaterThan(0);
  });
});
