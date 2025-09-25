const baseConfig = require("./base");

// Lazy-load Vue dependencies only when needed
function createVueConfig() {
    try {
        const vueEslintParser = require("vue-eslint-parser");
        const eslintPluginVue = require("eslint-plugin-vue");
        
        return [
            ...baseConfig,
            {
                files: ["**/*.{vue}"],
                languageOptions: {
                    parser: vueEslintParser,
                    parserOptions: {
                        parser: "@typescript-eslint/parser",
                        ecmaVersion: 2022,
                        sourceType: "module",
                    },
                },
                plugins: {
                    vue: eslintPluginVue,
                },
                rules: {
                    ...eslintPluginVue.configs["vue3-recommended"].rules,
                    "vue/multi-word-component-names": "warn",
                    "vue/no-unused-vars": "error",
                },
            },
        ];
    } catch (error) {
        throw new Error(
            'Vue support requires "vue-eslint-parser" and "eslint-plugin-vue" to be installed.\n' +
            'Install them with: pnpm add -D vue-eslint-parser eslint-plugin-vue'
        );
    }
}

module.exports = createVueConfig();