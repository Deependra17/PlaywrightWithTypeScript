import { test } from '../fixtures/userFixtures';

test.beforeAll(async () => {
    console.log('Global setup before all tests');
});

test.beforeEach(async ({ loggedInPage }) => {
    console.log('Before each test - navigating to dashboard');
    await loggedInPage.goto('https://uat.sumx.app/');
});

test.afterEach(async () => {
    console.log('After each test - cleanup');
});

test.afterAll(async () => {
    console.log('All tests completed');
});

export { test };
