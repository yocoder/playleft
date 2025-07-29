import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';
import { AxiosResponse } from 'axios';

class CustomWorld extends World {
  browser!: Browser;
  page!: Page;
  apiResponse?: AxiosResponse;

  async openBrowser() {
    this.browser = await chromium.launch({ headless: true });
    this.page = await this.browser.newPage();
  }

  async closeBrowser() {
    if (this.page) await this.page.close();
    if (this.browser) await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);