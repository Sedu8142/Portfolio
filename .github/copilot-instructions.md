# .github/copilot-instructions.md

Purpose
- Provide concise, project-specific guidance so AI coding agents are immediately productive in this Vue + Vite + Pinia codebase.

Quick start (how humans run the project)
- Install dependencies: `npm install`
- Start dev server: `npm run dev` (uses Vite)
- Build for production: `npm run build`
- Preview production build: `npm run preview`
- Node engines are declared in [package.json](package.json#L1).

Big picture architecture
- Frontend single-page app built with Vue 3 + Vite. Entry point: [src/main.js](src/main.js#L1) which mounts `App.vue`.
- State is managed with Pinia. Stores live in `src/store/` (example: [src/store/counter.js](src/store/counter.js#L1)).
- Static assets are placed in `public/` and served at root by Vite.

Common code patterns and conventions
- Components use Single File Components with `<script setup>` style (see [src/App.vue](src/App.vue#L1)).
- Pinia stores are defined with `defineStore({ id, state, getters, actions })`. Example usage:

```javascript
import { useCounterStore } from './store/counter'
const counter = useCounterStore()
counter.increment()
```

- Keep store modules inside `src/store/` and export named `useXStore` hooks.
- Prefer small, focused stores (one store per domain) rather than a single large store.

Developer workflows and debugging notes
- Dev server: `npm run dev` — hot module replacement via Vite.
- Use the included `vite-plugin-vue-devtools` (in devDependencies) for runtime component inspection during `dev`.
- There are no test scripts in `package.json`; add tests if required and update `package.json` scripts accordingly.

Integration points & externals
- Dependencies are declared in [package.json](package.json#L1). Key libs: `vue`, `pinia`, `vite`, `@vitejs/plugin-vue`.
- Vite plugins are configured in `vite.config.js` — touch this file for build/tooling changes.

Files to reference for common tasks
- App entry: [src/main.js](src/main.js#L1)
- Root component: [src/App.vue](src/App.vue#L1)
- Example store: [src/store/counter.js](src/store/counter.js#L1)
- Build/config: [vite.config.js](vite.config.js#L1) and [package.json](package.json#L1)

What an AI should do (concrete examples)
- When adding a new store: create `src/store/yourStore.js` using `defineStore`, export `useYourStore`, and register usage in components with `const s = useYourStore()`.
- When adding a component: use `<script setup>`, place file under `src/`, and prefer scoped styles.
- When changing build behavior: update `vite.config.js` and validate with `npm run dev` and `npm run build`.

Limitations / what's missing
- No test harness presently — do not assume automated tests exist.
- No router or API layer detected in source; network integrations must be added explicitly.

If anything here is unclear or you want more detail (example: naming conventions, additional files), ask and I'll iterate.
