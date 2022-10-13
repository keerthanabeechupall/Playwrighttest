import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://demoqa.com/alerts
  await page.goto('https://demoqa.com/alerts');
  // Click #alertButton
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#alertButton').click();
  // Click #timerAlertButton
  await page.locator('#timerAlertButton').click();
  // Click #timerAlertButton
  await page.locator('#timerAlertButton').click();
  // Click #confirmButton
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#confirmButton').click();
  // Click #confirmButton
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#confirmButton').click();
  // Click text=Alerts >> nth=0
  await page.locator('text=Alerts').first().click();
});

