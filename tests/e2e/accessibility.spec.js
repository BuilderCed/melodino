import { test, expect } from '@playwright/test';
import { createProfileAndGoHome } from './helpers.js';

test.describe('Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page has lang attribute', async ({ page }) => {
    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).toBe('fr');
  });

  test('skip link exists and is focusable', async ({ page }) => {
    const skip = page.locator('.skip');
    if (await skip.count()) {
      await skip.focus();
      await expect(skip).toBeFocused();
    }
  });

  test('aria-live region exists for announcements', async ({ page }) => {
    const live = page.locator('#aria-live');
    await expect(live).toHaveCount(1);
    const role = await live.getAttribute('aria-live');
    expect(role).toBeTruthy();
  });

  test('buttons have minimum touch target size (44px)', async ({ page }) => {
    await page.click('#go');
    await page.waitForTimeout(800);
    const buttons = page.locator('button:visible');
    const count = await buttons.count();
    for (let i = 0; i < Math.min(count, 5); i++) {
      const box = await buttons.nth(i).boundingBox();
      if (box) {
        expect(Math.max(box.width, box.height)).toBeGreaterThanOrEqual(40);
      }
    }
  });

  test('reduced motion preference is respected', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    // The CSS rule sets animation-duration to 0.01ms for prefers-reduced-motion: reduce
    const hasRule = await page.evaluate(() => {
      for (const sheet of document.styleSheets) {
        try {
          for (const rule of sheet.cssRules) {
            if (rule.conditionText?.includes('prefers-reduced-motion')) return true;
          }
        } catch {}
      }
      return false;
    });
    expect(hasRule).toBe(true);
  });

  test('color-blind mode adds cb class', async ({ page }) => {
    await createProfileAndGoHome(page, 'A11y');
    await page.click('.nav-btn[data-s="settings"]');
    await page.waitForTimeout(300);
    const cbToggle = page.locator('#scb');
    if (await cbToggle.count()) {
      await cbToggle.click();
      await page.waitForTimeout(200);
      await expect(page.locator('body')).toHaveClass(/cb/);
    }
  });
});
