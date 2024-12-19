const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  //video: true, // Enable video recording
  screenshotOnRunFailure: true, // Enable screenshots on test failure
  chromeWebSecurity: true, // Enable Chrome Web Security
  },
  env: {
    URL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  }
});
