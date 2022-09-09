import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Join from "./components/join/Join";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/cart" />
        <Route path="/products" />
        <Route path="/products/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
