Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore the specific error
    if (err.message.includes('initMap is not a function')) {
      return false;
    }
  
    // Allow other errors to fail the test
    return true;
  });