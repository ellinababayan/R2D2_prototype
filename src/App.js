import logo from "./logo.svg";
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Join from "./pages/join/Join";
import Terms from "./pages/terms/Terms";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/termsconditions" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
