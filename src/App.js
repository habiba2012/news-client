import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Home from './components/Home';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import NewsDetail from './components/NewsDetail/NewsDetail';
/* import Login from './components/Pages/Login/Login';
import NotFound from './components/Pages/NotFound'; */

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/blogDetail/:_id">
          <NewsDetail></NewsDetail>
        </Route>

        <Route path="/">
          <Home></Home>
        </Route>
        {/* <Route path="*">
            <NotFound></NotFound>
          </Route> */}
      </Switch>
    </Router>
  );
}

export default App;