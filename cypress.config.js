const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      on('fail', (error, runnable) => {
        console.error('Test failed with the following message:', error.message);
        console.log('Novo informe pode estar disponível!');
        throw error; 
      });
    },
  },
});
