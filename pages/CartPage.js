// pages/CartPage.js
exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.accountHeader = page.getByText("My Account", { exact: true });
    this.logoutButton = page.getByRole("button", { name: "Logout" });
    this.emptyCartText = page.locator("h4", { hasText: "No products found" });
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }

  async goto() {
    await this.page.goto(process.env.BASE_URL + "/cart");
  }

  async isCartEmpty() {
    return await this.emptyCartText.isVisible();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
};
