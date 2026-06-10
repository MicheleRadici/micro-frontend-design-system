import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Root,
  errorBoundary(err) {
    return (
      <div style={{ padding: 20, color: "#b00020" }}>
        Payments parcel failed to render: {err.message}
      </div>
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
