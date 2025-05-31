// pages/ProfilePage.js
exports.ProfilePage = class ProfilePage {
  constructor(page) {
    this.page = page;
    this.accountHeader = page.getByText('My Account', { exact: true });
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
  }

  async verifyIsLoggedIn() {
    await this.accountHeader.waitFor({ state: 'visible' });
  }

  async logout() {
    await this.logoutButton.click();
    await this.page.waitForURL('**/profile');
  }
};
