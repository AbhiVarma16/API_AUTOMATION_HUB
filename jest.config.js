const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        outputPath: "test-report.html",
        pageTitle: "API Test Report",
      },
    ],
  ],
};
