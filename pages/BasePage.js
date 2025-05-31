// pages/BasePage.js
exports.BasePage = class BasePage {
  constructor(page) {
    this.page = page;
  }

  async fillTextbox(locator, value) {
    await locator.waitFor();        // Wait for element to be attached & visible
    await locator.fill('');         // Clear any existing text
    await locator.fill(value);      // Fill new value
  }
};
