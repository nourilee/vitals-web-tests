// generate-report.js
const { execSync } = require('child_process');

console.log('✅ Generating Allure report...');
try {
  execSync('npx allure generate ./allure-results --clean -o ./allure-report', { stdio: 'inherit' });
  console.log('📊 Allure report generated in ./allure-report');

  console.log('🚀 Deploying to Surge...');
  execSync('surge ./allure-report vitals-web-test-reports.surge.sh', { stdio: 'inherit' });
} catch (err) {
  console.error('❌ Failed to generate Allure report:', err);
  process.exit(1);
}
