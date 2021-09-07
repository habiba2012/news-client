import React from 'react';
import './Login.css'

import { auth, provider } from '../auth/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveUser, setUserLogOutState, selectUserEmail, selectUserName } from '../../features/userSlice'

const Login = () => {
    const dispatch = useDispatch();

    const userName = useSelector(selectUserName)
    const userEmail = useSelector(selectUserEmail)

    const handleSignIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch(setActiveUser({
                userName: result.user.displayName,
                userEmail: result.user.email
            }))
        })
    }
    return (
        <div className="container-fluid">
            <div className="row no-gutter">
                <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" ></div>
                <div className="col-md-8 col-lg-6">
                    <div className="login d-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-lg-8 mx-auto">
                                    <div className="card card-signin my-5">
                                        <div className="card-body">
                                            <h5 className="card-title">Welcome back!</h5>
                                            <button className="btn btn-lg btn-google btn-block text-uppercase" onClick={handleSignIn} type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Login;