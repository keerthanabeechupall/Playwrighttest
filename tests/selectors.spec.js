import { test, expect } from '@playwright/test';

test('selectors', async ({ page }) => {
//to open an url
    await page.goto('https://www.orangehrm.com/contact-sales/')
    //To pause on url
    await page.pause()
    //to fill details
    
    await page.locator('name=FullName').fill('keerthana beechupally')
    await page.locator('name=Email').fill('keerthana123@gmail.com')
    await page.locator('id=Form_getForm_Contact').fill('7894561230')
    await page.locator('name=Country').selectOption('India')
    await page.locator('name=NoOfEmployees').selectOption('26 - 50')





})
