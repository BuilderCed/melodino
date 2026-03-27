/**
 * Shared test helpers for Melodino E2E tests.
 * Handles splash dismissal and profile creation.
 */

export async function dismissSplash(page) {
  await page.click('#go');
  await page.waitForTimeout(800);
  await page.locator('#login').waitFor({ state: 'visible', timeout: 5000 });
}

export async function createProfileAndGoHome(page, name = 'E2E') {
  await dismissSplash(page);
  const addCard = page.locator('.av-add');
  await addCard.waitFor({ state: 'visible', timeout: 5000 });
  await addCard.click();
  await page.locator('#pf-nm').fill(name);
  await page.click('#pf-ok');
  await page.waitForTimeout(500);
  // Select the newly created profile
  await page.locator('.av-card').first().click();
  await page.waitForTimeout(500);
}
