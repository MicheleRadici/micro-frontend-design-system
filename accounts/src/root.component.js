import React from "react";
import { Button, ThemeProvider, VERSION } from "@mr/design-system";

export default function Root() {
  return (
    <ThemeProvider theme={{ primary: "#1f6feb" }}>
      <section style={{ padding: 32, fontFamily: "system-ui, sans-serif", color: "#e6edf3" }}>
        <h2 style={{ margin: "0 0 8px", fontSize: 28 }}>Accounts</h2>
        <p style={{ maxWidth: 560, color: "#8b949e", lineHeight: 1.55 }}>
          This parcel was built and deployed on its own. The button below comes
          from the <strong style={{ color: "#e6edf3" }}>runtime-loaded</strong> design
          system, not an npm copy bundled into this app.
        </p>
        <div style={{ margin: "20px 0 28px" }}>
          <Button onClick={() => alert("Accounts: primary action")}>
            Accounts action
          </Button>
        </div>
        <div style={{
          display: "inline-block", padding: "16px 24px", borderRadius: 12,
          background: "#161b22", border: "2px solid #58a6ff",
        }}>
          <div style={{
            color: "#8b949e", fontSize: 12, fontFamily: "monospace",
            marginBottom: 6, textTransform: "uppercase", letterSpacing: 1,
          }}>
            runtime design system
          </div>
          <div style={{ color: "#58a6ff", fontSize: 26, fontWeight: 700, fontFamily: "monospace" }}>
            {VERSION}
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
