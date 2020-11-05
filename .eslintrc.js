module.exports = {
	extends: [
		// add more generic rulesets here, such as:
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
	],
	rules: {
		// override/add rules settings here, such as:
		// 'vue/no-unused-vars': 'error'
		'vue/html-indent': ["error", 4, {
		}],
		"vue/html-self-closing": ["error", {
			"html": {
				"void": "any",
				"normal": "any",
				"component": "any"
			},
			"svg": "any",
			"math": "any"
		}]
	}
}