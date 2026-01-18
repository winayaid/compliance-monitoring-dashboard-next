# Next.js Feature-Based Boilerplate

This boilerplate uses a feature-based architecture to help you build scalable web apps in Next.js. Instead of organizing by technical layers, code is grouped by business features so each feature stays cohesive and easy to grow.

## Why Feature-Based Architecture

Feature-based architecture organizes code around user-facing capabilities (e.g., Dashboard, Auth, Posts) rather than by type (components, hooks, services). Each feature owns its UI, logic, and data access, which keeps changes isolated and improves team velocity.

Key benefits:

- Improved scalability as features grow independently.
- Better maintainability through focused, self-contained modules.
- Easier reuse of feature logic and components.

## Suggested Structure

```
/src
  /features
    /Dashboard
      components
      hooks
      services
      index.ts
    /Authentication
      components
      hooks
      services
      index.ts
```

## How It Works Here

- Feature code lives under `src/features`.
- Each feature can include its own components, hooks, services, and state.

This keeps feature logic encapsulated while still allowing shared UI and utilities.

## Running the App

Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
# or
bun install
```

Start the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
# or
bun dev
```

Open `http://localhost:3000` in your browser.

## Build and Start (Production)

```bash
pnpm build
pnpm start
```

## Notes

- Keep feature boundaries clear to avoid tight coupling.
- Prefer feature-level hooks/services for business logic.
