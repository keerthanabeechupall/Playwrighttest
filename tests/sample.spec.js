import { test, expect } from '@playwright/test';

test('Tools qa', async ({ page }) => {
//to open an url
    await page.goto('https://demoqa.com/text-box')
    await page.locator('id=userName').fill('keerthana')
    await page.locator('id=userEmail').fill('keerthana@gmail.com')
    await page.locator('id=currentAddress').fill('hyd')
    await page.locator('id=permanentAddress').fill('ngm')
    await page.locator('id=submit').click()
   var title= await expect(page).toHaveTitle('ToolsQA')
    console.log(title)
    await page.locator('//span[text()="Check Box"]').click()
    await page.locator('//span[text()="Home"]').click()
   // await expect(page).locator
    await page.locator('//span[text()="Radio Button"]').click()
    await page.locator('//label[text()="Yes"]').click()
    var ass1= await page.locator('//label[text()="Yes"]')
   await expect(ass1).toHaveText('Yes')
    await page.locator('//span[text()="Web Tables"]').click()
    await page.locator('id=addNewRecordButton').click()
    await page.locator('id=firstName').fill('keerthana')
    await page.locator('id=lastName').fill('beechupallay')
    await page.locator('id=userEmail').fill('keerthana123@gmail.com')
    await page.locator('id=age').fill('23')
    await page.locator('id=salary').fill('25000')
    await page.locator('id=department').fill('testing')
    await page.locator('//button[text()=Submit').click()
})
