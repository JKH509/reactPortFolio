import React from 'react';
// import './grid.css'

const FirstGrid = () => {
    return (
        <main className="container mb-5 ">

    <div className="cards mt-5 p-3">
        <h2>This was my favorite assignment</h2>
        <p className="">To be honest, looking at this and the code hurts my eyes
            but I did get 100% on this assignment at the time. Seeing
            how the breakpoints work and you can choose when to show
            or hide elements was one of the coolest things I had seen
            up to that point.
        </p>
    </div>
    
    <div className="container-fluid mt-5">
        <div className="row">
            <section className=" logo d-none d-sm-block col-sm-3 ">
                <h1>Logo <span>(red)</span></h1>
            </section>
            <section className="logo text-white bg-primary col-sm-9">
               <h1>Header <span>(blue)</span></h1> 
            </section>
        </div>
    </div>
        <div className="container-fluid" >
            <div className="row" >
                <section className="bg-success col-12 col-md-4 col-lg-3">
                    <h1>Section 1 <span>(green)</span></h1> 
                </section>
                <section className="success2  col-sm-6 col-md-8 col-lg-6">
                    <h1>Section 2 <span>(greenyellow)</span></h1> 
                </section>
                <section className=" flex-column bg-info  col-sm-6 d-md-none d-lg-block col-lg-3">
                    <h1>Section 3 <span>(aqua)</span></h1> 
                 </section>
            </div>
        </div>
        <div className="container-fluid" >
            <div className="row flex-container">
                <section className=" col-sm-6 col-md-4 col-lg-8 col-xl-8 ftLeft">
                    <h1>Footer Left <span>(lime)</span></h1>
                </section>
                <section className=" d-md-none d-lg-block col-sm-6 col-lg-10 col-xl-10 bg-secondary">
                    <h1>Footer Center <span>(gray)</span></h1>
                </section>
                <section className="  col-md-8 col-lg-10 col-xl-10  bg-danger">
                    <h1>Footer Right <span>(fuchsia)</span></h1>
                </section>
            </div>
        </div>
</main>
    )
}

export default FirstGrid
