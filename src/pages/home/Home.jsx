import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Features from "../../components/features/Features";
import Perks from "../../components/perks/Perks";
import Book from "../../components/book/Book";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <Perks />
      <Book />
      <Footer />
      
    </div>
  );
};

export default Home;
