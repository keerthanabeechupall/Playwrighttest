const {test,expect}=require('@playwright/test')
test.describe("Test suite",()=>{

test('My first test',async ({page})=>{
    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle('Google')
    

})
})
