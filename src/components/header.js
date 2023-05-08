import React from "react";
import Burger from "./burger";
import Registration from "./registration";
import Nav from "./nav";
import Cart from "./cart";



function Header() {
return (
    <>
<header className="container p-3 header">
  <div className="header-body">
        <div> <img className="logotype position-z" src="../images/logo.png" />
        </div>
        <Nav />
      <div className="main-page position-z">
        <div className="registration-img"><img className="img-shop active" src="../images/person.png"/>
        <Registration/>
        </div>
      </div> 
      <Burger/>
  </div>
</header>
</>
  );
}

export default Header;