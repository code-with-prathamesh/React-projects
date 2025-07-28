import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { EventPropogation } from "./components/EventPropogation";
// import App from "./App.jsx";
// import { EventProps } from "./components/EventProps.jsx";
// import { EventHandling } from "./components/EventHandling.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <EventHandling /> */}
    {/* <EventProps /> */}
    <EventPropogation />
  </StrictMode>
);
