import React, { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import { useCookies } from 'react-cookie';




import "./App.css";

import UserContext from "./contexts/UserContext";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";
import Catalog from "./components/Catalog/Catalog";
import Create from "./components/Create/Create";
import Contacts from "./components/Contacts/Contacts";

function App() {

  const [user, setUser] = useState();
  const [cookies, setCookie] = useCookies(['name']);

  useEffect(() => {
    setUser(cookies.name)
  },[user]);

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/create" element={<Create />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
