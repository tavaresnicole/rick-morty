import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FavoritesProvider } from "./contexts/FavoritesContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
    </QueryClientProvider>
  );
}

export default App;
