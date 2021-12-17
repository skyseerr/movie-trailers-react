import { createContext } from "react";

const AuthContext = createContext();

export default AuthContext;

// const initialState = {
//     _id: '',
//     token: '',
//     name: '',
//     email: '',
// }


// export const UserProvider = ({
//     children
// }) => {

//     const [user, setUser] = useState(initialState)
    
//     const userInfo = ( _id, token, name, email) => {
//         setUser({
//             _id,
//             token,
//             name,
//             email
//         })
//         console.log(user);
// }
//     return(
//         <UserContext.Provider value={{user, userInfo}}>
//             {children}
//         </UserContext.Provider>
//     );
// }

// export const useAuth = () => {
//    const authState = useContext(UserContext);
//    return authState;
// }