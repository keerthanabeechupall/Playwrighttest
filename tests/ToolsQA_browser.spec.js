import { test, expect } from '@playwright/test';

test('Tools qa', async ({ page }) => {
//to open an url
await page.goto('https://demoqa.com/text-box')
 //To click on alerts,frame & windows 
 await page.locator('//div[text()="Alerts, Frame & Windows"]').click()
 //To click on browser windows
 await page.locator('//span[text()="Browser Windows"]').click()
 //To click on new Tab
 await page.locator('//button[text()="New Tab"]').click()
 //To click new window
 await page.locator('//button[text()="New Window"]').click()
 //To click on new window message
 await page.locator('//button[text()="New Window Message"]').click()
})