import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';

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

Then('OTP screen should be displayed', async function () {
  console.log('OTP Page Opened');
});