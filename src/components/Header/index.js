import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../actions";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  };

  const renderLoggedInLinks = () => {
    return (
      <li className="nav-item">
      <span className="nav-link" style={{cursor:"pointer"}} onClick={logout}>
            Signout
          </span>
    </li>
    );
  };

  const renderNonLoggedInLinks = () => {
    return (
      <li className="nav-item">
      <NavLink className="nav-link" to="/signin">Signin</NavLink>
    </li>
    );
  };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              
               
            {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
               
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Header
