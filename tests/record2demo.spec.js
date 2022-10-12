import { test, expect } from '@playwright/test';
const {chromium}=require('@playwright/test')
test('record test2 demo', async ({ page }) => {

  // Open new page
  const page = await context.newPage();

  // Go to https://www.saucedemo.com/
  await page.goto('https://www.saucedemo.com/');

  // Click [data-test="username"]
  await page.locator('[data-test="username"]').click();

  // Fill [data-test="username"]
  await page.locator('[data-test="username"]').fill('standard_user');

  // Click [data-test="password"]
  await page.locator('[data-test="password"]').click();

  // Fill [data-test="password"]
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Click [data-test="login-button"]
  await page.locator('[data-test="login-button"]').click();
  await page.waitForURL('https://www.saucedemo.com/inventory.html');

  // Click [data-test="add-to-cart-sauce-labs-backpack"]
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Click text=Open Menu
  await page.locator('text=Open Menu').click();

  // Click text=Logout
  await page.locator('text=Logout').click();
  await page.waitForURL('https://www.saucedemo.com/');

  // Close page
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})