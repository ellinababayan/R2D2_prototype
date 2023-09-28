import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Features from "./components/features/Features";
import Perks from "./components/perks/Perks";
import Book from "./components/book/Book";
import Join from "./pages/join/Join";
import SignIn from "./pages/signin/SignIn";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
      <Perks />
      <Book />
      <Footer />
      <Join />
      <SignIn />
    </div>
  );
}

export default App;
