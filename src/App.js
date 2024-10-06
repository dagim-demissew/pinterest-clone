import React from "react";
import HomePage from "./pages/Home-Page/HomePage";
import Navbar from "./components/NavBar/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
