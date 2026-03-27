import { test, expect } from '@playwright/test';

test.describe('Offline & PWA', () => {
  test('service worker registers successfully', async ({ page }) => {
    await page.goto('/');
    const swRegistered = await page.evaluate(async () => {
      if (!('serviceWorker' in navigator)) return false;
      const reg = await navigator.serviceWorker.getRegistration();
      return !!reg;
    });
    expect(swRegistered).toBe(true);
  });

  test('app loads core content after going offline', async ({ page, context }) => {
    await page.goto('/');
    await page.waitForTimeout(2000); // Let SW cache assets
    // Go offline
    await context.setOffline(true);
    await page.reload();
    await page.waitForTimeout(1000);
    // Splash should still render
    const title = page.locator('#splash h1');
    await expect(title).toContainText('Melodino');
    // Restore
    await context.setOffline(false);
  });

  test('manifest is valid and accessible', async ({ page }) => {
    const response = await page.goto('/_assets/manifest.json');
    expect(response.status()).toBe(200);
    const manifest = await response.json();
    expect(manifest.name).toBe('Melodino');
    expect(manifest.display).toBe('standalone');
    expect(manifest.icons.length).toBeGreaterThanOrEqual(2);
  });
});
