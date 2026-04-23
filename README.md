#### Node Package

# @singfuse/singapore

[![npm version](https://img.shields.io/npm/v/@singfuse/singapore?logo=npm&logoColor=cc3534&label=version&labelColor=ffffff&color=cc3534)](https://www.npmjs.com/package/@singfuse/singapore)
[![ci](https://github.com/singfuse/singapore/actions/workflows/ci.yml/badge.svg)](https://github.com/singfuse/singapore/actions/workflows/ci.yml)

## Development Setup

To contribute or run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/singfuse/singapore.git
   cd singapore
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
