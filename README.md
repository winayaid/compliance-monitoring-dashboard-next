# Compliance Monitoring Dashboard

A feature-based Next.js dashboard focused on compliance monitoring workflows. The project organizes UI, logic, and data access by feature so the codebase stays scalable and easy to maintain.

## Built With

- **Next.js** (App Router) as the main framework
- **React** for UI
- **TypeScript** for type safety
- **Tailwind CSS** for styling

## Key Libraries

- **Recharts** for charts and data visualization
- **TanStack Table** for advanced table features
- **React Hook Form** for form state management
- **Zod** for schema validation
- **Radix UI Slot** for composition-friendly UI primitives
- **Lucide React** for iconography
- **class-variance-authority**, **clsx**, and **tailwind-merge** for class composition and Tailwind utilities

## Based on Boilerplate

This project was built using the following boilerplate:

- `https://github.com/winayaid/nextjs-boilerplate`

## UI Demo

_Add an image of the UI demo here:_

```
![Dashboard](/public/demo/dashboard.png)
```

```
![Violations](/public/demo/violations.png)
```

```
![Violation Detail](/public/demo/violation-detail.png)
```

```
![Branch](/public/demo/branch.png)
```

```
![Report](/public/demo/report.png)
```

```
![User](/public/demo/user.png)
```

## How It Works (Feature-Based Architecture)

Feature-based architecture organizes code around user-facing capabilities (e.g., Dashboard, Auth, Users) rather than by technical layers. Each feature owns its UI, logic, and data access, keeping changes isolated and improving team velocity.

Suggested structure:

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

## Contributing

Contributions are welcome. If you'd like to contribute, please open an issue or pull request with a clear description of the change.

If you want to use this project for commercial purposes, please contact me first.

If this project helps you, please give the repo a star to support the developer community.
