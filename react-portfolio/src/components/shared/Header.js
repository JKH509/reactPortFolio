import React from 'react';


const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light " style={{padding: "25px"}}>
        <a className="navbar-brand ml-2 " href="/">
            <div><span style={{fontSize: "24px", textShadow: "3px 3px grey"}}>J K H</span></div>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/About">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Goals">Goals</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}
export default Header;