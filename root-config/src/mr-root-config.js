import { registerApplication, start } from "single-spa";

// The shell knows nothing about the apps' internals — only WHERE to load them
// (the import-map) and WHEN they're active (activeWhen). Each app is fetched
// at runtime from its own dev server / deployment.
registerApplication({
  name: "@mr/accounts",
  app: () => System.import("@mr/accounts"),
  activeWhen: ["/accounts"],
});

registerApplication({
  name: "@mr/payments",
  app: () => System.import("@mr/payments"),
  activeWhen: ["/payments"],
});

start();
