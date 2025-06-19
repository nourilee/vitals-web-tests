// pages/CheckoutPage.js
exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });
  }

  async goto() {
    await this.page.goto(process.env.BASE_URL + "/checkout");
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }
};
