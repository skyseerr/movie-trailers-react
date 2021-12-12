import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useCookies } from 'react-cookie';
import UserContext from "../../../contexts/UserContext";


const Logout = () => {

    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate()

    const [cookies, setCookie, removeCookie] = useCookies(['name', 'jwtToken']);

    removeCookie('name',{path:'/'});
    removeCookie('jwtToken',{path:'/'});
    setUser('');
    navigate('/')
    return null


}

export default Logout;