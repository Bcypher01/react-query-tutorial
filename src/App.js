import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Summary from "./components/Summary";
import Users from "./components/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/summary/:id" element={<Summary />} />
      </Routes>
    </Router>
  );
}

export default App;
