const { test, expect } = require("../../fixtures/custom-test");

test.describe.serial("End-to-End Smoke Tests", () => {
  test("Checkout and Payment Flow", async ({
    loginPage,
    dashboardPage,
    cartPage,
    checkoutPage,
    paymentPage,
  }) => {
    // Step 1: Login
    await loginPage.goto();
    await loginPage.loginWithMobile(
      process.env.PHONE_NUMBER,
      process.env.PASSWORD
    );
    await loginPage.longPause();

    // Step 2: Add product to cart
    await dashboardPage.goto();
    await dashboardPage.addFirstProductToCart();
    await dashboardPage.viewCart();

    // ✅ Assert cart has item
    expect(await cartPage.isCartEmpty()).toBe(false);

    // Step 3: Checkout and Place Order
    await cartPage.proceedToCheckout();
    await checkoutPage.placeOrder();

    // ✅ Assert available Payment Methods
    await paymentPage.isOnPaymentPage();
    await paymentPage.checkAvailablePaymentMethods([
      "Add New Credit Card",
      "QR PromptPay",
    ]);

    // Step 4: Attempt Payment via QR PromptPay
    await paymentPage.clickQRPromptPay();
    await paymentPage.clickPayNow();

    // ✅ Assert QR Code visibility
    await paymentPage.checkQRCode();

    // Step 5: Attempt Payment via Credit Card
    await paymentPage.goBack();
    await paymentPage.selectSavedCard();
    await paymentPage.clickPayNow();

    // ✅ Final confirmation assertion
    await paymentPage.assertPaymentSuccessful();
  });
});
