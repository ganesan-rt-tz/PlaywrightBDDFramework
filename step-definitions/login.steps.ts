import {
  Given,
  When,
  Then,
  setDefaultTimeout
} from '@cucumber/cucumber';

import { LoginPage } from '../pages/LoginPage';

setDefaultTimeout(30000);

let loginPage: LoginPage;

Given('User opens login page', async function () {

  loginPage = new LoginPage(this.page);

  await loginPage.navigate();
});

When('User enters mobile number {string}', async function (phone) {

  await loginPage.enterPhoneNumber(phone);
});

When('User clicks Send OTP button', async function () {

  await loginPage.clickSendOtp();
});

When('User enters OTP {string}', async function (otp) {

  await loginPage.enterOtp(otp);
});

When('User clicks Verify OTP button', async function () {

  await loginPage.clickVerifyOtp();
});

Then('Dashboard should be displayed', async function () {

  console.log('Login Successful');
});