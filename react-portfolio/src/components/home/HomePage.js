import React from "react";
import boholPic from './images/Bohol_250x250.jpg';

import gitPic from './images/Git-Icon-White.png';
import { FaHtml5, FaCss3 } from 'react-icons/fa';




const HomePage = () => {
    return (
        <main className="mainPortfolio">
<div className="container mb-5 ">

<section className=" text-center mt-5">
    <div className="justify-content-center">
        <figure className=" ">
            <img className="rounded-circle" width="200px" src={boholPic} alt="JamesHalstead" />
        </figure>
        <h1 className="d-none d-md-block">Hi I'm James, A software developer, in development.</h1>
        <h1 className="d-md-none">Hi I'm James, A software developer.</h1>
    </div>
    <p className="d-none d-md-block" style={{fontSize:"16px"}}>I will share with you some of the skills I've learned, why I got involved with programming and what my goals are.</p>
</section>

<section className="mt-3 mb-5">
    <h2 className="d-none d-md-block col-12 text-center">
        These are the tools I'm experienced with:
    </h2>
    <h2 className="col-12 d-md-none text-center">
        Experienced with:
    </h2>
    <div className="row align-items-center mt-3 text-center">
        <div className="col mt-2 ">
            <p>HTML 5</p>
            <i className="fa fa-html5 fa-5x" style={{width:"70px", color: "rgb(35, 83, 218)"}}></i>
            <FaHtml5 style={{width:"70px", height:"80px", color: "rgb(35, 83, 218)"}}/>
        </div>
        <div className="col mt-2">
            <p>CSS 3</p>
            <FaCss3 style={{width:"70px", height:"80px", color: "orange"}}/>
        </div>
        <div className="col mt-2">
            <p>JavaScript</p>
                <img src={"https://icon-library.net/images/javascript-icon-png/javascript-icon-png-23.jpg"} style={{width:"70px"}} alt=""  />
        </div>    
        <div className="col mt-2">
            <p>REACT</p>
                <img src="https://icon-library.net//images/react-icon/react-icon-29.jpg" style={{width:"70px"}} alt=""  />
        </div>
    </div>
        
    <div className="row align-items-center mt-2">
        <div className="col"></div>
        <div className="col mt-2">
            <p>NODE JS</p>
                <img src="https://icon-library.net//images/js-icon/js-icon-13.jpg" style={{width:"70px"}} alt="" />
        </div>
        <div className="col-4 mt-2"><p>PHP</p>
            <img src="https://icon-library.net//images/php-icon/php-icon-8.jpg" style={{width:"70px"}} alt="" />
        </div>
        <div className="col mt-2">
            <p>GIT</p>
            <img src={gitPic} style={{width:"70px"}} alt="" />
            </div>
        <div className="col"></div>
    </div>
</section>

</div>
</main>
)};

export default HomePage;
