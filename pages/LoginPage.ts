import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('http://textile-saas.tamilzorous.com/');
  }

  async enterPhoneNumber(phone: string) {
    await this.page.locator('input').fill(phone);
  }

  async clickSendOtp() {
    await this.page.getByRole('button', {
      name: 'Send OTP'
    }).click();
  }
}