const baseConfig = require("./base");

// Lazy-load Svelte dependencies only when needed
function createSvelteConfig() {
    try {
        const svelteEslintParser = require("svelte-eslint-parser");
        const eslintPluginSvelte = require("eslint-plugin-svelte");
        
        return [
            ...baseConfig,
            {
                files: ["**/*.{svelte}"],
                languageOptions: {
                    parser: svelteEslintParser,
                    parserOptions: {
                        parser: "@typescript-eslint/parser",
                        ecmaVersion: 2022,
                        sourceType: "module",
                    },
                },
                plugins: {
                    svelte: eslintPluginSvelte,
                },
                rules: {
                    ...eslintPluginSvelte.configs.recommended.rules,
                    "svelte/no-unused-svelte-ignore": "error",
                },
            },
        ];
    } catch (error) {
        throw new Error(
            'Svelte support requires "svelte-eslint-parser" and "eslint-plugin-svelte" to be installed.\n' +
            'Install them with: pnpm add -D svelte-eslint-parser eslint-plugin-svelte'
        );
    }
}

module.exports = createSvelteConfig();