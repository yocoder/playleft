import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  async login(username: string, password: string) {
    await this.page.fill('#user', username);
    await this.page.fill('#pass', password);
    await this.page.click('#login-btn');
  }
}