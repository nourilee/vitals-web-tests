const { test } = require("../../fixtures/custom-test");

test.describe.serial("Authentication Smoke Tests", () => {

    test("Login via Mobile Number", async ({ loginPage, profilePage }) => {
        await loginPage.goto();
        await loginPage.loginWithMobile(
            process.env.PHONE_NUMBER,
            process.env.PASSWORD
        );
        await profilePage.verifyIsLoggedIn();
    });

    test("Login via Email", async ({ loginPage, profilePage }) => {
        await loginPage.goto();
        await loginPage.loginWithEmail(
            process.env.EMAIL,
            process.env.PASSWORD
        );
        await profilePage.verifyIsLoggedIn();
    });

    test("Logout", async ({ loginPage, profilePage }) => {
        await loginPage.goto();
        await loginPage.loginWithMobile(
            process.env.PHONE_NUMBER,
            process.env.PASSWORD
        );
        await profilePage.logout();
    });

    test("Redirect to login when accessing add to cart without login", async ({ loginPage, dashboardPage }) => {
        await dashboardPage.goto();
        await dashboardPage.addFirstProductToCart();
        await loginPage.verifyLoginModalIsVisible();
    });
});
