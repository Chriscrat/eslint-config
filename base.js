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
            // Indentation rules
            indent: [
                "error",
                4,
                {
                    SwitchCase: 1,
                    VariableDeclarator: 1,
                    outerIIFEBody: 1,
                    MemberExpression: 1,
                    FunctionDeclaration: { parameters: 1, body: 1 },
                    FunctionExpression: { parameters: 1, body: 1 },
                    CallExpression: { arguments: 1 },
                    ArrayExpression: 1,
                    ObjectExpression: 1,
                    ImportDeclaration: 1,
                    flatTernaryExpressions: false,
                    ignoreComments: false,
                    ignoredNodes: [
                        "TemplateLiteral *",
                        "JSXElement",
                        "JSXElement > *",
                        "JSXAttribute",
                        "JSXIdentifier",
                        "JSXNamespacedName",
                        "JSXMemberExpression",
                        "JSXSpreadAttribute",
                        "JSXExpressionContainer",
                        "JSXOpeningElement",
                        "JSXClosingElement",
                        "JSXFragment",
                        "JSXOpeningFragment",
                        "JSXClosingFragment",
                        "JSXText",
                        "JSXEmptyExpression",
                        "JSXSpreadChild",
                    ],
                    offsetTernaryExpressions: true,
                },
            ],
        },
    },
    {
        ignores: ["node_modules/**", "dist/**", "build/**", ".next/**", "eslint.config.*"],
    },
];
