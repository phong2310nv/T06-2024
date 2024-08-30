import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ScreenWidthProvider from "./hook/screenWith/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScreenWidthProvider>
      <App />
    </ScreenWidthProvider>
  </StrictMode>
);
