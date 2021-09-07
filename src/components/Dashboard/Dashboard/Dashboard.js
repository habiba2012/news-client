
// import Orders from '../Orders/Orders';
// import Sidebar from '../Sidebar/Sidebar';
import React, { useContext, useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
// import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faHome
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import AddBlogs from "../AddNews/AddNews";
import './Dashboard.css';
import Header from "../../Header/Header";
import ManageBlog from "../ManageNews/ManageNews";


const Dashboard = () => {
  // const [allOrders, setAllOrders] = useState([]);


  return (
    <section>
      <Header></Header>
      <div>


        <div className="row mt-5" >

          <div className="col-md-3 mt-5" style={{ backgroundColor: 'black', color: 'white', height: '100vh' }}>

            <ul className="list-unstyled">
              <li>
                <Link to="/" >
                  <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/addBlogs" >
                  <FontAwesomeIcon icon={faFileAlt} /> <span>Add News</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageBlog">
                  <FontAwesomeIcon icon={faCog} /> <span>Manage News</span>
                </Link>
              </li>
            </ul>

          </div>
          <div className="col-md-9 ps-5 pt-5">
            <Switch>
              <Route path="/dashboard/addBlogs">
                <AddBlogs></AddBlogs>
              </Route>
              <Route path="/dashboard/manageBlog">
                <ManageBlog></ManageBlog>
              </Route>

            </Switch>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;