import {expect} from '@playwright/test';
import type {Locator} from '@playwright/test';

export class WaitClass {
    static async waitForEnabled(locator: Locator, timeout = 5000) {
        await locator.waitFor({state: 'attached', timeout});
        await expect(locator).toBeEnabled({timeout});
    }
}
