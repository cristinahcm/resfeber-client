import React, { useEffect, useState } from "react"



const API_URL = 'http://localhost:5005';

const TravelCard = ({
  images,
  location,
  route,
  budget,
  initialDate,
  finalDate,
  type,
}) => {

  return (
    <div className="travel-card">
      <div className="travel-card-header">
      <div className="travel-card-body-image">
          <img src={images} alt="img" />
        </div>
        <div className="travel-card-header-title">
          <h2>{location}</h2>
        </div>
        <div className="travel-card-header-date">
          <p>{initialDate}</p>
          <p>{finalDate}</p>
        </div>
      </div>
      <div className="travel-card-body">
       
        <div className="travel-card-body-text">
          <p>{route}</p>
          <span>{budget}</span>
          <p>{type}</p>
        </div>
      </div>
    </div>
  );
}


export default TravelCard;