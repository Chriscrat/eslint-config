const baseConfig = require("./base");

// Lazy-load JSON/YAML linting dependencies only when needed
function createDataConfig() {
    try {
        const jsonEslint = require("eslint-plugin-json");
        
        return [
            ...baseConfig,
            {
                files: ["**/*.json"],
                plugins: {
                    json: jsonEslint,
                },
                rules: {
                    "json/*": ["error", "allowComments"],
                },
            },
            {
                files: ["**/*.{yml,yaml}"],
                rules: {
                    // YAML-specific rules would go here
                    // Currently ESLint doesn't directly support YAML
                    // but this structure allows for future integration
                },
            },
        ];
    } catch (error) {
        throw new Error(
            'JSON/Data format support requires "eslint-plugin-json" to be installed.\n' +
            'Install it with: pnpm add -D eslint-plugin-json'
        );
    }
}

module.exports = createDataConfig();