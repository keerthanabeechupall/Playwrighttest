import { test, expect } from '@playwright/test';

test('input fields', async ({ page }) => {
    //to open an url
    await page.goto('https://demoqa.com/alerts')
    //To handle ok alert
    page.once('dialog', dialog => {
    dialog.accept()

});
await page.locator('id=alertButton').click()
//To handle Ok alert after 5 seconds
page.once('dialog', dialog => {
    dialog.accept()

});
await page.locator('id=timerAlertButton').click()
//To handle confirm box alert ok
page.once('dialog', dialog => {
   dialog.accept()

});
await page.locator('id=confirmButton').click()
//To handle confirm box alert cancel
//page.once('dialog', dialog => {
   // dialog.dismiss()

//});
//await page.locator('id=confirmButton').click()
//To handle give date into alert
page.once('dialog', dialog => {
    dialog.accept()

});
await page.locator('id=promtButton').fill('keerthana')
//To handle dismiss alert 
page.once('dialog', dialog => {
    dialog.dismiss()

});
await page.locator('id=promtButton').click()

})
