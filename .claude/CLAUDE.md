# Synapse Project Memory

## Project Overview
- **Name**: Synapse
- **Type**: Frontend-only React application
- **Purpose**: Modern cloud-native agent orchestration UI
- **Replaces**: Previous Agentix repo

## Tech Stack
- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS + ShadCN UI
- **Routing**: React Router DOM
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint + Prettier

## Key Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run linting
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run typecheck` - Run TypeScript type checking
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage

## Project Structure
```
synapse/
├── assets/               # logo.png, favicon.ico (root assets)
├── public/               # favicon.ico (copied from assets)
├── src/
│   ├── assets/           # logo.png (copied from root assets)
│   ├── components/
│   │   ├── layout/       # TopNav, Sidebar, Shell
│   │   └── ui/           # ShadCN components
│   ├── pages/            # Home, Canvas
│   ├── router/           # React Router config
│   ├── styles/           # globals.css
│   └── lib/              # utils.ts
└── config files
```

## UI Architecture
- **Shell**: Responsive flex layout preventing horizontal scroll
  - **Mobile**: Standard stacked layout with sheet overlay sidebar
  - **Desktop**: Flex layout with fixed sidebar and adaptive main content
- **Sidebar**: Fixed position vertical navigation with proper overflow handling
  - **Header**: Black background with clickable logo and "Synapse" branding (white text, links to /, fixed 64px height)
  - **Navigation**: Scrollable middle section with Dashboard and Canvas links
  - **User Section**: Avatar (rounded square) and "User" label at bottom with border-top
  - **Collapse Button**: Positioned on right border at top, circular with shadow
  - Collapsible: 80px collapsed (larger icons), 256px expanded (with labels)
  - Z-index: 30 (below modals, above content)
- **TopNav**: Sticky header with breadcrumb navigation (64px height)
  - Dynamic breadcrumbs based on current route
  - Top-level routes (Dashboard, Canvas) show single breadcrumb
  - Sub-routes show full hierarchy (e.g., Canvas > Workflow)
  - Height aligned with sidebar logo section bottom border
  - Flex-shrink-0 for consistent height
- **Main Content**: Scrollable area that adapts to sidebar width
  - Responsive margins and proper overflow handling
  - Max-width container with full width constraint

## Current Status
- ✅ Complete project scaffold created
- ✅ All dependencies installed and updated to latest versions
- ✅ Development server configured
- ✅ Responsive UI shell implemented
- ✅ Basic routing (Home, Canvas) working
- ✅ Testing setup complete with passing tests
- ✅ All scripts working (dev, build, lint, format, typecheck, test)
- ✅ Production build successful
- ✅ Comprehensive .gitignore configured
- ✅ Logo and favicon properly integrated and working
- ✅ Redesigned layout with collapsible sidebar containing logo and branding
- ✅ TopNav repositioned to work with sidebar layout
- ✅ Avatar moved to sidebar bottom with rounded square styling
- ✅ Logo black background extends full height of header section
- ✅ Collapse button repositioned to sidebar border with circular styling
- ✅ Fixed responsive layout with proper overflow handling and no horizontal scroll
- ✅ Optimized sidebar z-index and scroll behavior
- ✅ Collapse button moved to top of sidebar border
- ✅ Improved collapsed sidebar with larger icons and better spacing (80px width)
- ✅ Implemented breadcrumb navigation in TopNav with route-based logic
- ✅ Set sidebar collapsed by default for better initial UX
- ✅ Top-level routes (Dashboard, Canvas) show single breadcrumb
- ✅ Logo and app name clickable to navigate to Dashboard (/)
- ✅ TopNav height aligned with sidebar logo section (64px)
- ✅ Fixed logo section to maintain consistent 64px height when expanded/collapsed
- ✅ Moved collapse button slightly lower for better visual balance

## Development Notes
- Server runs on available port (check terminal output)
- Uses Inter font via Google Fonts
- Clean grayscale/neutral design palette
- TypeScript strict mode enabled
- All ShadCN components use Radix UI primitives
- Logo: PNG file from /assets/logo.png (33KB)
- Favicon: ICO file from /assets/favicon.ico (15KB)