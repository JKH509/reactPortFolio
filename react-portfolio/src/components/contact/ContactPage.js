import React from 'react';

const ContactPage = () => {
    return (
      
        <main className="container mb-5">
        
        <form className="cards mt-5">
            <h1>This form is validated using Node validator</h1>
            <div className="row pl-4">
            <div className="col-8">
            <div className="form-group row mt-3">
                <label htmlFor="firstNameInput" style={{textAlign: "left"}} className="col-sm-3 col-form-label mt-3">First Name:</label>
                <div className="col-sm-4 mt-3" >
                    <input type="text" className="form-control" name="firstNameInput" id="firstNameInput" value="" />
                </div>
            </div>
            <div className="form-group row ">
                <label htmlFor="lastNameInput" style={{textAlign: "left"}} className="col-sm-3 col-form-label">Last Name:</label>
                <div className="col-sm-4">
                    <input type="text" className="form-control" id="lastNameInput" value="" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="firstNameInput" style={{textAlign: "left"}} className="col-sm-3 col-form-label">Company Name:</label>
                <div className="col-sm-4">
                    <input type="text" className="form-control" name="firstNameInput" id="firstNameInput" value="" />
                </div>
            </div>
            <div className="form-group row ">
                <label htmlFor="staticEmail" style={{textAlign: "left"}} className="col-sm-3 col-form-label">Email</label>
                <div className="col-sm-4">
                    <input type="text" className="form-control" id="staticEmail" value="" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="staticEmail" style={{textAlign: "left"}} className="col-sm-3 col-form-label">Comment or Questions:</label>
                <div className="col-sm-6">
                    <textarea type="text" style={{minHeight: "150px"}} className="form-control" id="staticEmail" value=""/>
                </div>
            </div>
        </div>
        <div className="col-4 pr-5 ">
            <fieldset className="border border-white mt-3 mb-3" style={{borderRadius: "6px"}}>
             <legend className="" style={{borderRadius: "22px"}}> Best tech to know?</legend>
             <p className="badge badge-secondary col-12">Frontend</p>
                <input className="col-3" type="radio" id="male" name="gender" value="male" />
                <label className="col-6" style={{textAlign: "left"}} htmlFor="male">React</label><br/>
                <input className="col-3" type="radio" id="female" name="gender" value="female" />
                <label className="col-6" style={{textAlign: "left"}} htmlFor="female">Angular</label><br/>
                <input className="col-3" type="radio" id="other" name="gender" value="other" />
                <label className="col-6" style={{textAlign: "left"}} htmlFor="other">Other</label>
                
                <p className="badge badge-secondary col-12">Backend</p>
                <input className="col-3" type="radio" id="male" name="gender" value="male" />
                <label className="col-6" style={{textAlign: "left"}} htmlFor="male">Node</label><br/>
                <input className="col-3" type="radio" id="female" name="gender" value="female" />
                <label className="col-6" style={{textAlign: "left"}} htmlFor="female">Ruby</label><br/>
                <input className="col-3" type="radio" id="other" name="gender" value="other" />
                <label className="col-6" style={{textAlign: "left"}} htmlFor="other">Vanilla JS</label><br/>
                <input className="col-3" type="radio" id="other" name="gender" value="other" />
                <label className="col-6" style={{textAlign: "left"}} htmlFor="other">Other</label>
                
            </fieldset>
        </div>
    </div>
        <div className="row align-items-center ">
            <div className="col-12 mb-2 mt-3">
                <input className="" type="submit" value="Submit" />
            </div>
        </div>
        </form>
    </main>

    )
}

export default ContactPage;
