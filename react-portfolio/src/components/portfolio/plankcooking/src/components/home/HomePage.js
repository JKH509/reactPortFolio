import React from 'react';

import PcHeader from '../shared/Header';
import salmonPic from "./images/salmon.png";
import spiceRub from "./images/SpiceRubs.png";
import spiceRubCube from "./images/SpiceRubs_cube.png";
import bakingPlanks from "../home/images/BakingPlanks.png";
import bakingPlanksCube from "../home/images/BakingPlanks_cube.png";
import cookBookPics from "../home/images/Cookbooks.png";
import cookBooksCube from "../home/images/Cookbooks_cube.png";
import bbqPlankPics from "../home/images/BBQ_Planks.png";
import bbqPlankCube from "../home/images/BBQ_Planks_cube.png";
import mainFooterPic from "../home/images/HomePlankFooter.png";

import '../shared/Global.css'

const HomePage = () => {
    return (
        <>
        <PcHeader />
        <div className="container">
        <h1 className="d-none">Plankcooking Home</h1>
   <main className="container pl-3 pr-3">
    <section>
      <h2 className="d-none ">Original Ceder plank cooked Salmon</h2>
      <figure id="headerImage_background" className="d-none d-lg-block mt-3" style={{backgroundImage: "url(https://plankcooking.com/app/home/images/HeaderImage_background.png)" }}>
         <img  alt="The Original Cedar Plank Roasted Salmon" style={{position: "relative", width: "98%", top: "3px", left: "0px"}} src={salmonPic} className="img-fluid" />
      </figure>
      <figure className="img-fluid  d-md-block d-lg-none" style={{position:"relative", top:"10px"}}>
         {/* <img  alt="The Original Cedar Plank Roasted Salmon" src="images/home/HomePg_Rotator_image1a.png" className="img-fluid"> */}
         <img  src={salmonPic} className="img-fluid"  alt="" />
      </figure>
    </section>

    <section style={{marginTop: "-18px"}}>
    <div className="d-none d-md-block">
      <a href="/src/views/shop/shop.ejs">
        <h2 className="d-none">Shopping Menu</h2>
      </a>
        <h3 className="d-none">
            <a href="/SpiceRubs">
                Spice Rubs
            </a>
        </h3>
        <h3 className="d-none">Baking Planks</h3>
        <h3 className="d-none">Cook Books</h3>
        <h3 className="d-none">BBQ Planks</h3>
      
    <div className="row cubes m-1 p-1 ">
      <figure className="col-6 col-md-3">

        <h2 className="d-none">Spice Rubs</h2>
        <a href="/Shop#/SpiceRubs">
          
        <img  src={spiceRub}   className="img-fluid" alt="" />
        </a>
      </figure>
      <figure className="col-6 col-md-3">
        <a href="/Shop#/BakingPlanks">
          <img  src={bakingPlanks}   className="img-fluid" alt="" />
        </a>
      </figure>
      <figure className="col-6 col-md-3">
        <a href="/Shop#/Cookbooks">
          <img  src={cookBookPics}   className="img-fluid" alt=""/>
      </a>
      </figure>
      <figure className="col-6 col-md-3">
        <a href="/Shop#/BBQPlanks">
          <img  src={bbqPlankPics}   className="img-fluid" alt=""/>
      </a>
      </figure>
    </div>
  </div>



    <div className="d-sm-block d-md-none cubesSmall mt-5" style={{position:"relative", top:"-50px", paddingTop:"6px", width:"100%"}}>
       <h2 className="d-none">Mobile Spice Rubs Menu</h2> 
      <div style={{marginTop:"25px", position:"relative", textAlign:"center"}} className="table-responsive-sm">
        <table border="0" cellPadding="5" cellSpacing="5" align="center">
          <tbody>
            <tr>
              <td>
               
                <a href="/Shop#/SpiceRubs">
                  <h2 className="d-none">Spice Rubs</h2>
                  {/* <img  src={home/images/SpiceRubs_cube.png} className="img-fluid" /> */}
                  <img  src={spiceRubCube} className="img-fluid" alt=""  />
                </a>
              </td>
              <td>
                <a href="/Shop#/BakingPlanks">
                  {/* <img  src={home/images/BakingPlanks_cube.png} className="img-fluid" /> */}
                  <img  src={bakingPlanksCube} className="img-fluid"  alt="" />
                </a>
                
              </td>
            </tr>
            <tr>
                  <td>
                      <a href="/Shop#/Cookbooks">
                          <img  src={cookBooksCube}   className="img-fluid" alt=""/>
                      </a>
                  </td>
                  <td>
                      <a href="/Shop#/BBQPlanks">
                          <img  src={bbqPlankCube}   className="img-fluid" alt=""/>
                      </a>
                  </td>
              </tr>
          </tbody>
        </table>
      </div> 
    </div>
    </section>
    <div className="row text-center " style={{marginTop: "-20px"}}>
    <h2 className="d-none">Proud product of the Pacific Northwest</h2> 
        <div id="footer" className="footer d-none d-md-block tex-center  mt-auto">
          <figure className="col-md-12">
            <img alt="footer goes here" src={mainFooterPic} className="img-fluid" />
          </figure> 
        </div>
      </div> 
 

   </main>
   
</div>
   </>
    );
}

export default HomePage;