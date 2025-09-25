const baseConfig = require("./base");

// Lazy-load TypeScript and React dependencies only when needed
function createReactConfig() {
    try {
        const tseslint = require("typescript-eslint");
        
        return [
            ...baseConfig,
            ...tseslint.configs.recommendedTypeChecked,
            {
                files: ["**/*.{js,jsx,ts,tsx}"],
                languageOptions: {
                    parserOptions: {
                        projectService: true,
                    },
                },
                rules: {
                    "react/react-in-jsx-scope": "off",
                    "react/prop-types": "off",
                    "@typescript-eslint/no-floating-promises": "warn",
                    "@typescript-eslint/no-unsafe-argument": "warn",
                },
            },
            {
                files: ["eslint.config.*", "*.config.*"],
                ...tseslint.configs.disableTypeChecked,
            },
        ];
    } catch (error) {
        throw new Error(
            'React/TypeScript support requires "typescript-eslint" to be installed.\n' +
            'Install it with: pnpm add -D typescript-eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser'
        );
    }
}

module.exports = createReactConfig();
