# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-07-24

### Removed
- Native ESLint `indent` rule from `base.js`, `configurable.js`, and `node.js`. It was re-enabled right after `eslint-plugin-prettier/recommended` (which extends `eslint-config-prettier` and disables `indent` on purpose), so the two fought over the same code. The core `indent` rule isn't TypeScript-aware and disagreed with Prettier's own output on decorators, multi-line type literals, etc. — `prettier/prettier` is now the sole formatting authority.

## [1.0.2] - 2026-07-23

### Fixed
- `angular.js` now uses the unified `angular-eslint` package instead of the removed `configs` export from `@angular-eslint/eslint-plugin`, which broke with `@angular-eslint` v19+ (flat config `configs.recommended` moved out of the plugin package)
- Scoped `base.js` and `typescript-eslint` type-checked rules to `**/*.ts` inside the Angular config, so they no longer leak onto `**/*.html` template files and crash core rules (e.g. `indent`) that assume a JS/TS AST

## [1.0.0] - 2025-09-26

### Added
- Initial release of eslint-config
- Modular ESLint configuration with base, react, and node presets
- TypeScript support with project service integration
- Prettier integration with consistent 4-space indentation
- React/Next.js specific rules and configurations
- Node.js/NestJS specific rules and configurations
- Comprehensive documentation and usage examples

### Features
- **Base Config**: Core ESLint rules with Prettier integration
- **React Config**: React/Next.js optimized rules with TypeScript
- **Node Config**: Node.js/NestJS optimized rules with Jest support
- **Professional Setup**: Ready for monorepo and standalone usage