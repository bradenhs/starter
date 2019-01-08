import React from "react";
import { forceRenderStyles } from "typestyle";
import { normalize } from "csstips";
import { attach } from "./attach";
import { App } from "./App";

normalize();
forceRenderStyles();

attach(<App />);
