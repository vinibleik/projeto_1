module.exports = {
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    testMatch: ["**/tests/unit/**/*.ts", "**/tests/integration/**/*.ts"],
};
