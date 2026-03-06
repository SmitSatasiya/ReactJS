import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "../src/Redux/store.js";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  // <QueryClientProvider client={queryClient}>
  //   <App />
  // </QueryClientProvider>

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
