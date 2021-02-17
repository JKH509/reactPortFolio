import React from 'react';



const FormValidation = () => {
    return (
       
        <main className="container main-top-padding">

<h1>Will be active soon!</h1>

          <form >
            <section
              
            >
              <p>
                There was a problem with your submission errors have been
                highlighted below
              </p>
            </section>

            <section
              
            >
              <div className="row">
                <div className="col-6">
                  <label>Gift Card Amount *</label>
                  <input
                    type="number"
                    id="giftCardAmountInput"
                    name="giftCardAmountInput"
                    className="form-control"
                    
                  />
                </div>
              </div>
              <div
               
              >
                <h6>This feild is Required</h6>
              </div>
            </section>

            <section
              
            >
              <label>Recipents Name *</label>
              <div className="form-row">
                <div className="form-group col-6">
                  <input
                    type="text"
                    id="recipentsFirstNameInput"
                    name="recipentsFirstNameInput"
                    className="form-control"
                    
                  />
                  <label>First</label>
                </div>

                <div className="form-group col-6  align-items-end">
                  <input
                    type="text"
                    id="recipentsLastNameInput"
                    name="recipentsLastNameInput"
                    className="form-control"
                   
                  />
                  <label>Last</label>
                </div>
              </div>
              <div
                
              >
                <h6>This feild is Required</h6>
              </div>
            </section>

            <section
              
            >
              <label>Shipping Address *</label>
              <div className="form-row">
                <div className="form-group col">
                  <input
                    type="text"
                    id="streetInput"
                    name="streetInput"
                    className="form-control"
                  />
                  <label htmlFor="streetInput">Street Address</label>
                </div>
              </div>

              <div className=" form-row">
                <input
                  type="text"
                  id=" lineTwoInput"
                  name=" lineTwoInput"
                  className="form-control"
                />
                <label htmlFor=" lineTwoInput">Address Line 2</label>
              </div>

              <div className="row">
                <div className="form-group col-6">
                  <input
                    type="text"
                    id="cityInput"
                    name="cityInput"
                    className="form-control"
                    
                  />
                  <label htmlFor="cityInput">City</label>
                </div>
                <div className="form-group col-6 ">
                  <input
                    type="text"
                    id="stateInput"
                    name="stateInput"
                    className="form-control"
                   
                  />
                  <label htmlFor="stateInput">State / Province / Region</label>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-6">
                  <input
                    type="number"
                    id="zipInput"
                    name="zipInput"
                    className="form-control"
                  />
                  <label htmlFor="zipInput">Zip / Postal Code</label>
                </div>
                <div className="form-group col-6">
                  <select
                    id="countrySelect"
                    name="countrySelect"
                    className="form-control"
                   
                  >
                    <option selected>Must Choose an option</option>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                  </select>
                  <label htmlFor="countrySelect">Country</label>
                </div>
              </div>
              <div
               
              >
                <h6>This feild is Required</h6>
              </div>
            </section>

            <h5 className="mt-1 pb-2">Billing Information</h5>
            <section
             
            >
              <label>Name *</label>
              <div className="form-row">
                <div className="form-group col-6">
                  <input
                    type="text"
                    id="billingFirstInput"
                    name="billingFirstInput"
                    className="form-control"
               
                  />
                  <label htmlFor="billingFirstInput">First</label>
                </div>
                <div className="form-group col-6 ">
                  <input
                    type="text"
                    id="billingLastInput"
                    name="billingLastInput"
                    className="form-control"
                  />
                  <label htmlFor="billingLastInput">Last</label>
                </div>
              </div>
              <div
                
              >
                <h6>This feild is Required</h6>
              </div>
            </section>

            <div className="mt-3">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </main>
    )
}

export default FormValidation;
