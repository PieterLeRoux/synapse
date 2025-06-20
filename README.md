# Synapse

A modern cloud-native agent orchestration UI built with React 19, TypeScript, and Vite.

## Features

- **Modern Tech Stack**: React 19, TypeScript, Vite, TailwindCSS
- **Component System**: ShadCN UI components with Radix UI primitives
- **Responsive Design**: Mobile-first layout with collapsible sidebar
- **Type Safety**: Full TypeScript coverage with strict mode
- **Testing**: Vitest and React Testing Library setup
- **Code Quality**: ESLint and Prettier configured

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run typecheck` - Run TypeScript compiler
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage

## 🔄 CI/CD

The project includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that runs on every push and pull request to `main` and `develop` branches:

### Parallel Jobs:
- **Lint**: ESLint code quality checks
- **Format**: Prettier formatting validation  
- **TypeScript**: Type checking with `tsc --noEmit`
- **Tests**: Unit and integration tests with Vitest
- **Build**: Production build verification with artifact upload

All jobs run in parallel for fast feedback and use Node.js 20 with npm caching for optimal performance.

## 🔐 Deployment & Security

### Vercel Deployment with Basic Auth

The app includes HTTP Basic Authentication for production deployment on Vercel:

**Setup:**
1. Deploy to Vercel: `vercel --prod`
2. Set environment variables in Vercel dashboard:
   - `BASIC_AUTH_USER` - Username for access
   - `BASIC_AUTH_PASS` - Password for access

**How it works:**
- `api/auth.js` - Vercel Edge Function middleware
- `vercel.json` - Routes all requests through auth middleware
- Users see browser login dialog before accessing the app
- If env vars not set, authentication is disabled

## Project Structure

```
synapse/
├── api/              # Vercel Edge Functions
│   └── auth.js       # Basic auth middleware
├── public/           # Static assets
├── src/
│   ├── assets/       # Images, icons, etc.
│   ├── components/
│   │   ├── layout/   # Layout components (TopNav, Sidebar, Shell)
│   │   └── ui/       # ShadCN UI components
│   ├── pages/        # Route components
│   ├── router/       # React Router configuration
│   ├── styles/       # Global styles and Tailwind config
│   └── lib/          # Utilities and helpers
├── components.json   # ShadCN UI configuration
├── vercel.json       # Vercel deployment config
└── ...config files
```

## Architecture

- **Layout**: Shell component provides the main layout structure
- **Navigation**: React Router DOM for client-side routing
- **State Management**: React hooks (ready for additional state management)
- **Styling**: TailwindCSS with CSS variables for theming
- **Components**: ShadCN UI for consistent design system

## License

MIT