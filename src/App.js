import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" />
                <Route path="/login" />
                <Route path="/join" />
                <Route path="/cart" />
                <Route path="/products" />
                <Route path="/products/:id" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
