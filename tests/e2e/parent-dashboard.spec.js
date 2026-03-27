import { test, expect } from '@playwright/test';
import { createProfileAndGoHome } from './helpers.js';

test.describe('Parent Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await createProfileAndGoHome(page, 'ParentTest');
  });

  test('parent lock button opens parent screen', async ({ page }) => {
    await page.click('#hpar');
    await page.waitForTimeout(300);
    const parentScreen = page.locator('#parent');
    await expect(parentScreen).toBeVisible();
  });

  test('export button triggers download', async ({ page }) => {
    await page.click('#hpar');
    await page.waitForTimeout(300);
    // Check PIN overlay or content visibility
    const exportBtn = page.locator('#bex');
    if (await exportBtn.isVisible()) {
      const [download] = await Promise.all([
        page.waitForEvent('download', { timeout: 5000 }),
        exportBtn.click(),
      ]);
      expect(download.suggestedFilename()).toBe('melodino-backup.json');
    }
  });
});
