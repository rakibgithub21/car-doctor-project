import { useContext } from "react";
import { AuthContext } from "./AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    // console.log(location);
    if (loading) {
        return<p>Loading ..............</p>
    }
    if (user?.email) {
        return children
    }
    else {
        return <Navigate to={'/sign-in'} state={location?.pathname} replace></Navigate>
    }
   
};

export default PrivateRoute;