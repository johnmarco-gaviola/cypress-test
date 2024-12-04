const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/projects/SwagLabs/ui/*.cy.js",
    video: true
  },
  projectId: "72p43o",
});