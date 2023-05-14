import React, { useState } from "react";
import "./styles/form.css";
import vectorclock from "../icons/VectorRed.svg"
import razor from "../icons/Frame 12537.svg"
import { prices } from "../prices";

const Form = () => {
  const [price,setPrice] = useState("")
  console.log(price);


  return (
    <div className="form">
      <div className="progress-bar">
        <div className="stage-1">
          <span className="num">1</span>
          <p>Sign Up</p>
        </div>
        <div className="stage-2">
          <span className="num">2</span>
          <p>Subscribe</p>
        </div>
      </div>
      <div className="form-header">
        <h4>Select your subscription plan</h4>
      </div>
      <div className="plan">
      <div className="form-check">
         <div >
         <span className="expired">Offer Expired</span>
         <input
            className="form-check-input mx-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            disabled
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
          12 Months Subscription
          </label>
         </div>
         <div className="price">
          <p>Total <span>₹99</span></p>
          <p>₹33 /mon</p>
         </div>
        </div>
        {
          prices.map(p=>(
          
            <div className="form-check" key={p.id}>
         <div className="">
         <input
            className="form-check-input mx-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={e=>setPrice(p.price)}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {p.name}
          </label>
         </div>
         <div className="price">
          <p>Total <span>₹{p.price}</span></p>
          <p>₹{p.mon}/mn</p>
         </div>
        </div>
          ))
        }
        
      </div>
      <div className="summary">
        <div className="text ">
            <p>Subscription Fee</p>
            <p>₹ 18,500</p>
        </div>
        <div className="offer">
           <div>
           <h5>Limited time offer</h5>
            <p><img src={vectorclock} alt="" /> Offer valid till 25th March 2023 </p>
           </div>
           <div>{(price-18500).toLocaleString('hi-IN')}</div>
        </div>
        <div className="total ">
          <p>Total (Incl. of 18% GST)</p>
          <h4>₹ {price.toLocaleString('hi-IN')}</h4>
        </div>
      </div>
      <div className="buttons">
        <button className="btn btn-1">CANCEL</button>
        <button className="btn btn-2">PROCEED TO PAY</button>
      </div>
      <div className="img">
        <img src={razor} alt="" />
      </div>
    </div>
  );
};

export default Form;



