import React, { createContext, useState } from "react";

const initialState = {
    _id: '',
    token: '',
    name: '',
    email: '',
}

const UserContext = createContext();

export const UserProvider = ({
    children
}) => {

    const [user, setUser] = useState(initialState)

    return(
        <UserContext.Provider values={{user}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;