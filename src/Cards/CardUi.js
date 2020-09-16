import React from "react";
import "./Card.css";

const CardUi = (props) => {
  return (
    // <div className="card text-center shadow">
      <div className={props.check}>
        {/* <div className="overflow">
          <img src={props.image} alt="defender" className="card-img-top"/>
        </div> */}
        <div className="card-body text-dark">
          <h1 className="card-title">{props.title}<span>&#176;</span></h1>
          <p className="card-text">
            {props.content}
            <br />
            {props.date}
          </p>
          {/* <a href="#" className="btn btn-outline-success">Go Offroading</a> */}
        </div>
      </div>
    // </div>
  );
};

export default CardUi;
