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
    //To click on check box
    await page.locator('//span[text()="Check Box"]').click()
    //To click on home check box
    await page.locator('//span[text()="Home"]').click()
    //To click on radio button
    await page.locator('//span[text()="Radio Button"]').click()
    //To click on yes button
    await page.locator('//label[text()="Yes"]').click()
    //Verify yes text
    var yesButtonText= await page.locator('//label[text()="Yes"]')
   await expect(yesButtonText).toHaveText('Yes')
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
    await page.locator('id=age').fill('23')
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
    //To click on alerts,frame & windows 
    await page.locator('//div[text()="Alerts, Frame & Windows"]').click()
    //To click on browser windows
    await page.locator('//span[text()="Browser Windows"]').click()
    //To click on new Tab
    await page.locator('//button[text()="New Tab"]').click()
    //To click new window
    await page.locator('//button[text()="New Window"]').click()
    //To click on new window message
    await page.locator('//button[text()="New Window Message"]').click()
    //To click on alerts
    await page.locator('//span[text()="Alerts"]').click()
    //to click on click me
    await page.locator('(//button[text()="Click me"])[1]').click()
    await page.on('dialog', dialog => dialog.accept());
    await page.locator('(//button[text()="Click me"])[2]').click()
    await page.on('dialog',dialog => dialog.accept());
    await page.locator('(//button[text()="Click me"])[3]').click()
    await page.on('dialog',dialog => dialog.accept());
    await page.locator('(//button[text()="Click me"])[3]').click()
    await page.on('dialog',dialog => dialog.dismiss());

    


})