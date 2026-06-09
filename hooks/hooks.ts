import {
  Before,
  After,
  Status,
  setDefaultTimeout
} from '@cucumber/cucumber';

import { chromium } from 'playwright';

setDefaultTimeout(60000);

Before(async function () {

  this.browser = await chromium.launch({
    headless: false
  });

  this.context = await this.browser.newContext();

  this.page = await this.context.newPage();
});

After(async function ({ result }) {

  if (result?.status === Status.FAILED) {

    const screenshotName =
      `screenshots/Failed_${Date.now()}.png`;

    await this.page.screenshot({
      path: screenshotName,
      fullPage: true
    });

    console.log(
      `Screenshot Saved: ${screenshotName}`
    );
  }

  await this.browser.close();
});