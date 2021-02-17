import { React, useState, useEffect } from "react";
import checkout from '../../components/shared/images/cart/Checkout_button.png';
import continueShopping from '../../components/shared/images/cart/ContinueShopping_button.png';
import remove from '../../components/shared/images/cart/Remove_Button.png';
// import loader from '../../components/shared/images/cart/ajax-loader.gif';

const CartPage = () => {

    const [orders, setOrders] = useState([]);
    const [others, setOthers] = useState([]);

    useEffect(() => {
      const _orders = [];
      const _others = [];

      const totalOther = {
          qty:3,
          subTotal:"$80.00"
      }
      _others.push(totalOther);

      const firstOrder = {
        name: "Ancho Chili Rub",
        price: "$6.00",
        qty: 1,
        total:6.00,
        totalPrice:"$6.00",
        subTotal:0,
      };
      _orders.push(firstOrder);

      const secondOrder = {
        name: "Small Cedar Plank",
        price: "$32.00",
        qty: 1,
        total:6.00,
        totalPrice:"$32.00",
        subTotal:0,
      };
      _orders.push(secondOrder);

      const thirdOrder = {
        name: "Passion & Palate",
        price: "$42.00",
        qty: 1,
        total:42.00,
        totalPrice:"$42.00",
        subTotal:"$80.00",
      };
      _orders.push(thirdOrder);
  
      setOrders(_orders);
      setOthers(_others)
    }, []);


    return (
        <>
<main  className="pl-3 pr-3">
    <div className="container">

  <div className="d-flex cartBackground cartFont mt-5 mb-2">
    <div className="mr-auto p-1 mt-3">
    {others.map((other) => (
      <p>
          SHOPPING CART: Your cart contains 
          {" "} {other.qty}{" "}
            items
            </p>
    ))}
    </div>
    <div className="p-1 mt-3">
      <a href="/Shop">
        <figure className="">
          <img src={continueShopping} alt="" className="pr-1"/>
        </figure>
      </a>
    </div>
    <div className="p-1 mt-3">
      <a href="/cart/stepTwo">
        <figure className="">
          <img src={checkout} alt="" />
        </figure>
      </a>
    </div>
  </div>
 

    <div style={{backgroundColor: "#e8e3c8", margin: "15px 0 0 0", padding: "10px"}} className="container">
  <table border="0" cellPadding="0" cellSpacing="0" width="100%">
    <tbody>
      <tr>
        <td
          style={{width: "500px", height: "25px", textAlign:"left", padding: "5px", backgroundColor: "#d2be9d", color: "#4b290c", fontWeight: "bold", borderTop: "1px dashed #929292", borderLeft: "1px dashed #929292"}}>
          Shipping to You
        </td>
        <td className="cartTableLabel" style={{borderLeft: "1px dashed #929292"}}>
          Price
        </td>
        <td className="cartTableLabel" style={{borderLeft: "1px dashed #929292"}}>
          Quantity
        </td>
        <td className="cartTableLabel" style={{borderLeft: "1px dashed #929292"}}>
          Total
        </td>
      </tr>
      {/* <!-- ngRepeat: product in ctrl.shopSvc.orderCart.products --> */}




      {orders.map((order) => (

      <tr className="ng-scope">
        <td
          style={{width: "500px", textAlign:"left", padding: "5px", color: "#4b290c", borderTop: "1px dashed #929292", borderLeft: "1px dashed #929292"}}
          className="">
              {order.name}
              </td>
        <td
          style={{width: "100px", textAlign: "center", color: "#4b290c", borderTop: "1px dashed #929292", borderLeft: "1px dashed #929292"}}
          className="ng-binding">
              {/* $<%=item.price%>.0 */}
              {order.price}
              </td>
        <td
          style={{width: "100px", padding: "5px", textAlign: "center", color: "#4b290c", borderTop: "1px dashed #929292", borderLeft: "1px dashed #929292"}}>
          <input className="UpdateQty ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-maxlength"
            ng-model="product.qty" style={{width:"35px", height:"25px", border: "1px solid #929292", textAlign:"center"}}
            ng-blur="ctrl.validateQty(product);" ng-keyup="ctrl.updateQty(product);"
            ng-keypress="ctrl.numbersRequired($event)" maxlength="2" value={order.qty} />

            </td>
        <td
          style={{width: "100px", textAlign:"center", color: "#4b290c", borderTop: "1px dashed #929292", borderLeft: "1px dashed #929292", borderRight: "1px dashed #929292"}}>
          <div style={{paddingTop: "10px"}} className="ng-binding" >
              
          {order.totalPrice}
              </div>
          <div style={{paddingTop: "10px", paddingBottom:"5px", textAlign: "center" }}>

            <form action="/cart/stepOne">
              {/* <input type="" id="productId" name="productId"  /> */}
             
              <img src={remove} alt="" />
            </form>
              
            </div>
        </td>
      </tr>
      ))}
      {/* <!-- end ngRepeat: product in ctrl.shopSvc.orderCart.products -->  */}

      {others.map((other) => (
      <tr>
        <td
           style={{ width: "500px", textAlign:"left", padding:"5px", color:"#4b290c", borderTop: "1px dashed #929292", borderLeft: "1px dashed #929292", fontWeight: "bold" }} >
          {/* <span ng-show="ctrl.isBusy" className="ng-hide">
            &nbsp;
            
            <img alt="Loader"
              ng-src="/images/cart/ajax-loader.gif" className="img-fluid"
              src={loader} />
               Updating Cart... Please wait
              </span> */}
            </td>
        <td
          style={{width: "100px", paddingTop: "5px", height: "35px", color: "#4b290c", fontWeight: "bold", textAlign: "center", borderTop: "1px dashed #929292" }}>
          &nbsp;</td>
        <td
          style={{width: "100px", height: "35px", color: "#4b290c", fontWeight: "bold", textAlign: "right", borderTop: "1px dashed #929292"}}>
          Subtotal:</td>
          
        <td
          style={{width: "100px", height: "35px", color: "#4b290c", fontWeight: "bold", textAlign: "center", borderTop: "1px dashed #929292", borderRight: "1px dashed #929292" }}
          className="">{other.subTotal}</td>
      </tr>
      ))}
      <tr>
        <td colspan="4" style={{height: "45px", border: "1px dashed #929292", paddingRight:"5px", textAlign:"right" }}>
          <div className="d-flex row justify-content-end lightCartBackground ml-5">
            <div className="p-1">
              <a href="/Shop">
                <figure className="">
                   
                    <img src={continueShopping} alt="" className="pr-1"/>
                </figure>
            </a>
            </div>
            <div className="p-1">
              <a href="/cart/stepTwo">
                <figure className="">
                    {/* <img src="/images/cart/Checkout_button.png"  className=""/> */}
                    <img src={checkout} alt="" />
                </figure>     
            </a>
            </div>
          </div>
          </td>
      </tr>
    </tbody>
  </table>
</div>
</div>
  </main>
</>
    );
}

export default CartPage;