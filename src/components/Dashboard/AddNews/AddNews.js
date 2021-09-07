
import React, { useState } from 'react';
import axios from 'axios';
// import Sidebar from '../Sidebar/Sidebar';

const NewsBlogs = () => {
    const [service, setService] = useState({
        title: '',
        description: '',
        image: ''
    });
    console.log(service);

    const handleBlur = (e) => {
        const newService = { ...service };
        newService[e.target.name] = e.target.value;
        setService(newService);
    }

    const handleFileChange = (e) => {
        console.log(e.target.files[0])
        const imgData = new FormData();
        imgData.set('key', 'a30317a5034f4348d630ce515c070a4a');
        imgData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imgData)
            .then(function (response) {
                const newService = { ...service };
                newService[e.target.name] = response.data.data.display_url;
                setService(newService);
                console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const handleService = (e) => {
        const newService = { ...service };
        fetch('http://localhost:4100/addBlog', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Blog Add Successfully..");
                }

            })
        e.preventDefault();
    }

    return (
        <section>
            <div >
                {/* <Sidebar></Sidebar> */}
            </div>
            <div>
                <h5 className="text-brand py-1">Add a News</h5>
                <form style={{ backgroundColor: 'white', height: '80%', width: '80%', borderRadius: '10px' }}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">News Heading</label>
                        <input onBlur={handleBlur} type="text" className="form-control mt-1 mb-3" name="name" placeholder="Enter Blog Heading" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <input onBlur={handleBlur} type="text" className="mt-1 mb-3 form-control" name="description" placeholder="Add description" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" name="image" className="mt-1 mb-4 form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" onClick={handleService} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddBlogs;