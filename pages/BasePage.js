// pages/BasePage.js
exports.BasePage = class BasePage {
  constructor(page) {
    this.page = page;
  }

  async fillTextbox(locator, value) {
    await locator.waitFor(); // Wait for element to be attached & visible
    await locator.fill(""); // Clear any existing text
    await locator.fill(value); // Fill new value
  }

  async shortPause() {
    await this.page.waitForTimeout(5000);
  }

  async longPause() {
    await this.page.waitForTimeout(15000);
  }

  async waitForPageReady(expectedUrl) {
    await this.page.waitForURL(expectedUrl, { timeout: 10000 });
    await this.page.waitForLoadState("networkidle");
  }
};
