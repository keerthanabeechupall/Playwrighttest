import { test, expect } from '@playwright/test';

test('Tools qa', async ({ page }) => {
//to open an url
    await page.goto('https://demoqa.com/text-box')
    //To click on buttons
    await page.locator('//span[text()="Buttons"]').click()
    //To click on double click
    await page.locator('//button[text()="Double Click Me"]').dblclick()
    //To click on right click
    await page.locator('//button[text()="Right Click Me"]').click({button: 'right'})
    //To click on Click me
    await page.locator('//button[text()="Click Me"]').click()
    //Validate double click text
    var doubleClickText=await page.locator('//p[text()="You have done a double click"]')
    await expect(doubleClickText).toHaveText('You have done a double click')
    //Validate right click text
    var rightClickText=await page.locator('//p[text()="You have done a right click"]')
    await expect(rightClickText).toHaveText('You have done a right click')
    //validate dynamic click text
    var dynamicClickText=await page.locator('//p[text()="You have done a dynamic click"]')
    await expect(dynamicClickText).toHaveText('You have done a dynamic click')
})