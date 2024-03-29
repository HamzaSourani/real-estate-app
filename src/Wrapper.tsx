import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CssBaseline } from "@mui/material";
import Routes from "@/routes";
import MuiTheme from "./libs/MUI/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wrapper = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <MuiTheme>
        <Routes />
        <ToastContainer />
      </MuiTheme>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default Wrapper;
