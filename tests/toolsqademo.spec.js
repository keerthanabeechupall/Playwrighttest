import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to demo qa url
  await page.goto('https://demoqa.com/text-box');
  // Fill full name
  await page.locator('[placeholder="Full Name"]').fill('keerthana');
  // Press Enter
  await page.locator('[placeholder="Full Name"]').press('Enter');
  // Click on email field
  await page.locator('[placeholder="name\\@example\\.com"]').click();
  // Fill email address
  await page.locator('[placeholder="name\\@example\\.com"]').fill('keerthana.b@123');
  // Click on currentAddress
  await page.locator('#currentAddress').click();
  // Fill currentAddress
  await page.locator('#currentAddress').fill('hyd');
  // Click on permanentAddress
  await page.locator('#permanentAddress').click();
  // Fill permanentAddress
  await page.locator('#permanentAddress').fill('ngm');
  // Click on submit
  await page.locator('text=Submit').click();``
  // Click on check box
  await page.locator('li:has-text("Check Box")').click();
  await expect(page).toHaveURL('https://demoqa.com/checkbox');
  // Click on home button
  await page.locator('#tree-node svg').nth(3).click();
  // Click on radio button
  await page.locator('text=Radio Button').click();
  await expect(page).toHaveURL('https://demoqa.com/radio-button');
  // Click on yes button
  await page.locator('text=Yes').click();
  // Click on impressive button
  await page.locator('text=Impressive').click();
  // Click on web table
  await page.locator('text=Web Tables').click();
  await expect(page).toHaveURL('https://demoqa.com/webtables');
  // Click button:has-text("Add")
  await page.locator('button:has-text("Add")').click();
  // Click [placeholder="First Name"]
  await page.locator('[placeholder="First Name"]').click();
  // Fill [placeholder="First Name"]
  await page.locator('[placeholder="First Name"]').fill('keerthana');
  // Click [placeholder="Last Name"]
  await page.locator('[placeholder="Last Name"]').click();
  // Click [placeholder="name\@example\.com"]
  await page.locator('[placeholder="name\\@example\\.com"]').click();
  // Click [placeholder="Last Name"]
  await page.locator('[placeholder="Last Name"]').click();
  // Fill [placeholder="Last Name"]
  await page.locator('[placeholder="Last Name"]').fill('beechupally');
  // Click [placeholder="name\@example\.com"]
  await page.locator('[placeholder="name\\@example\\.com"]').click();
  // Fill [placeholder="name\@example\.com"]
  await page.locator('[placeholder="name\\@example\\.com"]').fill('name@example.com');
  // Click [placeholder="Age"]
  await page.locator('[placeholder="Age"]').click();
  // Fill [placeholder="Age"]
  await page.locator('[placeholder="Age"]').fill('24');
  // Click [placeholder="Salary"]
  await page.locator('[placeholder="Salary"]').click();
  // Fill [placeholder="Salary"]
  await page.locator('[placeholder="Salary"]').fill('25000');
  // Click [placeholder="Department"]
  await page.locator('[placeholder="Department"]').click();
  // Fill [placeholder="Department"]
  await page.locator('[placeholder="Department"]').fill('testing');
  // Click text=Submit
  await page.locator('text=Submit').click();
  // Click #delete-record-4 path
  await page.locator('#delete-record-4 path').click();
  // Click #edit-record-3 svg
  await page.locator('#edit-record-3 svg').click();
  // Click [placeholder="Age"]
  await page.locator('[placeholder="Age"]').click();
  // Fill [placeholder="Age"]
  await page.locator('[placeholder="Age"]').fill('20');
  // Click text=Submit
  await page.locator('text=Submit').click();
  // Click text=Buttons
  await page.locator('text=Buttons').click();
  await expect(page).toHaveURL('https://demoqa.com/buttons');
  // Click text=Double Click Me
  await page.locator('text=Double Click Me').click();
  // Click text=Right Click Me
  await page.locator('text=Right Click Me').click();
  // Click #EGPFj
  await page.locator('#EGPFj').click();
  // Click #fixedban
  await page.locator('#fixedban').click();
 
})