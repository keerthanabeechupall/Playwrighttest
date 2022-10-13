import { test, expect } from '@playwright/test';

test('Tools qa', async ({ page }) => {
//to open an url
    await page.goto('https://demoqa.com/text-box')
    //To fill full name
    await page.locator('id=userName').fill('keerthana')
    //To fill gmail
    await page.locator('id=userEmail').fill('keerthana@gmail.com')
    //To fill current address
    await page.locator('id=currentAddress').fill('hyd')
    //To permanent address
    await page.locator('id=permanentAddress').fill('ngm')
    //To click submit button
    await page.locator('id=submit').click()
    //verify titile
    var title= await expect(page).toHaveTitle('ToolsQA')
    //to print title
    console.log(title)
})