import logo from "./logo.svg";
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Join from "./pages/join/Join";
import SignIn from "./pages/signin/SignIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
