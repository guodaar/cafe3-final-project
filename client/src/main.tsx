import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { border, roundedBorder } from "./consts/style";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Modal from "react-modal";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();
Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
      <Toaster
        position="bottom-left"
        toastOptions={{
          className: "",
          style: {
            border: border,
            padding: "8px",
            borderRadius: roundedBorder,
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
);
