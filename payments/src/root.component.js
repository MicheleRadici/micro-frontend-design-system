import React from "react";
import { Button, ThemeProvider, VERSION } from "@mr/design-system";

export default function Root() {
  // A different theme proves each app controls its own look while sharing the
  // SAME component code from the runtime design system.
  return (
    <ThemeProvider theme={{ primary: "#238636" }}>
      <section style={{ padding: 32, fontFamily: "system-ui, sans-serif", color: "#e6edf3" }}>
        <h2 style={{ margin: "0 0 8px", fontSize: 28 }}>Payments</h2>
        <p style={{ maxWidth: 560, color: "#8b949e", lineHeight: 1.55 }}>
          Same <code>&lt;Button&gt;</code> as the Accounts app, pulled from the
          same runtime design system, but themed green here. One source, no
          duplicated dependency.
        </p>
        <div style={{ margin: "20px 0 28px" }}>
          <Button onClick={() => alert("Payments: primary action")}>
            Payments action
          </Button>
        </div>
        <div style={{
          display: "inline-block", padding: "16px 24px", borderRadius: 12,
          background: "#161b22", border: "2px solid #3fb950",
        }}>
          <div style={{
            color: "#8b949e", fontSize: 12, fontFamily: "monospace",
            marginBottom: 6, textTransform: "uppercase", letterSpacing: 1,
          }}>
            runtime design system
          </div>
          <div style={{ color: "#3fb950", fontSize: 26, fontWeight: 700, fontFamily: "monospace" }}>
            {VERSION}
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
