import { Routes, Route } from "react-router-dom";

import './App.css';

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";
import Catalog from "./components/Catalog/Catalog";
import Create from "./components/Create/Create";
import Contacts from "./components/Contacts/Contacts";
import Profile from "./components/Profile/Profile";
import Error from "./components/404/Error";

import { AuthContext } from "./contexts/AuthContext";

function App() {

  return (
    <AuthContext.Provider>
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/create" element={<Create />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
    </div>
    </ AuthContext.Provider>
  );
}

export default App;
