import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { EventProps } from "./components/EventProps.jsx";
// import { EventHandling } from "./components/EventHandling.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <EventHandling /> */}
    <EventProps />
  </StrictMode>
);
