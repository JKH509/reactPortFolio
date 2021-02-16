import React from 'react';
import { NavLink } from "react-router-dom";
import BpLogo from '../shared/BidProLogo.gif';
import './bidpro.css'
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

const BpHeader = () => {
    return (
        <div className="">
        {/* <ToastContainer /> */}
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-bidPro ">
        <NavLink to="../Portfolio" className="navbar-brand " >
          <img src={BpLogo} alt="BidPro logo"/> Back to Portfolio
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
          
          <li className="nav-item dropdown">
                <a href className="nav-link dropdown-toggle"  id="AmericanAirlinesdropDown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  American Airlines
                </a>
                <div className="dropdown-menu" aria-labelledby="AmericanAirlinesdropDown">
                  <NavLink activeClassName="active" className="dropdown-item" to="/american-airlines/bidtypes">Bid Types</NavLink>
                  <div className="dropdown-divider" ></div>
                  <NavLink activeClassName="active" className="dropdown-item" to="/american-airlines/pilots">Pilot</NavLink>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a href className="nav-link dropdown-toggle"  id="AlaskaAirlinesdropDown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Alaska Airlines
                </a>
                <div className="dropdown-menu" aria-labelledby="AlaskaAirlinesdropDown">
                  <NavLink activeClassName="active" className="dropdown-item" to="/alaska-airlines/bidtypes">Bid Types</NavLink>
                  <div className="dropdown-divider" ></div>
                  <NavLink activeClassName="active" className="dropdown-item" to="/alaska-airlines/pilots">Pilot</NavLink>
                </div>
              </li>
            
            <li className="nav-item dropdown">
                <a href className="nav-link dropdown-toggle"  id="jetsuitedropDown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Jetsuite Airlines
                </a>
                <div className="dropdown-menu" aria-labelledby="jetsuitedropDown">
                  <NavLink activeClassName="active" className="dropdown-item" to="/jetsuite/bidtypes">Bid Types</NavLink>
                  <div className="dropdown-divider" href="#"></div>
                  <NavLink activeClassName="active" className="dropdown-item" to="/jetsuite/pilots">Pilot</NavLink>
                </div>
              </li>
            <li className="nav-item dropdown">
             
              <a href className="nav-link dropdown-toggle" id="UPSdropDown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                UPS
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="UPSdropDown">
                <NavLink activeClassName="active" className="dropdown-item" to="/ups/bidtypes">Bid Types</NavLink>
                <div className="dropdown-divider" href="#"></div>
                <NavLink activeClassName="active" className="dropdown-item" to="/ups/pilots">Pilot</NavLink>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    )
}

export default BpHeader;
