import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" />
                <Route path="/login" />
                <Route path="/join" />
                <Route path="/cart" />
                <Route path="/products" />
                <Route path="/products/:id" element={<DetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
