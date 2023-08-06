import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import { Login } from "./pages/LoginPage";
import Nav from "./components/common/Nav";
import React from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
