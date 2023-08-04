import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/main';
import Nav from './components/common/Nav';
import footer from './components/common/Footer';
import React from 'react';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
          <footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
