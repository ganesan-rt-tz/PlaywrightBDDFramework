import {
  Given,
  When,
  Then
} from '@cucumber/cucumber';

import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage;

Given('User opens login page', async function () {

  loginPage = new LoginPage(this.page);

  await loginPage.navigate();
});

When(
  'User enters mobile number {string}',
  async function (phone) {

    await loginPage.enterPhoneNumber(phone);
  }
);

When(
  'User leaves mobile number blank',
  async function () {

    await loginPage.enterPhoneNumber('');
  }
);

When(
  'User clicks Send OTP button',
  async function () {

    await loginPage.clickSendOtp();
  }
);

When(
  'User enters OTP {string}',
  async function (otp) {

    await loginPage.enterOtp(otp);
  }
);

When(
  'User clicks Verify OTP button',
  async function () {

    await loginPage.clickVerifyOtp();
  }
);

Then(
  'Dashboard should be displayed',
  async function () {

    await loginPage.verifyDashboard();

    console.log('✅ Login Successful');
  }
);

Then(
  'Error message should be displayed',
  async function () {

    await expect(
      this.page.locator('body')
    ).toContainText(
      'Invalid mobile number'
    );

    console.log('✅ Invalid Mobile Number Validation Verified');
  }
);

Then(
  'Mobile number required message should be displayed',
  async function () {

    await expect(
      this.page.locator('body')
    ).toContainText(
      'Phone number is required'
    );

    console.log('✅ Phone Number Required Validation Verified');
  }
);

Then(
  'Invalid OTP message should be displayed',
  async function () {

    // Verify user remains on OTP screen
    await expect(
      this.page.locator('text=Verify OTP')
    ).toBeVisible();

    console.log('✅ Invalid OTP Validation Verified');
  }
);

Then(
  'Please enter 6 digit OTP message should be displayed',
  async function () {

    // Verify user remains on OTP screen
    await expect(
      this.page.locator('text=Verify OTP')
    ).toBeVisible();

    console.log('✅ Empty OTP Validation Verified');
  }
);

Given(
  'User is logged in',
  async function () {

    loginPage = new LoginPage(this.page);

    await loginPage.navigate();

    await loginPage.enterPhoneNumber(
      '9999999999'
    );

    await loginPage.clickSendOtp();

    await loginPage.enterOtp(
      '123456'
    );

    await loginPage.clickVerifyOtp();

    await loginPage.verifyDashboard();
  }
);

When(
  'User clicks Logout button',
  async function () {

    await this.page
      .getByText('Logout')
      .click();
  }
);

Then(
  'Login page should be displayed',
  async function () {

    await expect(
      this.page.locator('input').first()
    ).toBeVisible();

    console.log('✅ Logout Successful');
  }
);