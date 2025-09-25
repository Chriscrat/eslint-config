const baseConfig = require("./base");

// Lazy-load Python dependencies only when needed
function createPythonConfig() {
    try {
        // Note: This is a conceptual example - ESLint doesn't directly support Python
        // But we can set up for future Python linting tools integration
        return [
            ...baseConfig,
            {
                files: ["**/*.py"],
                languageOptions: {
                    ecmaVersion: "latest",
                    sourceType: "module",
                },
                rules: {
                    // Python-specific rules would go here
                    // This is a placeholder for future Python linting integration
                },
            },
        ];
    } catch (error) {
        throw new Error(
            'Python support is experimental and requires additional tooling.\n' +
            'Consider using pylint, black, or ruff for Python linting.'
        );
    }
}

module.exports = createPythonConfig();