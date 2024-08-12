module.exports = {
  component: {
    // devServer: {
    //   framework: "create-react-app",
    //   bundler: "webpack",
    // },
    devServer: () => ({ port: [] })
    },

  e2e: {
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: true,
  },
  retries: {
    openMode: 1,
    runMode: 2,
  },
  // retries: {
  //   runMode: true,
  //   openMode: true,
  //   experimentalStrategy: "detect-flake-and-pass-on-threshold",
  //   experimentalOptions: {
  //     maxRetries: 4,
  //     passesRequired: 3,
  //   },
  // },
  // retries: {
  //   runMode: true,
  //   openMode: true,
  //   experimentalStrategy: "detect-flake-but-always-fail",
  //   experimentalOptions: {
  //     maxRetries: 2,
  //     stopIfAnyPassed: true,
  //   },
  // },
  // retries: {
  //   runMode: true,
  //   openMode: true,
  //   experimentalStrategy: "detect-flake-but-always-fail",
  //   experimentalOptions: {
  //     maxRetries: 2,
  //     stopIfAnyPassed: false,
  //   },
  // },
  // experimentalBurnIn: {
  //   default: 3,
  //   flaky: 5,
  // },
};
