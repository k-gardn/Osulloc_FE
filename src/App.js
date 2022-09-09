import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" />
        <Route path="/join" />
        <Route path="/cart" />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
