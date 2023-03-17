import { Box } from "@mui/material";
import { createContext } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Theme } from "./components/layout/Theme";
import { Routes } from "./routes/Routes";

const queryClient = new QueryClient();

export const FirstContext = createContext("default value");
function App() {
  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <Box sx={{ display: "flex" }}>
          <Routes />
        </Box>
        <ToastContainer />
      </QueryClientProvider>
    </Theme>
  );
}

export default App;
