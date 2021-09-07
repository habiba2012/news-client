import React from 'react';
import { Link } from 'react-router-dom';

const NewsPage = ({ blog }) => {
   return (

      <div className="col-md-4 pt-5 ps-3 shadow p-3 mb-5 bg-body rounded">
         <Link to={`/blogDetail/${blog._id}`}>
            <div>
               <img src={blog.image} style={{ height: '200px' }} className="image-fluid" alt="" />
               <h3>{blog.name}</h3>
            </div>
         </Link>
      </div>

   );
};

export default NewsPage;