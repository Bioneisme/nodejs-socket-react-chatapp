import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {userSelector} from "./store/slices/userSlice";


export const PrivateRoute = ({children}) => {
    const {isAuth} = useSelector(userSelector)

    return isAuth ? children : <Navigate to="/login"/>;
};