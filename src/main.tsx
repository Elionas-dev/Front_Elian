// main.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { MainRoutes } from "./routes/routes"; // Importe o arquivo de configuração de rotas

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <MainRoutes />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
