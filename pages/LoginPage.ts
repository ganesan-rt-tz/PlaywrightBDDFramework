import { Page } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

  async navigate() {

    await this.page.goto(
      'http://textile-saas.tamilzorous.com/'
    );
  }

  async enterPhoneNumber(phone: string) {

    await this.page.locator('input').first().fill(phone);
  }

  async clickSendOtp() {

    await this.page.getByRole('button', {
      name: 'Send OTP'
    }).click();

    await this.page.waitForTimeout(3000);
  }
async enterOtp(otp: string) {

  await this.page.waitForTimeout(2000);

  const inputs = await this.page.locator('input').count();

  console.log('Total Inputs:', inputs);

}

  async clickVerifyOtp() {

    await this.page.getByRole('button', {
      name: 'Verify OTP'
    }).click();

    await this.page.waitForTimeout(3000);
  }
}