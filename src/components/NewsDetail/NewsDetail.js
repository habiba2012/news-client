import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from "../Header/Header";

const NewsDetail = () => {
    const { _id } = useParams();
    const [book, setBook] = useState({})

    console.log(_id, book);

    useEffect(() => {
        fetch(`https://cryptic-river-17039.herokuapp.com/blog/${_id}`)
            .then(res => res.json())
            .then(data => setBook(data[0]))
    }, [_id])

    return (
        <section>
            <Header></Header>
            <div className="d-flex justify-content-center pt-5 mt-5">
                <div className="w-75">
                    <h2 >{book.name}</h2>
                    <p className="mt-3 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veniam rem tempore voluptate dolor optio delectus sed minus, animi suscipit.</p>
                    <img src={book.image} className="mt-5 mb-5" style={{ width: '100%' }} alt="" />

                    <p>{book.description}</p>
                </div>
            </div>
        </section>
    );
};

export default NewsDetail;