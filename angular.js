const baseConfig = require("./base");

// Lazy-load Angular dependencies only when needed
function createAngularConfig() {
    try {
        const angularEslint = require("@angular-eslint/eslint-plugin");
        const angularTemplateEslint = require("@angular-eslint/eslint-plugin-template");
        const tseslint = require("typescript-eslint");
        
        return [
            ...baseConfig,
            ...tseslint.configs.recommendedTypeChecked,
            {
                files: ["**/*.ts"],
                languageOptions: {
                    parserOptions: {
                        projectService: true,
                    },
                },
                plugins: {
                    "@angular-eslint": angularEslint,
                },
                rules: {
                    ...angularEslint.configs.recommended.rules,
                    "@angular-eslint/directive-selector": [
                        "error",
                        {
                            type: "attribute",
                            prefix: "app",
                            style: "camelCase",
                        },
                    ],
                    "@angular-eslint/component-selector": [
                        "error",
                        {
                            type: "element",
                            prefix: "app",
                            style: "kebab-case",
                        },
                    ],
                },
            },
            {
                files: ["**/*.html"],
                plugins: {
                    "@angular-eslint/template": angularTemplateEslint,
                },
                rules: {
                    ...angularTemplateEslint.configs.recommended.rules,
                },
            },
        ];
    } catch (error) {
        throw new Error(
            'Angular support requires "@angular-eslint/eslint-plugin", "@angular-eslint/eslint-plugin-template", and "typescript-eslint" to be installed.\n' +
            'Install them with: pnpm add -D @angular-eslint/eslint-plugin @angular-eslint/eslint-plugin-template typescript-eslint'
        );
    }
}

module.exports = createAngularConfig();