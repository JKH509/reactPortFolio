import React from 'react';


const Footer = () => {
    return (
        <>
         <footer className="text-center footerColor">
     <h2 className="d-none">Footer</h2> 
    
        <nav id="footer_links">
            <h3 className="d-none">Bottom Menu</h3>
            <a href="/About">ABOUT</a> | <a href="/Shop#/Products">SHOP</a> | <a href="/Reviews">REVIEWS</a> |
            <a href="/Recipes">RECIPES</a> | <a href="/Contact">CONTACT</a> |
            <a href="/Policies">POLICIES</a>
        </nav>

        <div id="copyright">
            ©Copyright 2020 Plankcooking.com. All Rights Reserved
        </div>
    
</footer>
        </>
    );
}

export default Footer;