import { Page, expect } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

  async navigate() {

    await this.page.goto(
      'http://textile-saas.tamilzorous.com/',
      {
        waitUntil: 'domcontentloaded',
        timeout: 60000
      }
    );
  }

  async enterPhoneNumber(phone: string) {

    await this.page
      .locator('input')
      .first()
      .fill(phone);
  }

  async clickSendOtp() {

    await this.page
      .getByRole('button', {
        name: 'Send OTP'
      })
      .click();

    await this.page.waitForTimeout(2000);
  }

  async enterOtp(otp: string) {

    await this.page
      .locator('[data-input-otp-container="true"]')
      .click();

    await this.page.keyboard.type(otp);

    console.log('✅ OTP Entered Successfully');
  }

  async clickVerifyOtp() {

    await this.page
      .getByRole('button', {
        name: 'Verify OTP'
      })
      .click();

    await this.page.waitForTimeout(3000);
  }

  async verifyDashboard() {

    await expect(
      this.page.getByRole('heading', {
        name: 'Dashboard'
      })
    ).toBeVisible();

    console.log(
      '✅ Dashboard Verified Successfully'
    );
  }

  async takeScreenshot(name: string) {

    try {

      const timestamp =
        new Date()
          .toISOString()
          .replace(/[:.]/g, '-');

      const fileName =
        `screenshots/${name}_${timestamp}.png`;

      await this.page.screenshot({
        path: fileName,
        fullPage: true
      });

      console.log(
        `📸 Screenshot Saved: ${fileName}`
      );

    } catch (error) {

      console.log(
        '❌ Screenshot Capture Failed'
      );

      console.error(error);
    }
  }
}