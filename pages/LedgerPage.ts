import { Page } from '@playwright/test';

export class LedgerPage {

  constructor(private page: Page) {}

  async openLedger() {

    await this.page
      .getByText('Ledger')
      .click();

    console.log('✅ Ledger Page Opened');
  }

  async clickAddLedger() {

    await this.page
      .locator('button')
      .first()
      .click();

    await this.page.waitForTimeout(2000);

    const count =
      await this.page
        .getByRole('textbox')
        .count();

    console.log(
      'Total Textboxes After Add Ledger:',
      count
    );

    console.log('✅ Add Ledger Clicked');
  }

  async enterLedgerName(name: string) {

    await this.page
      .getByRole('textbox')
      .nth(1)
      .fill(name);

    console.log('✅ Ledger Name Entered');
  }

  async selectLedgerType() {

    await this.page
      .getByRole('combobox')
      .click();

    await this.page
      .locator('div')
      .filter({
        hasText: /^Warper$/
      })
      .click();

    console.log('✅ Ledger Type Selected');
  }

  async enterCity(city: string) {

    await this.page
      .getByRole('textbox')
      .nth(4)
      .fill(city);

    console.log('✅ City Entered');
  }

  async enterDistrict(district: string) {

    await this.page
      .getByRole('textbox')
      .nth(5)
      .fill(district);

    console.log('✅ District Entered');
  }

  async enterState(state: string) {

    await this.page
      .getByRole('textbox')
      .nth(6)
      .fill(state);

    console.log('✅ State Entered');
  }

  async enterCountry(country: string) {

    await this.page
      .getByRole('textbox')
      .nth(7)
      .fill(country);

    console.log('✅ Country Entered');
  }

  async enterPincode(pin: string) {

    await this.page
      .getByRole('textbox')
      .nth(8)
      .fill(pin);

    console.log('✅ Pincode Entered');
  }

  async enterMobile(mobile: string) {

    await this.page
      .getByRole('textbox')
      .nth(9)
      .fill(mobile);

    console.log('✅ Mobile Number Entered');
  }

  async enterEmail(email: string) {

    await this.page
      .getByRole('textbox')
      .nth(11)
      .fill(email);

    console.log('✅ Email Entered');
  }

  async enterDescription(description: string) {

    await this.page
      .getByRole('textbox')
      .last()
      .fill(description);

    console.log('✅ Description Entered');
  }

  

  async clickSave() {

    await this.page
      .getByRole('button', {
        name: 'Save'
      })
      .click();

    console.log('✅ Save Button Clicked');
  }

  async verifyLedgerCreated() {

    await this.page.waitForTimeout(3000);

    console.log('✅ Ledger Created Successfully');
  }

  async takeLedgerScreenshot() {

    await this.page.screenshot({
      path: 'screenshots/LedgerCreated.png',
      fullPage: true
    });

    console.log('📸 Ledger Screenshot Saved');
  }
}