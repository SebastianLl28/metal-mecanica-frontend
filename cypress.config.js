import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    viewportWidth: 1800,
    viewportHeight: 1000,
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
})
