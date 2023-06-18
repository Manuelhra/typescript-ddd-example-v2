import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(_on, _config) {
      // handler node events
    },
    baseUrl: 'http://localhost:5000',
    env: {
      stauts_url: '/status',
      courses_url: '/courses',
    }
  },
  video: false,
});
