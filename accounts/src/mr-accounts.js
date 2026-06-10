import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

// single-spa lifecycle: this app has its own bootstrap / mount / unmount and is
// built + deployed independently of the shell and the other parcels.
const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Root,
  // Per-parcel error boundary: a crash here is contained — it does NOT take
  // down the shell or the payments parcel.
  errorBoundary(err) {
    return (
      <div style={{ padding: 20, color: "#b00020" }}>
        Accounts parcel failed to render: {err.message}
      </div>
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
