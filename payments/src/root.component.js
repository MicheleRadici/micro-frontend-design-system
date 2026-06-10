import React from "react";
import { Button, ThemeProvider, VERSION } from "@mr/design-system";

export default function Root() {
  // A different theme proves each app controls its own look while sharing the
  // SAME component code from the runtime design system.
  return (
    <ThemeProvider theme={{ primary: "#0a7d57" }}>
      <section style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
        <h2 style={{ margin: "0 0 8px" }}>Payments</h2>
        <p style={{ maxWidth: 560, color: "#333" }}>
          Same <code>&lt;Button&gt;</code> as the Accounts app — pulled from the
          same runtime design system — but themed green here. One source, no
          duplicated dependency.
        </p>
        <Button onClick={() => alert("Payments: primary action")}>
          Payments action
        </Button>
        <p style={{ marginTop: 16, fontSize: 13, color: "#666" }}>
          Design system reports: <code>{VERSION}</code>
        </p>
      </section>
    </ThemeProvider>
  );
}
