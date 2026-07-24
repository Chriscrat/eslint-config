/**
 * Configuration factory for customizable ESLint setup
 */
function createConfig(options = {}) {
    const {
        // Prettier options
        indentSize = 4,
        quotes = "double", // "single" | "double"
        semicolons = true,
        printWidth = 100,
        
        // Rule severity
        consoleSeverity = "warn", // "off" | "warn" | "error"
        unusedVarsSeverity = "warn",
        
        // Additional rules
        additionalRules = {},
    } = options;

    const eslint = require("@eslint/js");
    const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

    return [
        eslint.configs.recommended,
        eslintPluginPrettierRecommended,
        {
            rules: {
                "no-console": consoleSeverity,
                "no-unused-vars": unusedVarsSeverity,
                "prettier/prettier": [
                    "error",
                    {
                        semi: semicolons,
                        trailingComma: "es5",
                        singleQuote: quotes === "single",
                        printWidth: printWidth,
                        tabWidth: indentSize,
                        useTabs: false,
                        bracketSpacing: true,
                        arrowParens: "avoid",
                        endOfLine: "lf",
                    },
                ],
                "eol-last": ["error", "always"],
                ...additionalRules,
            },
        },
        {
            ignores: ["node_modules/**", "dist/**", "build/**", ".next/**", "eslint.config.*"],
        },
    ];
}

module.exports = createConfig;
module.exports.createConfig = createConfig;