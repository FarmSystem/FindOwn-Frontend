import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Nav from "./components/common/Nav";
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
