const { expect } = require("@playwright/test");
const { BasePage } = require("./BasePage");

exports.PaymentPage = class PaymentPage extends BasePage {
  constructor(page) {
    super(page); // initialize BasePage
    this.page = page;

    // Locators
    this.backButton = page.getByRole("button", { name: "Back" });
    this.savedCardItems = page
      .locator("text=Saved Cards >> xpath=..")
      .locator('button:has-text("Visa")');
    this.deleteCardButtons = page
      .locator("text=Saved Cards >> xpath=..")
      .locator('button:has-text("Delete")');
    this.addNewCreditCardButton = page.getByRole("button", {
      name: "Add New Credit Card",
    });
    this.qrPromptPayButton = page.getByRole("button", { name: "QR PromptPay" });
    this.payNowButton = page.locator("#pay-now-button");
    this.qrCodeImage = page.locator('img[alt="QR Code"]');
    this.successMessage = page.locator("p", {
      hasText: "Thank you for purchasing.",
    });
    this.paymentMethodButtons = page.locator("button >> span.text-sm");
  }

  async goBack() {
    await this.backButton.click();
  }

  async isOnPaymentPage() {
    const currentURL = this.page.url();
    return currentURL.includes("/payment-methods");
  }

  async selectSavedCard(index = 0) {
    await this.savedCardItems.nth(index).click();
  }

  async deleteSavedCard(index = 0) {
    await this.deleteCardButtons.nth(index).click();
  }

  async clickAddNewCreditCard() {
    await this.addNewCreditCardButton.click();
  }

  async clickQRPromptPay() {
    await this.qrPromptPayButton.click();
  }

  async clickPayNow() {
    await this.payNowButton.click();
  }

  async checkAvailablePaymentMethods(expectedMethods) {
    await this.page.waitForSelector('h1:has-text("My Payment Methods")', {
      timeout: 10000,
    });

    const actualTexts = await this.paymentMethodButtons.allTextContents();

    // Assert that each expected method is in the actual list
    for (const method of expectedMethods) {
      expect(actualTexts).toContain(method);
    }
  }

  async checkQRCode() {
    // Check QR Code image is visible
    await expect(this.qrCodeImage).toBeVisible();
  }

  async assertPaymentSuccessful() {
    await expect(this.successMessage).toBeVisible({ timeout: 10000 }); // wait up to 10 seconds
  }
};
