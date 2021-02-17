import React from 'react';
// import { NavLink } from "react-router-dom";
import { Affix, } from "rsuite";

import TopLogo from "../shared/images/mainLogo.png";
import cartButton from "./images/cartMain.png";


const Header = () => {
    return (
         

<header className="container-fluid ">

<nav>
  <h2 className="d-none">Navigation Menu</h2>
<div className="d-sm-block d-md-none  ">
<div className="d-flex banner navbar-inverse">
<div className="p-2">
<img alt="plankcooking logo" style={{width:"129px"}} src={TopLogo} to="/" className="img-fluid"/>
<img src={cartButton} alt="checkout" href="/Portfolio/cart" className="img-fluid"/>
</div>

<div className="ml-auto p-2 navbar-expand-lg ">
  <button className="mt-2 border border-white navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="mt-1 navbar-toggler-icon"></span>
    <span className="mt-1 navbar-toggler-icon"></span>
    <span className="mt-1 mb-1 navbar-toggler-icon"></span>           
  </button>
</div>
</div>
  <div className="d-flex flex-row   banner ">
    <div className="collapse navbar-collapse  " id="navbarNav">
      <ul className="navbar-nav  navbar-expand-lg  col-12">
        <li className="nav-item">
          <h3 className="d-none">About</h3>
          <a className="nav-link " href="/Portfolio/Portfolio/about">About</a>
        </li>
        <li className="nav-item ">
          <h3 className="d-none " href="/Portfolio/shop">Shop</h3>
          <a className="nav-link" href="/Portfolio/shop">Shop</a>
        </li>
        <li className="nav-item pl-2">
          <h3 className="d-none">Reviews</h3>
          <a className="nav-link" name="Reviews" href="/Portfolio/reviews">Reviews</a>
        </li>
        <li className="nav-item pl-2 " >
          <h3 className="d-none">Recipes</h3>
          <a className="nav-link"  href="/Portfolio/recipes">Recipes</a>
        </li>       
        <li className="nav-item pl-2">
          <h3 className="d-none">Contact</h3>
          <a className="nav-link" href="/Portfolio/contact">Contact</a>
        </li>
      </ul>               
    </div>         
  </div>
</div>
  
{/* <!-- TOP LOGO AND CART --> */}
  <div className=" d-none d-md-block">
    <div className="header row ">
      <div className="col-8 offset-1 d-flex justify-content-end align-items-end">
        <a className="nav-link" href="/" id="logoID">
        <img alt="plankcooking logo" src={TopLogo} to="/" className="img-fluid"/>

        </a>
        <a className="nav-link pb-3" href="/Portfolio/cart" id="cartID">
        <img src={cartButton} alt="checkout" to="/Portfolio/cart" className="img-fluid"/>
        </a>
      </div>
    </div> 

    <Affix top={0}>
          <nav
            className="navbar sticky-top"
            data-spy="affix"
            data-offset-top="151"
          >
      <a href="/Portfolio">Return to Portfolio</a>{" "}
        <a className="nav-link " href="/Portfolio/about">
          About
        </a>
        <a className="nav-link" href="/Portfolio/shop">
          Shop
        </a>
        <a className="nav-link" href="/Portfolio/reviews">
          Reviews
        </a>
        <a className="nav-link" href="/Portfolio/recipes">
          Recipes
        </a>
        <a className="nav-link" href="/Portfolio/contact">
          Contact
        </a>
        </nav>
        </Affix>
      </div>
</nav>
</header>
    );
}

export default Header;