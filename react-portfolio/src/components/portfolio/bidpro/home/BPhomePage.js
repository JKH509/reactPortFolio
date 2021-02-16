import React from "react";
// import { Link } from "react-router-dom";
import BpHeader from '../shared/BpHeader';
import AirlineSection from './AirlineSection';



const HomePage = () =>{
    return(
        <>
        
        <main className="container mt-5 mb-5" style={{backgroundColor:"white"}}>
        <BpHeader className=""  />
            <div className="jumbotron mt-3 ">
                <section className="row ">
                    <div className="col-sm-12 col-lg-8 ">
                    <h1 className="display-3"> Administration</h1>
                   <p className="lead">Hello Tom Jones! A website dedicated to the administration of Airline data</p>
                   </div>
                   <div className="col-sm-12 col-lg text-center">
                     
                      <h1 className="display-3">1.0.0</h1>
                      <p className="text-muted" >Version</p>
                      </div>
                 </section>
                  </div>
              
            
            <section className="row">
            <AirlineSection airlineName="American Airlines" airlinePath="american-airlines/bidtypes" />
            <AirlineSection airlineName="Alaska Airlines" airlinePath="alaska-airlines/bidtypes" />
            
           </section>
           <section className="row mt-4">
            <AirlineSection airlineName="Jetsuite" airlinePath="jetsuite/bidtypes" />
            <AirlineSection airlineName="Alaska Airlines" airlinePath="ups/bidtypes" />  
           </section>
        </main>
        
        </>
    );

}

export default HomePage;