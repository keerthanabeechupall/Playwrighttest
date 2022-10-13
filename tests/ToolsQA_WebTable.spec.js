import { test, expect } from '@playwright/test';

test('Tools qa', async ({ page }) => {
//to open an url
    await page.goto('https://demoqa.com/text-box')
    //To click on webtable
    await page.locator('//span[text()="Web Tables"]').click()
    //To click on add button
    await page.locator('id=addNewRecordButton').click()
    //To fill first name
    await page.locator('id=firstName').fill('keerthana')
    //To fill last name
    await page.locator('id=lastName').fill('beechupallay')
    //To fill gmail
    await page.locator('id=userEmail').fill('keerthana123@gmail.com')
    //To fill age
    await page.locator('id=age').fill('24')
    //To fill salary
    await page.locator('id=salary').fill('25000')
    //To fill department
    await page.locator('id=department').fill('testing')
    //To click on submit
    await page.locator('//button[text()="Submit"]').click()
    //To click on edit button
    await page.locator('//span[@id="edit-record-4"]').click()
    //To edit age
    await page.locator('id=age').fill('23')
    //To click on submit
    await page.locator('//button[text()="Submit"]').click()
    //To click on delete icon
    await page.locator('id=delete-record-4').click()
   
})