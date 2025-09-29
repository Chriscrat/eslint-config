const baseConfig = require("./base");

// Lazy-load TypeScript and Node.js dependencies only when needed
function createNodeConfig() {
    try {
        const tseslint = require("typescript-eslint");
        const globals = require("globals");
        
        return [
            ...baseConfig,
            ...tseslint.configs.recommendedTypeChecked,
            {
                files: ["src/**/*.{js,ts}", "test/**/*.{js,ts}"],
                languageOptions: {
                    globals: {
                        ...globals.node,
                        ...globals.jest,
                    },
                    parserOptions: {
                        projectService: true,
                    },
                },
                rules: {
                    "@typescript-eslint/no-unused-vars": "warn",
                    "@typescript-eslint/no-explicit-any": "off",
                    "@typescript-eslint/no-floating-promises": "warn",
                    "@typescript-eslint/no-unsafe-argument": "warn",
                    // Fix indentation conflicts with TypeScript decorators (NestJS, etc.)
                    "indent": ["error", 4, {
                        "ignoredNodes": [
                            "PropertyDefinition[decorators.length > 0] > .key",
                            "TSPropertySignature"
                        ]
                    }],
                },
            },
            {
                files: ["eslint.config.*"],
                ...tseslint.configs.disableTypeChecked,
            },
        ];
    } catch (error) {
        throw new Error(
            'Node.js/TypeScript support requires "typescript-eslint" and "globals" to be installed.\n' +
            'Install them with: pnpm add -D typescript-eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser globals'
        );
    }
}

module.exports = createNodeConfig();
