# Vitals Appium WDIO

This project is a test automation framework for the Vitals WEB application using [Playwright](https://playwright.dev/) for end-to-end testing.

🚀 **Latest Test Report:**  
[![View Report](https://img.shields.io/badge/Allure-Report-blueviolet?logo=allure&logoColor=white)](https://vitals-web-test-reports.surge.sh/)


---

## 📦 Project Structure

```
.
├── pages/                 # Page Object classes (LandingPage, LoginPage, etc.)
├── tests/                 # Test specs (Smoke tests, auth tests, etc.)
├── fixtures/              # Custom fixtures for shared context or reusable setup
├── playwright.config.js   # Playwright project and test settings
├── .env                   # Secrets like BASE_URL, PHONE_NUMBER, PASSWORD
└── README.md              # You're here!
```

---

## 🔧 Setup

1. **Install dependencies**

```bash
npm install
```

2. **Create a `.env` file**

```bash
# .env
BASE_URL=https://dev.vitals.co.th/en
PHONE_NUMBER=66999999999
EMAIL=vitalstest123@mailinator.com
PASSWORD=securepassword123
```

3. **Install Allure (if not installed globally)**

```bash
# Allure CLI via NPM
npm install -g allure-commandline --save-dev
```

---

## 🚀 Running Tests

### ✅ All Tests (Headless)

```bash
npx playwright test
```

### 👀 All Tests (Headed)

```bash
npx playwright test --headed
```

### 🧪 Run a Single Test File

```bash
npx playwright test tests/auth/login.spec.js
```

### 🧪 Run a Test by Name

```bash
npx playwright test -g "Login via mobile number"
```

### 🧪 Run a Single Browser Only (e.g., Chromium)

```bash
npx playwright test --project=chromium
```

---

## 📊 Allure Reporting

### 1. Run Tests and Generate Report Files

```bash
npx playwright test --reporter=line,allure-playwright
```

### 2. Open the Allure Report

```bash
allure serve ./allure-results
```

> Make sure `allure-commandline` is installed globally or via npm.

---

## 🧱 Current Features

- ✅ Login via mobile number
- ✅ Login via email
- ✅ Add product to cart from dashboard
- 🛠️ More features planned under **Phase 1: Smoke E2E Coverage**

---

## 📌 Tips for Debugging

- Run with UI: `npx playwright test --headed`
- Use debugger: Add `await page.pause();`
- Use trace viewer: 
  ```bash
  npx playwright show-trace trace.zip
  ```

---

## 📃 License

MIT (or customize as needed)