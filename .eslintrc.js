module.exports = {
	extends: 'eslint:recommended',
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: '2017',
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint'],
	env: {
		browser: true,
		commonjs: true,
		node: true,
		es6: true
	},
	rules: {
		indent: ['error', 'tab', {
			SwitchCase: 1,
			MemberExpression: 1,
			FunctionDeclaration: { parameters: 1 },
			FunctionExpression: { parameters: 1 },
			CallExpression: { arguments: 1 }
		}],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-empty': 'off',
		'no-unsued-vars': 'off',
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'no-trailing-spaces': 'error',
		'space-in-parens': 'error',
		'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
		'space-before-blocks': 'error',
		'arrow-spacing': 'error',
		'keyword-spacing': 'error',
		'comma-spacing': ['error', { before: false, after: true }],
		'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'minimum' }],
		'object-curly-spacing': ['error', 'always'],
		'object-curly-newline': ['error', { multiline: true }],
		'max-len': ['error', {
			code: 120,
			ignoreUrls: true,
			ignoreTemplateLiterals: true,
			ignoreRegExpLiterals: true
		}],
		'@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
		'@typescript-eslint/indent': ['error', 'tab', {
			SwitchCase: 1,
			MemberExpression: 1,
			FunctionDeclaration: { parameters: 1 },
			FunctionExpression: { parameters: 1 },
			CallExpression: { arguments: 1 }
		}]
	}
};
