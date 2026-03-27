import { Content } from "../layout/Content.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Content />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
