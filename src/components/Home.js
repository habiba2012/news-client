import React, { useState } from 'react';
import Header from "./Header/Header";
import MyBlog from './MyNews/MyNews';
import Footer from './Footer/Footer'
import Banner from './Banner/Banner'


const Home = () => {

    return (
        <div>
            <Header />
            <Banner />
            <MyBlog></MyBlog>
            <Footer />
        </div>
    );

};

export default Home;