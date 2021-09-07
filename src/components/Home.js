import React, { useState } from 'react';
import Header from './Header';
import MyBlog from './MyNews/MyNews';



const Home = () => {

    return (
        <div>
            <Header />
            <MyBlog></MyBlog>
        </div>
    );

};

export default Home;