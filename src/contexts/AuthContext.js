import { createContext, useState } from "react";

export const AuthContext = createContext();

const initialState = {
  _id: "",
  token: "",
  name: "",
  email: ""
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

  const loginData = (_id, token, name, email) => {
    setUser({
      _id,
      token,
      name,
      email
    });
  };
  return (
    <AuthContext.Provider value={{ user, loginData }}>
      {children}
    </AuthContext.Provider>
  );
};

// export const useAuth = () => {
//   const authState = useContext(UserContext);
//   return authState;
// };
