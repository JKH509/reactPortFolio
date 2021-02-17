import React from 'react';

import spiceRubs from "../../components/shared/images/shop/SpiceRubs_cube.png";
import cookbooks from "../../components/shared/images/shop/Cookbooks_cube.png";
import bakingPlanks from "../../components/shared/images/shop/BakingPlanks_cube.png";
import bbqPlanks from "../../components/shared/images/shop/BBQ_Planks_cube.png";
import shopHeader from '../../components/shared/images/shop/Shop_MenuHeader.png';

import paperBottom from '../shared/images/PaperBackground_Bottom.png';


const ShopPage = () => {
    return (


<main className="pl-3 pr-3 ">
    
<div className="container">
    <div className="row ">
      <div className="dropdown col-sm-12 d-lg-none text-center center">
        <button
          className="btn dropdown-toggle banner mt-3  text-white"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{width:"280px",borderRadius:"8px"}}
        >
          <h2 style={{color:"#DBCB98"}}>Shop
              
          </h2>

          
        </button>
        <div
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton"
        >
          <a
            className="nav-link-bottom dropdown-item"
            href="/Portfolio/spicerubs"
          >
            SPICE RUBS
          </a>
          <a
            className="nav-link-bottom dropdown-item"
            href="/Portfolio/cookbooks"
          >
            COOKBOOKS
          </a>
          <a
            className="nav-link-bottom dropdown-item"
            href="/Portfolio/bakingplanks"
          >
            BAKING PLANKS
          </a>
          <a
            className="nav-link-bottom dropdown-item"
            href="/Shop/bbqgplanks"
          >
            BBQ PLANKS
          </a>
          <a
            className="nav-link-bottom dropdown-item"
            href="/Shop/bbqgplanks"
          >
            NutDriver
          </a>
        </div>
      </div>

      
      {/* <!-- //Medium to Small Screen --> */}

      <div className="container justify-content-center mt-4">
      <section className="row justify-content-center">

        <div className="  pl-5 d-md-none text-center" style={{width:"650px"}}>
          <div className="  col-12 boarderTop " style={{width:"430px"}}></div>
          <h2 className="col-7   dotted_line_right boarderBottom  " style={{textAlign:"left"}} >
                PLANK COOKING PRODUCTS
              </h2>
          </div>
        
          <div className=" d-md-none pr-5 pl-5"  >
            <div className="col-12 text-center" style={{width: "620px"}}>
              <a href="/Portfolio/spicerubs">
                <img src={spiceRubs} alt="" />
              </a>
              <a href="/Portfolio/cookbooks">
                
                <img src={cookbooks} alt="" />
              </a>
              <a href="/Portfolio/bakingplanks">
                
                <img src={bakingPlanks} alt="" />
              </a>
              <a href="/Portfolio/bbqplanks">
                
                <img src={bbqPlanks} alt="" />
              </a>
            </div>
          </div>
      </section>
    </div>
 </div>
</div>


{/* <!-- // Side Menu --> */}
<div className="container">
    <div className="row">

<section
        className="col-3 d-none d-none d-lg-block mt-5"
        style={{height: "100px", fontSize: "14px"}}
      >
        <ul className="hideUlDot " style={{width: "250px"}}>
            <figure>
                <img src={shopHeader} alt="" />
            </figure>

            <div style={{textAlign:"center", maxWidth:"225px", margin: "0 auto"}}>

              <div style={{margin:"10px 0px 10px 10px"}} className="dotted_line"></div>

                  <div>
                    
                      <a href="/Portfolio/spicerubs">
                          <span className="leftMenuTitle">SPICE RUBS</span>
                      </a>
                  </div>
                  <div style={{margin:"10px 0px 10px 10px"}} className="dotted_line"></div>
                  <div>
                      <a href="/Portfolio/cookbooks">
                          <span className="leftMenuTitle">COOKBOOKS</span>
                      </a>
                  </div>
                  <div style={{margin:"10px 0px 10px 10px"}} className="dotted_line"></div>
                  <div>
                      <a href="/Portfolio/bakingplanks">
                          <span className="leftMenuTitle">BAKING PLANKS</span>
                      </a>
                  </div>
                  <div style={{margin:"10px 0px 10px 10px"}} className="dotted_line"></div>
                  <div>
                      <a href="/Portfolio/bbqplanks">
                          <span className="leftMenuTitle">BBQ PLANKS</span>
                      </a>
                  </div>
                  <div style={{margin:"10px 0px 10px 10px"}} className="dotted_line"></div>
                  <div>
                      <a href="/Portfolio/nutdriver">
                          <span className="leftMenuTitle">NUT DRIVER</span>
                      </a>
                  </div>
                  <div style={{margin:"10px 0px 10px 10px"}} className="dotted_line"></div>
          </div>
          </ul>
          </section>

     








      {/* <!-- // Medium to Large Screen --> */}

      <section className=" d-none d-md-block col-md-12 col-lg-7 mt-3 ">
        <div className=" row mt-5 ml-5">
          <div className="paperBackground  pr-4">
            <div className="boarderTop  mt-4">
              <div className="" style={{textAlign:"left"}}>
              <h2
                className="col-6 dotted_line_right boarderBottom pr-3"
              >
                PLANK COOKING PRODUCTS
              </h2>
            </div>
            </div>
            <div className="col-md-12" style={{width: "590px", fontSize: "14px"}}>
              <div className="">
                <a href="/Portfolio/spicerubs">
                  
                  <img src={spiceRubs} alt="" />
                </a>

                <a href="/Portfolio/cookbooks">
                   
                    <img src={cookbooks} alt="" />
                </a>

                <a href="/Portfolio/bakingplanks">
                 
                    <img src={bakingPlanks} alt="" />
                </a>
                <a href="/Portfolio/bbqplanks">
                   
                    <img src={bbqPlanks} alt="" />
                </a>
              </div>
            </div>
          </div>
          
          {/* <!-- // Paper Bottom --> */}
          <div className="d-none d-lg-block ">
            <div className=" row">
                <figure>
                <img src={paperBottom} alt="" className="" style={{marginLeft:"30px"}}/>
                    {/* <img src="/images/about/paperBackground_Bottom.png" className="paperBottom"/> */}
                </figure>
            </div>
          </div>
          <div className="d-none d-md-block d-lg-none ">
            <div className=" row">
                <figure className="">
                <img src={paperBottom} alt=""  style={{marginLeft:"30px"}} />
                    {/* <img src="/images/about/paperBackground_Bottom.png" className="ml-3"/> */}
                </figure>
            </div>
          </div>

        </div>
      </section>
    </div>
    </div>
  </main>

    );
}

export default ShopPage;