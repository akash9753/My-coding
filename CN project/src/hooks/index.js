import { useState, useEffect } from "react";
import jwt from 'jwt-decode'
// import { AuthContext } from "../providers/AuthProvider";
import { login as userLogin, register } from '../api'
import { setItemLocalStorage, LOCALSTORAGE_TOKEN_KEY, removeItemFromLocalStorage, getItemLocalStorage } from "../utils";

// export const useAuth = () => {
//     return useContext(AuthContext);
// }

export const useProvideAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userToken = getItemLocalStorage(LOCALSTORAGE_TOKEN_KEY)
        if (userToken) {
            const user = jwt(userToken)
            setUser(user)
        }
        setLoading(false)
    }, []);

    const login = async (email, password) => {
        const response = await userLogin(email, password);
        if (response.success) {
            setUser(response.data.user)
            setItemLocalStorage(LOCALSTORAGE_TOKEN_KEY, response.data.token ? response.data.token : null)
            return {
                success: true,
            }
        } else {
            return {
                success: false,
                message: response.message
            }
        }
    }

    const signup = async (name, email, password, confirmPassword) => {
        const response = await register(name, email, password, confirmPassword)
        if(response.success){
            console.log("hooks index .js",response);
            console.log("hooks index .js",response.message);
             return {
                 success: true,
                 message:response.message,
                 name:"akash",     
             }
        }else{
            return {
                success: false,
                message:response.message,
            }
        }
    }

    const logout = () => {
        setUser(null);
        removeItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY)
    };
    return {
        user,
        login,
        logout,
        loading,
        signup
    }
};