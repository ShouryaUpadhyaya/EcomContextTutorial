import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ItemContextProvider } from "./context/ItemsContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ItemContextProvider>
      <App />
    </ItemContextProvider>
  </StrictMode>
);
