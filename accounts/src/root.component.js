import React from "react";
import { Button, ThemeProvider, VERSION } from "@mr/design-system";

export default function Root() {
  return (
    <ThemeProvider theme={{ primary: "#0a66c2" }}>
      <section style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
        <h2 style={{ margin: "0 0 8px" }}>Accounts</h2>
        <p style={{ maxWidth: 560, color: "#333" }}>
          This parcel was built and deployed on its own. The button below comes
          from the <strong>runtime-loaded</strong> design system — not an npm
          copy bundled into this app.
        </p>
        <Button onClick={() => alert("Accounts: primary action")}>
          Accounts action
        </Button>
        <p style={{ marginTop: 16, fontSize: 13, color: "#666" }}>
          Design system reports: <code>{VERSION}</code>
        </p>
      </section>
    </ThemeProvider>
  );
}
