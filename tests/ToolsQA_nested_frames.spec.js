import { test, expect } from '@playwright/test';

test('Tools qa', async ({ page }) => {
//to open an url
    await page.goto('https://demoqa.com/nestedframes')
    await page.locator('//span[text()="Nested Frames"]').click()
    await page.frameLocator('#frame1').locator('//*[text()="Parent frame"]').click()
    console.log("i am in parent frame")
    await page.frameLocator('#frame1').frameLocator('iframe').locator('//*[text()="Child Iframe"]').click()
    console.log("i am in child window")
})