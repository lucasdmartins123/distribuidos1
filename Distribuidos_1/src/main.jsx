import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ReadWriteProvider } from "./components/Context/readWriteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReadWriteProvider>
        <App />
      </ReadWriteProvider>
    </BrowserRouter>
  </React.StrictMode>
);
