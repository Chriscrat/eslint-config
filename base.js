const eslint = require("@eslint/js");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = [
    eslint.configs.recommended,
    eslintPluginPrettierRecommended,
    {
        rules: {
            "no-console": "warn",
            "prettier/prettier": [
                "error",
                {
                    semi: true,
                    trailingComma: "es5",
                    singleQuote: false,
                    printWidth: 100,
                    tabWidth: 4,
                    useTabs: false,
                    bracketSpacing: true,
                    arrowParens: "avoid",
                    endOfLine: "lf",
                },
            ],
            "eol-last": ["error", "always"],
            "no-unused-vars": "warn",
        },
    },
    {
        ignores: ["node_modules/**", "dist/**", "build/**", ".next/**", "eslint.config.*"],
    },
];
