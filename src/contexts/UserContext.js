import React, { createContext } from "react";

const initialState = {
    token: '',
    _id: '',
    name: '',
    email: '',
}

const UserContext = createContext(initialState);

export default UserContext;