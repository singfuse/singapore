#### Node Package

# Vinkas Base

[![npm version](https://img.shields.io/npm/v/@vinkas/base?logo=npm&logoColor=cc3534&label=version&labelColor=ffffff&color=cc3534)](https://www.npmjs.com/package/@vinkas/base)
[![ci](https://github.com/vinkashq/base-node/actions/workflows/ci.yml/badge.svg)](https://github.com/vinkashq/base-node/actions/workflows/ci.yml)

**@vinkas/base** node package

## Development Setup

To contribute or run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vinkashq/base-node.git
   cd base-node
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Build the package:**

   ```bash
   pnpm run build
   ```

4. **Run tests:**
   ```bash
   pnpm test
   ```

## Available Scripts

- `pnpm run build` - Build the project using `tsup`.
- `pnpm test` - Run tests using `vitest`.
- `pnpm run format` - Format code using `prettier`.
- `pnpm run typecheck` - Run TypeScript type checking without emitting files.

## License

This project is licensed under the [MIT License](LICENSE).
