import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverageFrom: [
    "src/app/**",
    "!**/icons/**",
    "!**/types/**",
    "!**/constants/**",
    "!src/app/not-found.tsx",
    // Tech Debt
    "!**/features/**",
    "!**/app/**/*page.{js,ts,jsx,tsx}",
    "!**/app/**/*layout.{js,ts,jsx,tsx}",
  ],
};

export default createJestConfig(config);
