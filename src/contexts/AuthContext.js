import { createContext, useState } from "react";

export const AuthContext = createContext();

const initialState = {
    _id: '',
    name: '',
    email: '',
    jwt_token: '',
}

export const AuthProvider = ({
    children
}) => {

    const [user, setUser] = useState(initialState)

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )

}