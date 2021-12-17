import React, { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import AuthContext from "./contexts/AuthContext";

import "./App.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";
import Catalog from "./components/Catalog/Catalog";
import Create from "./components/Create/Create";
import Contacts from "./components/Contacts/Contacts";
import Logout from "./components/Auth/Logout/Logout";
import Profile from "./components/Profile/Profile";
import Details from "./components/Catalog/Details/Details";

function App() {
  const [cookies, setCookie] = useCookies(["name"]);
  useEffect(() => {
    if (user !== cookies.name) {
      setUser(cookies.name);
    }
  }, []);

  const [user, setUser] = useState()

  return (

    <AuthContext.Provider value={user}>
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/create" element={<Create />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/details/:movieId" element={<Details />} />
        </Routes>
        <Footer />
    </div>
    </ AuthContext.Provider >
  );
}

export default App;
