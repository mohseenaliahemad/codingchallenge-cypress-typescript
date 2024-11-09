import { defineConfig } from "cypress";
import { configureVisualRegression } from 'cypress-visual-regression'

export default defineConfig({
  e2e: {
    env: {
      visualRegressionType: 'regression',
      visualRegressionBaseDirectory: 'cypress/snapshot/base',
      visualRegressionDiffDirectory: 'cypress/snapshot/diff',
      visualRegressionGenerateDiff: 'always',
      visualRegressionFailSilently: true
    },
    screenshotsFolder: './cypress/snapshots/actual',
    setupNodeEvents(on, config) {
      configureVisualRegression(on)
    },
  },
  viewportHeight:600,
  viewportWidth:1200,
  chromeWebSecurity: false
});
