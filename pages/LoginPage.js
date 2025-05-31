// pages/LoginPage.js
const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

exports.LoginPage = class LoginPage extends BasePage {
  constructor(page) {
    super(page); // initialize BasePage
    this.page = page;
    this.mobileLoginTab = page.getByText('Mobile Number');
    this.emailLoginTab = page.getByText('Email Address');
    this.mobileTextbox = page.getByRole('textbox', { name: 'Enter your mobile number' });
    this.emailTextbox = page.getByRole('textbox', { name: 'Email Address' });
    this.passwordTextbox = page.getByRole('textbox', { name: 'Enter your password' });
    this.confirmButton = page.getByRole('button', { name: 'Confirm' });
    this.loginModalHeader = page.getByText('Login to my account');
    this.closeModalButton = page.getByRole('button', { name: 'Close panel' });
  }

  async goto() {
    await this.page.goto(process.env.BASE_URL + '/profile');
  }

  async loginWithMobile(phone, password) {
    await this.mobileLoginTab.click();
    await this.fillTextbox(this.mobileTextbox, phone);
    await this.confirmButton.click();

    await this.fillTextbox(this.passwordTextbox, password);
    await this.confirmButton.click();
  }

  async loginWithEmail(email, password) {
    await this.emailLoginTab.click();
    await this.fillTextbox(this.emailTextbox, email);
    await this.confirmButton.click();

    await this.fillTextbox(this.passwordTextbox, password);
    await this.confirmButton.click();
  }

  async verifyLoginModalIsVisible() {
    await expect(this.loginModalHeader).toBeVisible();
    await this.closeModalButton.click();
  }
};
