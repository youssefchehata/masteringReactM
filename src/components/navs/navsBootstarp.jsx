import React from 'react';
import "./navBootstarp.css"
const NavsBootstrap = () => {
    return (  
        <div className="container">
        <h3>NavsBootstrap</h3>
        <nav>
  <div className="nav nav-tabs " id="nav-tab" role="tablist">
    <a className="nav-item nav-link  

active " id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true" >Info</a>
    <a className="nav-item nav-link 

" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Mot de passe</a>
    <a className="nav-item nav-link 

" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Groupes</a>
  </div>
</nav>
<div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"> body-one</div>
  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">body tow</div>
  <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">body three</div>
</div>
        </div>
    );
}
 
export default NavsBootstrap;

// btn btn-outline-warning
