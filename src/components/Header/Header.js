import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { auth, provider } from '../auth/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveUser, setUserLogOutState, selectUserEmail, selectUserName } from '../../features/userSlice'

const Header = () => {
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);

    const dispatch = useDispatch();

    const userName = useSelector(selectUserName)
    const userEmail = useSelector(selectUserEmail)

    const [inputValue, setInputValue] = useState("");


    const handleSignIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch(setActiveUser({
                userName: result.user.displayName,
                userEmail: result.user.email
            }))
        })
    }
    const handleSignOut = () => {
        auth.signOut().then(() => {
            dispatch(setUserLogOutState())
        }).catch((err) => alert(err.message))
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);
    return (

        <nav style={{ height: "80px", backgroundColor: "#70c3be" }} className={(isSticky || isCollapsed) ? "slide in show shadow-sm navbar navbar-expand-sm  navbar-light py-3  fixed-top" : "slide out show navbar navbar-expand-sm navbar-dark  py-4 fixed-top"}>
            <div className="container-fluid justify-content-between">


                <a className="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
                    TechNews 💬
                </a>
                <button onClick={
                    () => setCollapsed(!isCollapsed ? 'show' : null)} className="navbar-toggler d-lg-none text-dark" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <form className="input-group w-auto ml-auto  my-auto d-none d-sm-flex pt-2" style={{ marginLeft: "50px" }}>
                    <input
                        autocomplete="off"
                        type="search"
                        className="form-control rounded"
                        placeholder="Search for a blog"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        style={{ minWidth: "125px" }}
                    />
                    <span className="input-group-text border-0 d-none d-lg-flex"
                    ><i className="fas fa-search"></i
                    ></span>
                </form>

                <div className={`collapse navbar-collapse ${isCollapsed}`} id="collapsibleNavId">
                    <ul className="navbar-nav align-items-sm-center mt-2 mt-lg-0 ml-auto" style={{ marginLeft: "300px" }}>
                        <li className="nav-item active">
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="dashboard">Dashboard</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/blog">News</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item me-3 me-lg-1">
                            <Link className="nav-link d-sm-flex align-items-sm-center" href="#">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/1.jpg"
                                    className="rounded-circle"
                                    height="22"
                                    alt=""
                                    loading="lazy"
                                />
                                {
                                    userName ? (
                                        <button className="btn btn  shadow-none" style={{ backgroundColor: "#70c3be" }} onClick={handleSignOut}>Sign out</button>
                                    ) :
                                        (
                                            <button className="btn btn  shadow-none" style={{ height: "80px", backgroundColor: "#70c3be" }} onClick={handleSignIn}>Sign in</button>

                                        )
                                }


                            </Link>
                        </li>

                    </ul>
                </div>
            </div>

        </nav>

    );
};

export default Header;