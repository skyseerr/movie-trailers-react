import { Routes, Route } from "react-router-dom";

import './App.css';

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";

function App() {
  return (
    <div className="App">

    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    <Footer />

    </div>
  );
}

export default App;
