import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import { Nav } from "./components/common";
import { Layout } from "./routes/Layout";
import { Global, css } from "@emotion/react";
import { GlobalStyle } from "./GlobalStyle";
import { Login, Register, Design, TradeMark, MyPage, About, List } from "./pages";

function App() {
  return (
    <div className="App">
      <Global styles={GlobalStyle} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/design" element={<Design />} />
            <Route path="/trademark" element={<TradeMark />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/list" element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
