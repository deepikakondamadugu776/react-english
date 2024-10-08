import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/footer";
import { Outlet } from "react-router-dom";
import React from "react";
import "./App.css";
import { Router } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
