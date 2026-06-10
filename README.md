# Micro-frontend + runtime-loaded design system

Two **independently-built** React apps sharing **one design system loaded at runtime** — so a change to the design system reaches every app with **no version bump, no reinstall, and no rebuild of the consumers**.

Built with [single-spa](https://single-spa.js.org/) + SystemJS import-maps. This is the pattern I use for banking front-ends where multiple teams ship on their own cadence and a shared component library must not become a release bottleneck.

> 👤 Michele Radici — Senior Front-End Developer · [LinkedIn](https://www.linkedin.com/in/michele-radici)

---

## The problem

The usual way to share UI is to publish a component library as an npm package. It works with two developers. With several teams and frequent deploys it becomes a queue: every design-system change is a version bump, and every consuming app must reinstall and redeploy to pick it up. In an audited/compliance environment, that queue is expensive.

## The idea

Treat the design system as a **runtime dependency**, not a build-time one:

- Each app externalizes `@mr/design-system` (and `react`/`react-dom`) instead of bundling it.
- An **import-map** in the shell decides, at load time, which URL those names resolve to.
- Both apps point at the **same** design-system URL → they always run the live version.
- `react` resolves to a single shared instance, so there's exactly **one React** on the page (the classic micro-frontend footgun, avoided).

## Proof it works ("no version lock")

1. `npm start`, open the app, note the line *“Design system reports: design-system @ runtime v1.0.0”* in **both** apps.
2. Edit `design-system/src/version.js`, bump the string.
3. Rebuild **only** the design system: `npm run build -w design-system` (or just refresh in dev).
4. Reload — both apps show the new value. Neither app was rebuilt.

---

## Architecture

```
root-config (shell, :9000)
│  • serves index.html with the SystemJS import-map
│  • registers apps by route, mounts/unmounts them — never unmounts the shell
│
├─ accounts  (:8500)   single-spa React app, route /accounts
├─ payments  (:8501)   single-spa React app, route /payments
└─ design-system (:8502)  Button + ThemeProvider, React externalized
```

- **Lifecycle isolation:** each app owns its own `bootstrap → mount → unmount` and a per-parcel **error boundary** — a crash in one app does not take down the shell or the other app.
- **Runtime sharing:** `externals` in each app's `webpack.config.js` mark `react`, `react-dom`, `single-spa`, and `@mr/*` as external; the import-map resolves them at runtime.

## Run it

```bash
npm install
npm start
```

Then open:
- http://localhost:9000/accounts
- http://localhost:9000/payments

`npm run build` produces production SystemJS bundles for all four packages.

## Tech

React 18 · single-spa 6 · single-spa-react 6 · SystemJS 6 · webpack 5 · npm workspaces

## Project layout

| Package | Port | Responsibility |
|---------|------|----------------|
| `root-config` | 9000 | Shell: import-map, routing, app registration |
| `accounts` | 8500 | Feature app (independent build/deploy) |
| `payments` | 8501 | Feature app (independent build/deploy) |
| `design-system` | 8502 | Shared UI, loaded at runtime |

---