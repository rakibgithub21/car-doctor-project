import { useContext } from "react";
import { AuthContext } from "./AuthProviders";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return<p>Loading ..............</p>
    }
    if (user?.email) {
        return children
    }
    else {
        return<Navigate to={'/login'} replace></Navigate>
    }
   
};

export default PrivateRoute;