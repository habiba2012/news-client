import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInput, setBlogData } from "../../features/userSlice";

import { auth, provider } from '../auth/firebase'
import { setActiveUser, setUserLogOutState, selectUserEmail, selectUserName } from '../../features/userSlice'

import './MyBlog.css';
import NewsPage from "../NewsPage/NewsPage";

const MyNews = () => {
    const searchInput = useSelector(selectUserInput);
    // const blog_url = `https://newsapi.org/v2/everything?q=${searchInput}&from=2021-04-28&sortBy=publishedAt&apiKey=74ed815bf2ca40069518dccdc980caa4`;

    const dispatch = useDispatch();
    const [blogs, setBlogs] = useState([]);
    console.log(blogs)
    //const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('https://cryptic-river-17039.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <div className="row mt-5">
                {
                    blogs.map(blog => <NewsPage key={blog._id} blog={blog}></NewsPage>)
                }
            </div>
        </div>
    );
};

export default MyNews;
