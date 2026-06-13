import {
  Given,
  When,
  Then
} from '@cucumber/cucumber';

import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage;

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

    console.log(
      '✅ User Logged In Successfully'
    );
  }
);

Given(
  'User opens login page',
  async function () {

    loginPage = new LoginPage(this.page);

    await loginPage.navigate();
  }
);

When(
  'User enters mobile number {string}',
  async function (phone) {

    await loginPage.enterPhoneNumber(phone);
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

    await loginPage.takeScreenshot(
      'Dashboard_After_Login'
    );

    console.log(
      '✅ Login Successful'
    );
  }
);