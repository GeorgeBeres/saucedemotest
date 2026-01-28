const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {
      // node events
    },
    specPattern: "cypress/e2e/**/*.js"
  }
});
