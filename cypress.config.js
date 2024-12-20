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
  },
  "includeShadowDom":true,
  //"defaultCommandTimeout":20000
  retries: {
    experimentalStrategy: 'detect-flake-but-always-fail',
    experimentalOptions: {
      maxRetries: 2,
      stopIfAnyPassed: true,
    },

    // you must also explicitly set openMode and runMode to
    // either true or false when using experimental retries
    openMode: true,
    runMode: true,
  }
});
