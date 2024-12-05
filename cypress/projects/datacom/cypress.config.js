const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/projects/datacom/ui/*.cy.js",
    video: true,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    blockHosts: ["https://events.backtrace.io"],
    viewportHeight: 1080,
    viewportWidth: 1920
  },
  projectId: "72p43o",
});
