import { test, expect } from '@playwright/test';

test('input fields', async ({ page }) => {
//to open an url
    await page.goto('https://demoqa.com/text-box')

    await page.locator('#userName').fill('keerthana')
    await page.click('id=userName')
    await page.locator('id=userName').click()


    await page.locator('placeholder=name@example.com').fill('keerthi@gmail.com')
})
