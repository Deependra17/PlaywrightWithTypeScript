import {test, expect} from '@playwright/test';
import {LoginPage} from "../pages/LoginPage";
import {WaitClass} from '../utils/waitClass';

test('login should succeed with valid credentials', async ({page}) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://UAT.sumx.app/');
    await loginPage.enterUsername('@test@yopmail.com');
    await loginPage.enterPassword('Tester@123');

    await WaitClass.waitForEnabled(loginPage.loginButton);

    await loginPage.clickLogin();

});

