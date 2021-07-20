import React, { useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import './App.css';
import { isUserLoggedIn } from './actions';
//import Layout from './components/Layout';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getlist } from './actions';
function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if(auth.authenticate){
      dispatch(getlist());
    }
    

  }, [auth.authenticate, dispatch]);
  return (
    <div className="App">
       <Router>
         <Switch>
           <PrivateRoute path="/" exact component={Home} />
           <Route path="/signin" component={Signin} />
         </Switch>
       </Router>
    </div>
  );
}

export default App;
