import React from "react";
import checkout from '../../components/shared/images/cart/Checkout_button.png';
import back from "../shared/images/cart/Back_button.png"
// import continueShopping from '../../components/shared/images/cart/ContinueShopping_button.png';
// import remove from '../../components/shared/images/cart/Remove_Button.png';



const CartPageTwo = () => {


    return (

     <>
    <main className=" mt-5 mb-5">
        <div className="container ">

    <div className="row cartBackground ml-5 cartFont justify-content-center" style={{textAlign:"left"}}>
      <p>Enter Billing & Shipping Information Step 2 of 4</p>
    </div>
    <div className="row lightCartBackground ml-5  cartFont " >

      {/* <!-- Left side --> */}
       
      <div className="col-12 col-md-6 pl-1  " style={{ borderLeft: "1px dashed #929292",borderBottom: "1px dashed #929292",borderTop: "1px dashed #929292", borderRight: "1px dashed #929292"}}>
        <p className="cartBackground p-1" style={{ borderBottom: "1px dashed #929292", textAlign:"left", width:"100%"}}>
          Billing Address
        </p>
         
        {/* <form className="formBorder pl-4" method="POST" action="/cart/stepTwo/PostUser"> */}
          <div className="form-group row mt-2" style={{textAlign: "left"}}>
            <label  htmlFor="colFormLabelSm" className=" col-form-label col-form-label-sm col-3">First Name:</label>
            <div className="col-sm-7">
              <input type="text" required    className="valid form-control form-control-sm" name="firstNameInput" id="firstNameInput" />
            </div>
          </div>
          <div className="form-group row mt-2" style={{textAlign: "left"}}>
            <label  htmlFor="colFormLabelSm" className=" col-form-label col-form-label-sm col-3">Last Name:</label>
            <div className="col-sm-7">
              <input type="text" required    className=" form-control form-control-sm" name="lastNameInput" id="lastNameInput"  />
            </div>
          </div>
          <div className="form-group row mt-2" style={{textAlign: "left"}}>
            <label  htmlFor="colFormLabelSm" className=" col-form-label col-form-label-sm col-3">Address:</label>
            <div className="col-sm-7">
              <input type="text" required    className=" form-control form-control-sm" name="addressInput" id="addressInput" />
            </div>
          </div>
          <div className="form-group row mt-2 " style={{textAlign: "left"}}>
            <label  htmlFor="colFormLabelSm" className="col-form-label col-form-label-sm ml-3" >Address 2:</label>
            <div className="col-sm-7 ml-4">
              <input type="text"    className=" form-control form-control-sm" placeholder="Optional" name="addressTwoInput"
                id="addressTwoInput" />
            </div>
          </div>
          <div className="form-group row mt-2" style={{textAlign: "left"}}>
            <label  htmlFor="colFormLabelSm" className=" col-form-label col-form-label-sm col-3">City:</label>
            <div className="col-sm-7">
              <input type="text" required    className=" form-control form-control-sm" name="cityInput" id="cityInput" />
            </div>
          </div>


          <div className="form-group row mt-2" style={{textAlign: "left"}}>
            <label style={{paddingRight: "-15px", paddingLeft: "-15px"}}  htmlFor="stateInput" className="col-2 col-form-label col-form-label-sm col-3">State:</label>
            <div className="col-sm-7">
          <select required   style={{width:"225px", margin:"5px", paddingRight: "-15px", paddingLeft: "-15px"}} id="stateInput" name="stateInput"  className=""><option value="?">Select</option><option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">Dist of Columbia</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option></select>
            </div>
          </div>

          <div className="form-group row mt-2" style={{textAlign:"right"}}>
            <label  htmlFor="colFormLabelSm" className=" col-form-label col-form-label-sm col-3">Zip / Postal: </label>
            <div className="col-sm-7">
              <input required type="text"   className=" form-control form-control-sm" name="zipInput" id="zipInput" />
            </div>
          </div>
          <div className="form-group row mt-2" style={{textAlign:"right"}}>
            <label  htmlFor="" className=" col-form-label col-form-label-sm col-3">Phone: </label>
            <div className="col-sm-7">
              <input required  type="number"   className=" form-control form-control-sm" name="phoneInput" id="phoneInput" />
            </div>
          </div>
          <div className="form-group row mt-2" style={{textAlign:"right"}}>
            <label  htmlFor="" className=" col-form-label col-form-label-sm col-3">Email: </label>
            <div className="col-sm-7" >
              <input type="email"   className=" form-control form-control-sm" name="emailInput" id="emailInput" />
            </div>
          </div>
      

 
      </div>


      {/* <!-- Right Side --> */}
      <div className="col-12 col-md-6 pl-1  " style={{borderBottom: "1px dashed #929292",borderTop: "1px dashed #929292", borderRight: "1px dashed #929292"}}>
        <div className="cartBackground p-1" style={{textAlign:"left"}}>
          Shipping Address {"  "}
          <input
          className="ml-3"
            type="checkbox"
            id="billingCheck"
            name="billingCheck" 
            value="true" 
          />
          Same as Billing Address
        </div>
        
         
        
          <div className="form-group row mt-2" style={{textAlign: "left"}}>
            <label  htmlFor="colFormLabelSm" className=" col-form-label col-form-label-sm col-3">First Name:</label>
            <div className="col-sm-7">
              <input required type="text" className=" form-control form-control-sm" name="firstNameBInput" id="firstNameBInput" />
            </div>
          </div>
          <div className="form-group row mt-2" style={{textAlign: "left"}}>
            <label  htmlFor="colFormLabelSm" className=" col-form-label col-form-label-sm col-3">Last Name:</label>
            <div className="col-sm-7">
              <input required type="text" className=" form-control form-control-sm" name="lastNameBInput" id="lastNameBInput" />
            </div>
          </div>
          <div className="form-group row mt-2" style={{textAlign: "left"}}>
            <label  htmlFor="colFormLabelSm" className=" col-form-label col-form-label-sm col-3">Address:</label>
            <div className="col-sm-7">
              <input required type="text" className=" form-control form-control-sm" name="addressBInput" id="addressBInput" />
            </div>
          </div>
          <div className="form-group row mt-2 " style={{textAlign: "left"}}>
            <label  htmlFor="colFormLabelSm" className="col-form-label col-form-label-sm ml-3" >Address 2:</label>
            <div className="col-sm-7 ml-4">
              <input type="text" className=" form-control form-control-sm" placeholder="Optional" name="addressBTwoInput" id="addressTwoBInput" />
            </div>
          </div>
          <div className="form-group row mt-2" style={{textAlign: "left"}}>
            <label  htmlFor="colFormLabelSm" className=" col-form-label col-form-label-sm col-3">City:</label>
            <div className="col-sm-7">
              <input required type="text" className=" form-control form-control-sm" name="cityBInput" id="cityBInput" />
            </div>
          </div>
          <div className="form-group row mt-2" style={{textAlign: "left"}}>
            <label  htmlFor="colFormLabelSm" className=" col-form-label col-form-label-sm col-3">State:</label>
            <div className="col-sm-7">
          <select required   style={{width:"225px", margin:"5px", paddingRight: "-15px", paddingLeft: "-15px"}} id="stateInput" name="stateInput"  className=""><option value="?">Select</option><option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">Dist of Columbia</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option></select>
                 
            </div>
          </div>
          <div className="form-group row mt-2" style={{textAlign: "left"}}>
            <label  htmlFor="colFormLabelSm" className=" col-form-label col-form-label-sm col-3">Zip / Postal: </label>
            <div className="col-sm-7">
              <input required type="text" className=" form-control form-control-sm" name="zipBInput" id="zipBInput" />
            </div>
          </div>
          <div className="form-group row mt-2" style={{textAlign: "left"}}>
            <label  htmlFor="colFormLabelSm" className=" col-form-label col-form-label-sm col-3">Phone: </label>
            <div className="col-sm-7">
              <input required type="number" className=" form-control form-control-sm" name="phoneBInput" id="phoneBInput" />
            </div>
          </div>
          <div className="form-group row mt-2" style={{textAlign: "left"}}>
            <label  htmlFor="colFormLabelSm" className=" col-form-label col-form-label-sm col-3">Email: </label>
            <div className="col-sm-7">
              <input required type="email" className=" form-control form-control-sm" name="emailBInput" id="emailBInput" />
            </div>
          </div>
        
      </div>
    
    </div>

      
    {/* <!-- Checkout box --> */}
   
    <div className="row  lightCartBackground ml-5 cartFont">
        <div className="col-9 pl-2 justify-content-center"
        style={{width: "500px", fontSize: "16px", height: "25px", textAlign:"left", padding: "0", backgroundColor: "#d2be9d", color: "#4b290c", fontWeight: "bold", borderTop: "1px dashed #929292", borderLeft: "1px dashed #929292", borderRight: "1px dashed #929292"}}>
          Shipping to you
        </div>
        <div className="col-1  cartTableLabel justify-content-center" style={{borderLeft: "1px dashed #929292"}}>
          price
        </div>
        <div className="col-1 justify-content-center cartTableLabel" style={{borderLeft: "1px dashed #929292"}}>
          Quantity
        </div>
        <div className="col-1 justify-content-center cartTableLabel" style={{borderLeft: "1px dashed #929292"}}>
         total
        </div>

         {/* orderItems.forEach(item =>  */}

        <div className="col-9 p-2" style={{borderLeft: "1px dashed #929292", border: "1px dashed #929292", textAlign: "left"}}>
        Ancho Chili Rub                    
        </div>
        <div className="col-1 p-2" style={{border: "1px dashed #929292"}}>$6.00</div>
        <div className="col-1 p-2" style={{border: "1px dashed #929292"}}>1</div>
        <div className="col-1 p-2" style={{border: "1px dashed #929292"}}>$6.00</div>

        <div className="col-9 p-2" style={{border: "1px dashed #929292",  textAlign: "left"}}>
        Small Cedar Plank                    
        </div>
        <div className="col-1 p-2" >$32.00</div>
        <div className="col-1 p-2" style={{border: "1px dashed #929292"}}>1</div>
        <div className="col-1 p-2" style={{borderBottom: "1px dashed #929292", borderRight: "1px dashed #929292"}}>$32.00</div>

        <div className="col-9 p-2" style={{border: "1px dashed #929292",  textAlign: "left"}}>
        Passion & Palate                    
        </div>
        <div className="col-1 p-2" style={{border: "1px dashed #929292"}}>$42.00</div>
        <div className="col-1 p-2" style={{border: "1px dashed #929292"}}>1</div>
        <div className="col-1 p-2" style={{border: "1px dashed #929292"}}>$42.00</div>

        {/* // <});> */}
        
        <div className="col-10 p-2" style={{borderBottom: "1px dashed #929292",  borderLeft: "1px dashed #929292"}}></div>
        <div className="col-1 p-2"  style={{borderBottom: "1px dashed #929292" , textAlign: "right "}}>Subtotal</div>
        <div className="col-1 p-2"  style={{borderBottom: "1px dashed #929292"  ,borderRight: "1px dashed #929292"}}>$80.00</div>
        
    </div>
    
  
    {/* <!-- Comments --> */}
    <div className="row  lightCartBackground ml-5 cartFont p-2">
      <div className="col-12  pl-2 pb-4 justify-content-center"
        style={{width: "500px", height: "25px", textAlign:"left", padding: "5px", backgroundColor: "#d2be9d", color: "#4b290c", fontWeight: "bold", border: "1px dashed #929292"}}>
            
        Comments or Additional Information
      </div>
      <div className="d-flex col-12 pb-2" style={{border: "1px dashed #929292", left: "0px"}}>
        <textarea name="commentsInput" id="commentsInput" className="p-1 mt-1 "   rows="4" cols="35"></textarea>
      </div>
    </div>


    {/* <!-- Buttons --> */}
      <div className="d-flex row justify-content-end lightCartBackground formBorder ml-5" >
          
        <div className="p-1" >
          <a  href="/cart/stepOne" className="pr-1">
            <figure className="">
                <img src={back} alt="" style={{borderRadius: "3px"}}/>
            </figure> 
          </a> 
        </div>
        <div className="p-1">
          <a href="/cart/stepThree">
            <figure className="">
            <img src={checkout} alt="" />
            </figure>     
          </a>
        </div>    
    </div>



</div>
  </main>
      </>  
    )
}

export default CartPageTwo;
