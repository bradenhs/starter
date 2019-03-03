if (module.hot) {
  module.hot.dispose(() => {
    location.reload();
    throw "Reloading...";
  });
}

import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { FocusStyleManager } from "@blueprintjs/core";

FocusStyleManager.onlyShowFocusOnTabs();

ReactDOM.render(<App />, document.getElementById("root"));
