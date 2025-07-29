import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { expect } from '@playwright/test';

Given('I open the browser', async function () {
  await this.openBrowser();
});

When('I navigate to {string}', async function (url: string) {
  await this.page.goto(url);
});

When('I login with username {string} and password {string}', async function (username: string, password: string) {
  const loginPage = new LoginPage(this.page);
  await loginPage.login(username, password);
});

Then('I should see the dashboard', async function () {
  await expect(this.page.locator('#dashboard')).toBeVisible();
  await this.closeBrowser();
});