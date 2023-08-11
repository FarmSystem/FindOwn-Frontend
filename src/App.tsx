import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import LoginPage from "./pages/LoginPage";
import Nav from "./components/common/Nav";
import { Register } from "./pages/Register";
import { Design } from "./pages/Design";
import React from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/design" element={<Design />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
