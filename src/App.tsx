import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Nav from "./components/common/Nav";
import { Global, css } from '@emotion/react';
import { GlobalStyle } from "./GlobalStyle";
import { 
  Login,
  Register,
  Design,
  TradeMark,
  MyPage
} from './pages';

function App() {
  return (
    <div className="App">
      <Global styles={GlobalStyle} />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/design" element={<Design />} />
          <Route path="/trademark" element={<TradeMark />} />
          <Route path="/mypage" element={<MyPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
