import { test, expect } from '@playwright/test';

test('input fields', async ({ page }) => {
    //to open an url
    await page.goto('https://demoqa.com/frames')
    //Click on frames 
    await page.locator('//span[text()="Frames"]').click()
    //switch to frame 1
    await page.frameLocator('#frame1').locator('id=sampleHeading').click()
     //to print switch to frame1 text
    console.log("switch to frame1")
    //To verify frame1 text
    var frame1Text=await page.frameLocator('#frame1').locator('id=sampleHeading')
    await expect(frame1Text).toHaveText('This is a sample page')
    //To switch frame2
    await page.frameLocator('#frame2').locator('id=sampleHeading').click()
    //to print switch to frame2 text
    console.log('switch to frame2')
    //To verify frame2 text
    var frame2Text=await page.frameLocator('#frame2').locator('id=sampleHeading')
    await expect(frame2Text).toHaveText('This is a sample page')


})
