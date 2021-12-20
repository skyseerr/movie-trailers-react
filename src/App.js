import React, { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import { AuthContext } from "./contexts/AuthContext";
import ProtectedRoute from "./components/Auth/ProtectedRoute/ProtectedRoute";

import "./App.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";
import Catalog from "./components/Catalog/Catalog";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";
import Contacts from "./components/Contacts/Contacts";
import Logout from "./components/Auth/Logout/Logout";
import Profile from "./components/Profile/Profile";
import Details from "./components/Catalog/Details/Details";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Search from "./components/Search/Search";
import Category from "./components/Catalog/Category/Category";
import MyMoviesAll from "./components/Profile/MyMoviesAll/MyMoviesAll";


function App() {
  
  const [cookies, setCookie] = useCookies(["name"]);
  const [user, setUser] = useState('');
  
  useEffect(() => {
    setUser({'name': localStorage.getItem('user'), '_id': localStorage.getItem('_id')});
  }, [cookies]);

  return (

    <AuthContext.Provider value={{user, setUser}}>
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<ProtectedRoute user={user}><Login /></ProtectedRoute>} />
          <Route path="/register" element={<ProtectedRoute user={user}><Register /></ProtectedRoute>} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:param" element={<Search />} />
          <Route path="/catalog/category/:categoryName" element={<Category />} />
          <Route path="/catalog/my-movies-all/:userId" element={<MyMoviesAll />} />
          <Route path="/create" element={<ProtectedRoute user={user}><Create /></ProtectedRoute>} />
          <Route path="/edit/:movieId" element={<ProtectedRoute user={user}><Edit /></ProtectedRoute>} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/profile" element={<ProtectedRoute user={user}><Profile /></ProtectedRoute>} />
          <Route path="/details/:movieId" element={<Details />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
    </div>
    </ AuthContext.Provider >
  );
}

export default App;
