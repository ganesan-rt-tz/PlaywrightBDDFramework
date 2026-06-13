import {
  When,
  Then
} from '@cucumber/cucumber';

import { LedgerPage } from '../pages/LedgerPage';

let ledgerPage: LedgerPage;

When(
  'User navigates to Ledger page',
  async function () {

    ledgerPage =
      new LedgerPage(this.page);

    await ledgerPage.openLedger();
  }
);

When(
  'User clicks Add Ledger',
  async function () {

    await ledgerPage.clickAddLedger();
  }
);

When(
  'User enters Ledger Name {string}',
  async function (name) {

    await ledgerPage.enterLedgerName(name);
  }
);

When(
  'User selects Ledger Type',
  async function () {

    await ledgerPage.selectLedgerType();
  }
);

When(
  'User enters City {string}',
  async function (city) {

    await ledgerPage.enterCity(city);
  }
);

When(
  'User enters District {string}',
  async function (district) {

    await ledgerPage.enterDistrict(district);
  }
);

When(
  'User enters State {string}',
  async function (state) {

    await ledgerPage.enterState(state);
  }
);

When(
  'User enters Country {string}',
  async function (country) {

    await ledgerPage.enterCountry(country);
  }
);

When(
  'User enters Pincode {string}',
  async function (pin) {

    await ledgerPage.enterPincode(pin);
  }
);

When(
  'User enters Mobile Number {string}',
  async function (mobile) {

    await ledgerPage.enterMobile(mobile);
  }
);

When(
  'User enters Email {string}',
  async function (email) {

    await ledgerPage.enterEmail(email);
  }
);

When(
  'User enters Description {string}',
  async function (description) {

    await ledgerPage.enterDescription(description);
  }
);



When(
  'User clicks Save button',
  async function () {

    await ledgerPage.clickSave();
  }
);

Then(
  'Ledger should be created successfully',
  async function () {

    await ledgerPage.verifyLedgerCreated();
  }
);

Then(
  'Take Ledger Screenshot',
  async function () {

    await ledgerPage.takeLedgerScreenshot();
  }
);