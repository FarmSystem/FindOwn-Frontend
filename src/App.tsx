import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
// import LoginPage from "./pages/LoginPage";
import { Login } from "./pages/Login/Login";
import Nav from "./components/common/Nav";
import { Register } from "./pages/Register";
import { Design } from "./pages/Design";
import { TradeMark } from "./pages/TradeMark";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/design" element={<Design />} />
          <Route path="/trademark" element={<TradeMark />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
