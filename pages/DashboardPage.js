// pages/DashboardPage.js
exports.DashboardPage = class DashboardPage {
  constructor(page) {
    this.page = page;
    this.accountLink = page.getByRole("link", { name: "Account" });
    this.firstProductCard = page.getByRole("article").first();
    this.viewCartButton = page.getByRole("link", { name: "Cart" });
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickAccount() {
    await this.accountLink.click();
  }

  async addFirstProductToCart() {
    await this.firstProductCard.hover(); // Hover over the product card to trigger button visibility
    await this.firstProductCard
      .getByRole("button", { name: "Add to Cart" })
      .click();
  }

  async viewCart() {
    await this.viewCartButton.click();
  }
};
