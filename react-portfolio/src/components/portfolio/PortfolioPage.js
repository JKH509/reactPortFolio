import React from "react";
import { FaCheck } from "react-icons/fa";
import gridPic from "../shared/images/firstGrid_150x150.png";
import bidTypePic from "../shared/images/bidType150.png";
import sayHelloPic from "../shared/images/sayHello.PNG";
import formValPic from "../shared/images/form_150x150.png";
import mathPic from "../shared/images/mathCalc.PNG";
import fluxWallet from "../shared/images/fluxWallet.PNG";
import plankPic from '../shared/images/plankCookingPic.PNG';
import bidProPic from '../shared/images/bidProAdmin.PNG'

const PortfolioPage = () => {
  return (
    <main className="mainPortfolio">
      <div className="container pr-4 pl-4">
        <div className="row cards mt-5 ">
          <div className="col ">
            <h1>Welcome to my portfolio page</h1>
            <p>Here are a few of my favorite assignments</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="cards p-2 mb-2">
              <img
                className="p-2 img-fluid"
                alt=""
                src={gridPic}
                style={{ height: "168px", width: "170" }}
              />
              <p className="mt-2">
                <a href="/Portfolio/Grid">First Grid Assignment</a>
                <br />
                Design Assignment
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="cards p-2 mb-2">
              <img className="p-2 img-fluid" alt="" src={bidTypePic} />
              <p className="mt-2">
                <a href="/Portfolio/BidProPage">First BidPro Assignment</a>
                <br />
                Design Assignment
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="cards p-2 mb-2">
              <img
                className="p-2 img-fluid"
                src={formValPic}
                alt=""
                style={{ height: "168px", width: "170" }}
              />
              <p className="mt-2">
                <a href="/Portfolio/FormValidation">Form Validation</a>
                <br />
                Design/Validation
              </p>
            </div>
          </div>
          {/* <div className="col-12 col-sm-2 col-md-3">
            <div className="cards p-2 mb-2">
              <img className="p-2" alt="" src="/images/mediaBR.png" />
              <a href="/Portfolio/FirstGrid">
                <p className="mt-2">First Grid Assignment</p>
              </a>
            </div>
          </div> */}
          <div className="col-12 col-sm-6 col-md-4">
            <div className="cards p-2 mb-2">
              <img
                className="p-2 img-fluid"
                src={sayHelloPic}
                alt=""
                style={{ height: "168px", width: "170" }}
              />
              <p className="mt-2">
                <a href="/Portfolio/SayHelloW4">Say Hello Part One</a>
                <br />
                (Input/Output)
              </p>
            </div>
          </div>
        {/* </div>
        <div className="row mt-3"> */}
          <div className="col-12 col-sm-6 col-md-4">
            <div className="cards p-2 mb-2">
              <img
                className="p-2 img-fluid"
                src={sayHelloPic}
                alt=""
                style={{ height: "168px", width: "170" }}
              />
              <p className="mt-2">
                <a href="/Portfolio/SayHelloW5">Say Hello Part Two</a>
                <br />
                (Input/Output)
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="cards p-2 mb-2">
              <img
                className="p-2 img-fluid"
                src={mathPic}
                alt=""
                style={{ height: "168px", width: "170" }}
              />
              <p className="mt-2 ">
                <a href="/Portfolio/Calculator">Math Calc</a>
                <br />
                Input/Output
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="cards p-2 mb-2">
              <img
                className="p-2 img-fluid"
                src={plankPic}
                alt=""
                style={{ height: "168px", width: "170" }}
              />
              <p className="mt-2">
                <a href="/Portfolio/PlankCooking">PlankCooking</a>
                <br />
                Validation/Input/Output/Ordering
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="cards p-2 mb-2">
              <img
                className="p-2 img-fluid"
                src={fluxWallet}
                alt=""
                style={{ height: "168px", width: "170" }}
              />
              <p className="mt-2">
                <a href="/Portfolio/FluxWallet">Flux Wallet</a><br/>
                Input/Output
              </p>
              
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="cards p-2 mb-2">
              <img
                className="p-2 img-fluid"
                src={bidProPic}
                alt=""
                style={{ height: "168px", width: "170" }}
              />
              <p className="mt-2">
                <a href="/Portfolio/BidPro">Bid Pro</a>
                <br />
                Misc
              </p>
            </div>
          </div>
        </div>

        <div className="row text-center cards mt-5 p-3">
          <div className="col-12">
            <h2>Class schedule</h2>
          </div>
          <div className="col-12 mt-3 ">
            <h3>First Year</h3>
            <div className="row text-center mt-3">
              <div className="col-12 col-sm-3 col-md-4 mt-2">
                <h5>Quarter 1</h5>
                <ul>
                  <li style={{ textAlign: "left" }}>
                    <FaCheck style={{ color: "rgb(47, 209, 47)" }} /> HTML5/CSS3
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <FaCheck style={{ color: "rgb(47, 209, 47)" }} /> Intro to
                    Programming
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <FaCheck style={{ color: "rgb(47, 209, 47)" }} /> Computer
                    Math
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <FaCheck style={{ color: "rgb(47, 209, 47)" }} /> Software
                    Math
                  </li>
                </ul>
              </div>

              <div className="col-12 col-sm-3 col-md-4 mt-2">
                <h5>Quarter 2</h5>
                <ul>
                  <li style={{ textAlign: "left" }}>
                    <FaCheck style={{ color: "rgb(47, 209, 47)" }} /> Responsive
                    Web Design
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <FaCheck style={{ color: "rgb(47, 209, 47)" }} /> JavaScript
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <FaCheck style={{ color: "rgb(47, 209, 47)" }} /> DBMS/SQL
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-3 col-md-4 mt-2">
                <h5>Quarter 3</h5>
                <ul>
                  <li style={{ textAlign: "left" }}>
                    <FaCheck style={{ color: "rgb(47, 209, 47)" }} /> React
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <FaCheck style={{ color: "rgb(47, 209, 47)" }} /> Kotlin
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <FaCheck style={{ color: "rgb(47, 209, 47)" }} /> Writing
                    for the web
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12">
            <h3>Second Year</h3>
            <div className="row text-center">
              <div className="col-12 col-sm-3 col-md-4 mt-2">
                <h5>Quarter 4</h5>
                <ul>
                  <li style={{ textAlign: "left" }}>
                    <FaCheck style={{ color: "rgb(47, 209, 47)" }} /> Kotlin 2
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <FaCheck style={{ color: "rgb(47, 209, 47)" }} /> Node js
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <FaCheck style={{ color: "rgb(47, 209, 47)" }} /> PHP 1
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-3 col-md-4 mt-2">
                <h5>Quarter 5</h5>
                <ul>
                  <li style={{ textAlign: "left" }}>
                    <FaCheck style={{ color: "rgb(47, 209, 47)" }} /> Node II
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <FaCheck style={{ color: "rgb(47, 209, 47)" }} /> PHP II
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <FaCheck style={{ color: "rgb(47, 209, 47)" }} /> Kotlin I
                     App Development
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-3 col-md-4 mt-2">
                <h5>Quarter 6</h5>
                <ul>
                  <li style={{ textAlign: "left" }}>
                    {/* <FaCheck style={{ color: "rgb(47, 209, 47)" }} />  */}
                    CSM
                  </li>
                  <li style={{ textAlign: "left" }}>
                    {/* <FaCheck style={{ color: "rgb(47, 209, 47)" }} />  */}
                    Kotlin II App Development
                  </li>
                  <li style={{ textAlign: "left" }}>
                    {/* <FaCheck style={{ color: "rgb(47, 209, 47)" }} />  */}
                    Agile
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PortfolioPage;
