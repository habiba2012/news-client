import React from "react";
import { Redirect, Route } from "react-router-dom";
import { auth, provider } from './auth/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveUser, setUserLogOutState, selectUserEmail, selectUserName } from '../features/userSlice'


const PrivateRoute = ({ children, ...rest }) => {
    const dispatch = useDispatch();

    const userName = useSelector(selectUserName)
    const userEmail = useSelector(selectUserEmail)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                userName || userEmail || sessionStorage.getItem('token') ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
