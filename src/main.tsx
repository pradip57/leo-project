import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/global.css";
import RoutingConfig from "./config/routing.config";
import "flowbite";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RoutingConfig />
  </StrictMode>
);
