# eslint-config

Shared ESLint configuration for Discord-like projects with modular configs for different environments.

## Installation

```bash
pnpm install eslint-config --save-dev
```

## Usage

This package provides three specialized configurations:

### For React/Next.js Projects

```javascript
// eslint.config.mjs
import { react } from "eslint-config";

export default [
    ...react,
    {
        languageOptions: {
            parserOptions: {
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
];
```

### For Node.js/NestJS Projects

```javascript
// eslint.config.mjs
import { node } from "eslint-config";

export default [
    ...node,
    {
        languageOptions: {
            parserOptions: {
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
];
```

### Base Configuration Only

```javascript
// eslint.config.mjs
import { base } from "eslint-config";

export default [
    ...base,
    // Your additional configurations
];
```

## What's Included

### Base Config

- ESLint recommended rules
- Prettier integration
- Common code quality rules
- Standard ignore patterns

### React Config

- All base rules
- TypeScript recommended rules with type checking
- React-specific rules
- Next.js compatibility

### Node Config

- All base rules
- TypeScript recommended rules with type checking
- Node.js globals
- Jest globals
- NestJS-friendly rules

## Peer Dependencies

This configuration requires the following peer dependencies:

- `eslint ^9.0.0`
- `@eslint/js ^9.0.0`
- `typescript ^5.0.0`
- `@typescript-eslint/eslint-plugin ^8.0.0`
- `@typescript-eslint/parser ^8.0.0`
- `eslint-plugin-prettier ^5.0.0`
- `prettier ^3.0.0`
- `typescript-eslint ^8.0.0`
- `globals ^16.0.0`
