import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

import { useCookies } from 'react-cookie';



const Logout = () => {
    
    const {user, setUser} = useContext(AuthContext);

    const navigate = useNavigate()

    const [cookies, setCookie, removeCookie] = useCookies(['name', 'jwtToken']);

    removeCookie('name',{path:'/'});
    removeCookie('jwtToken',{path:'/'});
    localStorage.removeItem('user');
    localStorage.removeItem('_id');
    setUser(null)
    navigate('/')
    return null


}

export default Logout;