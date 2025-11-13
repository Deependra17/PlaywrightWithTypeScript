import { test as base, expect } from '@playwright/test';
import type { Browser, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import fs from 'fs';

type MyFixtures = {
    loggedInPage: Page;
};

export const test = base.extend<MyFixtures>({
    loggedInPage: async ({ browser }: { browser: Browser }, use) => {
        const storageStatePath = 'storageState.json';

        // If session exists, reuse it
        if (fs.existsSync(storageStatePath)) {
            const context = await browser.newContext({ storageState: storageStatePath });
            const page = await context.newPage();
            await use(page);
            await context.close();
            return;
        }

        // If not, perform login once and save session
        const context = await browser.newContext();
        const page = await context.newPage();
        const loginPage = new LoginPage(page);

        await page.goto('https://UAT.sumx.app/'); // 🔁 Replace with actual URL
        await loginPage.login('ektest@yopmail.com', 'Tester@123');

        // Save authenticated session
        await context.storageState({ path: storageStatePath });
        console.log('Login successful. Session saved.');

        await use(page);
        await context.close();
    },
});

export { expect } from '@playwright/test';
