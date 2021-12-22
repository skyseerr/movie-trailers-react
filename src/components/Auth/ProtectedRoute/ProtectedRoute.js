import {Navigate, useLocation} from "react-router-dom";

const ProtectedRoute = ({user, children}) => {
    let location = useLocation();

    switch (location.pathname) {
        case '/login':
        case '/register':
            return user?.name !== null 
                ? <Navigate to="/" state={{ from: location }} />
                : (children) 

        default:
            return user?.name !== null 
                ? (children) 
                : <Navigate to="/" state={{ from: location }} />
    }
    
};

export default ProtectedRoute;