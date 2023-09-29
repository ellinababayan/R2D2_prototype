import logo from "./logo.svg";
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Join from "./pages/join/Join";
import Terms from "./pages/terms/Terms";
import Policy from "./pages/policy/Policy";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/termsconditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Policy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
