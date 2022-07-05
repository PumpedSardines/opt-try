module.exports = {
	env: {
		browser: false,
		es6: true,
		node: true
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "./tsconfig.json",
		ecmaVersion: 2018,
		sourceType: "module",
		tsconfigRootDir: __dirname
	},
	plugins: ["@typescript-eslint", "jest"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:jest/recommended",
	],
	rules: {
		"eqeqeq": 2,
		"no-invalid-regexp": 2,
		"require-await": 2,
		"@typescript-eslint/no-namespace": 0,
		"@typescript-eslint/no-empty-interface": 0
	}
}
