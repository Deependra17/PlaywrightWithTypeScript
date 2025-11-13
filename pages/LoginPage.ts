import type { Page, Locator } from '@playwright/test';


class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#Input_Email');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-submit');
  }

  async enterUsername(username: string) {
    await this.usernameInput.waitFor({ state: 'visible', timeout: 20000 });
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordInput.waitFor({ state: 'visible', timeout: 20000 });
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.waitFor({ state: 'visible', timeout: 20000 });
    await this.loginButton.click();
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}
export {LoginPage};