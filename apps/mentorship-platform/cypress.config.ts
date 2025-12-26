import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents() {},
    supportFile: false,
    baseUrl: "http://localhost:3000/",
  },
});
