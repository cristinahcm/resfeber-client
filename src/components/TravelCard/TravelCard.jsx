import React, { useEffect, useState } from "react"
import axios from "axios"


const API_URL = 'http://localhost:5005';

const TravelCard = ({
  destination,
  route,
  origin,
  budget,
  initialDate,
  finalDate,
  typeTravel,
  deleteTravel,
  images,
  _id
}) => {

  return (
    <div className="travel-card" key={_id}>
      <div className="travel-card-header">
        <div className="travel-card-header-title">
          <h1>{destination}</h1>
        </div>
        <div className="travel-card-origin">
        <h5>{origin}</h5>
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
          <p>{typeTravel}</p>
          <div className="travel-card-body-image">
          <img src={images} alt="img" />
        </div>
        </div>
        <button >Accept</button>
        <button onClick={deleteTravel}>Delete me !</button>
      </div>

    </div>
  );
}


export default TravelCard;