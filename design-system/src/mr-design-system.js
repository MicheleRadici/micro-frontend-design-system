// Public surface of the design system.
// Consumers (accounts, payments) import from "@mr/design-system" — which is
// externalized in their builds and resolved at RUNTIME via the import-map.
// That means a change here is picked up by both apps with no version bump,
// no reinstall, and no rebuild of the consumers.
export { Button } from "./components/Button";
export { ThemeProvider, useTheme } from "./ThemeProvider";
export { VERSION } from "./version";
