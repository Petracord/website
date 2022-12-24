module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:import/recommended',
		'plugin:import/typescript'
	],
	plugins: [
		'svelte3',
		'@typescript-eslint',
		'import'
	],
	ignorePatterns: [
		'*.cjs'
	],
	overrides: [
		{
			files: [
				'*.svelte'
			],
			processor: 'svelte3/svelte3'
		}
	],
	settings: {
		'svelte3/typescript': () => require('typescript'),
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts']
		},
		'import/resolver': {
			'typescript': {
				'alwaysTryTypes': true,
				'project': './tsconfig.json'
			}
		}
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	"rules": {
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-empty-interface": "off",
		"import/no-unresolved": "error",
		"import/no-named-as-default": "off",
		"import/order": [
			"error",
			{
				"groups": [
					"index",
					"sibling",
					"parent",
					"internal",
					"external",
					"builtin",
					"object",
					"type"
				]
			}
		]
	}
};
