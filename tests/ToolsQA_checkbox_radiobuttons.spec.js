import { test, expect } from '@playwright/test';

test('Tools qa', async ({ page }) => {
//to open an url
    await page.goto('https://demoqa.com/text-box')
//To click on check box
await page.locator('//span[text()="Check Box"]').click()
//To click on home check box
await page.locator('//span[text()="Home"]').click()
//To click on radio button
await page.locator('//span[text()="Radio Button"]').click()
//To click on yes button
await page.locator('//label[text()="Yes"]').click()
//Verify yes text
var yesButtonText= await page.locator('//label[text()="Yes"]')
await expect(yesButtonText).toHaveText('Yes')
//To click on impressive button
await page.locator('//label[text()="Impressive"]').click()
//Verify impressive button
var impressiveButtonText= await page.locator('//label[text()="Impressive"]')
await expect(impressiveButtonText).toHaveText('Impressive')



})