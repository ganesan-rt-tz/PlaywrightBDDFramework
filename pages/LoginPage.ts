import { Page, expect } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

  async navigate() {

    console.log('Opening Login Page...');

    await this.page.goto(
      'http://textile-saas.tamilzorous.com/'
    );

    await this.page.locator('input').first().waitFor({
      state: 'visible'
    });

    console.log('Login Page Opened');
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

    await this.page.locator(
      '[data-input-otp-container="true"]'
    ).click();

    await this.page.keyboard.type(otp);

    console.log('OTP Entered Successfully');
  }

  async clickVerifyOtp() {

    await this.page.getByRole('button', {
      name: 'Verify OTP'
    }).click();

    await this.page.waitForTimeout(5000);
  }

  async verifyDashboard() {

    await expect(
      this.page.getByRole('heading', {
        name: 'Dashboard'
      })
    ).toBeVisible();

    console.log('Dashboard Verified Successfully');
  }
}