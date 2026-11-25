/*const {test, expect} = require('@playwright/test');
test('my first google test', async({page}) =>{
  await page.goto('https://www.example.com',{waitUntil: 'domcontentloaded', timeout:60000});
  await expect(page).toHaveTitle(/Example/);
});