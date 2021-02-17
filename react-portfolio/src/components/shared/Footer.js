import React from 'react';


const Footer = () => {
    return(
       
<div className="row bg-light justify-content-center text-center text-white" style={{backgroundColor:"#2B5285"}} >
<div className="col   " style={{backgroundColor:"#2B5285"}}>
    <ul className="nav justify-content-center">
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
<div className="col-12" style={{}}>
    <p><small>James Halstead 2020, Software Development Student</small></p>
</div>
</div>

    )
}
export default Footer;