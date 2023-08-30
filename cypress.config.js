const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/{api,e2e}/**/*.{cy,spec}.{js,jsx,ts,tsx}',
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  // Performance optimization
  defaultCommandTimeout: 10000,
  execTimeout: 60000,
  numTestsKeptInMemory: 0,
  chromeWebSecurity: false,
  chromeArgs: ['--disable-extensions'],
  video: false,
  retries: {
    // Configure retry attempts for `cypress run`.Default is 0
    runMode: 2,
  },
})
