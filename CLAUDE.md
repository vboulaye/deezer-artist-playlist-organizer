# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**DeePlO** (Deezer Playlist Organizer) is a client-side SvelteKit application that helps users organize their Deezer playlists by artists. It connects directly to the Deezer API without requiring a backend server and is deployed as a static site on GitHub Pages.

## Development Commands

```bash
# Development with debug logging
pnpm run dev

# Build for production
pnpm run build

# Run all tests (integration + unit)
pnpm run test

# Type checking
pnpm run check

# Linting and formatting
pnpm run lint
pnpm run format

# Clean build artifacts
pnpm run clean
```

**Important**: This project uses pnpm as the package manager. Running `npm install` will fail due to a preinstall hook that enforces pnpm usage.

## Architecture Overview

### Technology Stack
- **Framework**: SvelteKit 2.7.3 with Svelte 5 (runes-based reactivity)
- **Language**: TypeScript with strict type checking
- **Styling**: Tailwind CSS + Skeleton Labs UI components
- **Build**: Vite with static adapter for GitHub Pages deployment
- **Testing**: Playwright (E2E) + Vitest (unit)

### Key Directories
- `src/lib/`: Core utilities and reusable components
  - `DeezerApiModel.ts`: TypeScript interfaces for Deezer API responses
  - `DeezerCall.ts`: Rate-limited API calling logic (50 req/5sec)
  - `DeezerCache.ts`: Client-side memory caching layer
  - `CookieManager.ts`: Authentication token management
- `src/routes/`: SvelteKit file-based routing
  - `auth/`: OAuth flow (signin, callback, signout)
  - `playlists/`: Main app functionality with editing interface
- `tests/`: Playwright integration tests

### API Integration Patterns
- **Authentication**: Client-side Deezer OAuth with cookie-based token storage
- **Rate Limiting**: Bottleneck.js prevents API rate limit violations
- **JSONP**: Uses fetch-jsonp for cross-origin Deezer API calls
- **Caching**: Memory-based response caching to reduce API calls
- **Error Handling**: SvelteKit error boundaries with structured error responses

### State Management
- **Reactive State**: Svelte 5 runes ($state, $derived, $effect)
- **Shared State**: Svelte stores for toolbar, loading states, toasts
- **Context**: Dependency injection for shared services like API client

## Development Setup Notes

- **Reverse Proxy**: Development requires reverse proxy on port 80 for Deezer OAuth testing
- **Environment Variables**: Copy `.env.example` to `.env` for Deezer API configuration
- **Node Version**: Requires Node.js 22 (specified in package.json engines)
- **Debug Mode**: Development mode enables debug logging with `DEBUG=deezer-playlist*`

## Code Patterns

### Component Architecture
- Reusable UI components in `src/lib/html/`
- Page components handle data loading and business logic
- Layout system uses Skeleton Labs responsive grid
- Application shell pattern with dynamic content injection

### API Call Pattern
```typescript
// Rate-limited, cached API calls through DeezerCall service
const result = await deezerCall.callDeezerApi<PlaylistResponse>('playlist/123');
```

### Error Handling
- Use SvelteKit's `error()` function for route-level errors
- API errors are wrapped in structured response objects
- Client-side error boundaries handle unexpected exceptions

## Deployment

- **Target**: Static site deployment via GitHub Actions
- **Build Output**: `build/` directory contains static files
- **Base Path**: Configured for GitHub Pages deployment at custom domain
- **Performance**: Bundle optimization through PurgeCSS and tree-shaking