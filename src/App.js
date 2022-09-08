import React from "react";
import Home from "./page/Home";
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Header from './components/Header'



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
