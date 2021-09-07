// import React, { useContext, useEffect, useState } from "react";
// import { Link, Route, Switch } from "react-router-dom";
// import "./Sidebar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCog,
//   faHome
// } from "@fortawesome/free-solid-svg-icons";
// import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
// import AddBlogs from "../AddBlogs/AddBlogs";

// const Sidebar = () => {

//   return (
//     <div>
//       <div className="row">
//         <div className="col-md-5">
//           <div
//             className="sidebar  py-5 px-4"
//             style={{ height: "100vh" }}
//           >
//             <ul className="list-unstyled">
//               <li>
//                 <Link to="/" className="text-white">
//                   <FontAwesomeIcon icon={faHome} /> <span>Home</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/dashboard/addBlogs" className="text-white">
//                   <FontAwesomeIcon icon={faFileAlt} /> <span>Add Blogs</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/dashboard/manageBlog" className="text-white">
//                   <FontAwesomeIcon icon={faCog} /> <span>Manage blogs</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="col-md-7">
//              <Switch>
//              <Route path="/dashboard/addBlogs">
//                 <AddBlogs></AddBlogs>
//              </Route>
//              </Switch>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
