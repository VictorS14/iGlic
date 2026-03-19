import { Content } from "../layout/Content.jsx"
import {QueryClientProvider, QueryClient} from "@tanstack/react-query" 


const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Content/>
    </QueryClientProvider>
  )
}

export default App
