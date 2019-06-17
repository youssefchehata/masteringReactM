import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Header = ({branding}) => {
    return (
       <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py">
           <div className="container">
               <a href="/ReactFrontToBack/contactmanager/contactmanager" className="navbar-brand">
                   {branding}
                   <div>
                       <ul className="navbar-nav mr-auto">
                           <li className="nav-item">
                               <Link to="/ReactFrontToBack/contactmanager/contactmanager" className="nav-Link">Home</Link>
                           </li>
                       </ul>
                   </div>
               </a>
           </div>
       </nav>
    )
}
 Header.defaultProps={
     branding:'defaultProps:youssef'
 };
 Header.propTypes = {
    branding: PropTypes.string.isRequired
 };
export default Header;
