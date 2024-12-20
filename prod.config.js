const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
            baseUrl:"https://www.flipkart.com"
       },
  env: {
            username:"testing Prod"
       }
});
