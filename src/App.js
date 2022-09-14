import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductList from "./pages/ProductListPage";
import Login from "./components/login/Login";
import Join from "./components/join/Join";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import CartLeeseulPage from "./pages/CartLeeseulPage";
import KakaoRedirect from "./components/login/KakaoRedirect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<DetailPage />} />
        <Route path="/cartleeseul" element={<CartLeeseulPage />} />
        <Route path="/auth" element={<KakaoRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
