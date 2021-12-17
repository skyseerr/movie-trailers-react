import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useCookies } from 'react-cookie';



const Logout = () => {
    
    // const {user, setUser} = useContext(UserContext);

    const navigate = useNavigate()

    const [cookies, setCookie, removeCookie] = useCookies(['name', 'jwtToken']);

    removeCookie('name',{path:'/'});
    removeCookie('jwtToken',{path:'/'});
    // userInfo({
    //     _id: null,
    //     token: null,
    //     name: null,
    //     email: null
    // })
    navigate('/')
    return null


}

export default Logout;