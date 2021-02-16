import React from 'react';


const Footer = () => {
    return(
<div className="row bg-light">
<div className="col-12 d-flex justify-content-center">
    <ul className="nav">
        <li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
        </li>
        <div className="mt-2">|</div>
        <li className="nav-item">
            <a className="nav-link" href="/About">About</a>
        </li>
        <div className="mt-2">|</div>
        <li className="nav-item">
            <a className="nav-link" href="/Portfolio">Portfolio</a>
        </li>
        <div className="mt-2">|</div>
        <li className="nav-item">
            <a className="nav-link" href="/Contact">Contact</a>
        </li>
    </ul>
</div>
<div className="col-12 d-flex justify-content-center">
    <p>James Halstead 2020, Software Development Student</p>
</div>
</div>
    )
}
export default Footer;