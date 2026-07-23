const baseConfig = require("./base");

// Lazy-load Angular dependencies only when needed
function createAngularConfig() {
    try {
        const angular = require("angular-eslint");
        const tseslint = require("typescript-eslint");

        return [
            // Global-only entries (e.g. `ignores`) must stay unscoped, everything
            // else is JS/TS-oriented and must not leak onto Angular template files.
            ...baseConfig.map(config =>
                "ignores" in config && Object.keys(config).length === 1
                    ? config
                    : { ...config, files: ["**/*.ts"] }
            ),
            ...tseslint.configs.recommendedTypeChecked.map(config => ({
                ...config,
                files: ["**/*.ts"],
            })),
            ...angular.configs.tsRecommended.map(config => ({
                ...config,
                files: ["**/*.ts"],
            })),
            {
                files: ["**/*.ts"],
                languageOptions: {
                    parserOptions: {
                        projectService: true,
                    },
                },
                processor: angular.processInlineTemplates,
                rules: {
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
            ...angular.configs.templateRecommended.map(config => ({
                ...config,
                files: ["**/*.html"],
            })),
        ];
    } catch (error) {
        throw new Error(
            'Angular support requires "angular-eslint" and "typescript-eslint" to be installed.\n' +
            'Install them with: pnpm add -D angular-eslint typescript-eslint'
        );
    }
}

module.exports = createAngularConfig();