import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BuildProviderTree } from "@utils/build-providers.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@features/store/index.ts";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import ShortcutProvider from "@utils/shortcutkey-provider.tsx";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 0,
    },
    mutations: {
      onError: (error) => {
        if (error instanceof Error) {
          if (error.name === "TimeoutError") {
            toast.error("API request timed out after 5 seconds");
          } else {
            //@ts-expect-error
            toast.error(error?.response?.data?.message);
          }
        } else {
          toast.error("An unexpected error occurred");
        }
      },
    },
  },
});
const Providers = BuildProviderTree([
  ({ children }) => (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ShortcutProvider>{children}</ShortcutProvider>
      </Provider>
    </QueryClientProvider>
  ),
  BrowserRouter,
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
      <ToastContainer
        position="bottom-right"
        autoClose={3500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </Providers>
  </React.StrictMode>
);
