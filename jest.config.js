module.exports = {
	testEnvironment: 'node',
	transform: {
		"^.+\\.tsx?$": "ts-jest"
	},
	moduleFileExtensions: [
		"ts",
		"tsx",
		"js",
		"jsx",
		"json",
		"node",
	],
	setupFilesAfterEnv: ["jest-extended", './jest.setup.js'],
	testRegex: '.*\\.test\\.ts$',
	modulePathIgnorePatterns: ["/dist/"],
	watchPathIgnorePatterns: ['globalConfig'],
	coverageDirectory: 'coverage',
	collectCoverageFrom: [
		'src/**/*.{ts,tsx,js,jsx}',
		'!src/**/*.d.ts',
	],
};
