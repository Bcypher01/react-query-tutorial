import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./components/Characters";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Users from "./components/Users";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <div className="container">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Characters />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </BrowserRouter>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
