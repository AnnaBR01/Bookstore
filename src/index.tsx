import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { GlobalStyles } from "./ui/GlobalStyles";
import "./firebase";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyles />
      <App />
    </PersistGate>
  </BrowserRouter>,
);
