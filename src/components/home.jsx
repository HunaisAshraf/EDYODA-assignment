import React from "react";
import Form from "./form";
import "./styles/home.css";
import book from "../icons/Group 20.svg";
import clock from "../icons/Group 19.svg";
import live from "../icons/Group 16.svg";
import learn from "../icons/Group 17.svg";
import ad from "../icons/Group 15.svg";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="header">
          <h1>Access curated courses worth</h1>
          
          <h1>
            ₹<del style={{color:"red"}}><span style={{color:"white"}}> 18,500</span></del> at just <span>₹ 99</span> per year!
          </h1>
          
        </div>
        <div className="list">
          <img src={book} alt="" />
          <p>
            <span>100+</span> JOB relevant courses
          </p>
        </div>
        <div className="list">
          <img src={clock} alt="" />
          <p>
            <span>20,000+</span> Hours of content
          </p>
        </div>
        <div className="list">
          <img src={live} alt="" />
          <p>
            <span>Exclusive</span> webinar access
          </p>
        </div>
        <div className="list">
          <img src={learn} alt="" />
          <p>
            Scholarship worth <span>₹34,500</span>
          </p>
        </div>
        <div className="list">
          <img src={ad} alt="" />
          <p>
            <span>Ad Free</span> learning experience
          </p>
        </div>
      </div>
      <div className="home-form">
        <Form />
      </div>
    </div>
  );
};

export default Home;
