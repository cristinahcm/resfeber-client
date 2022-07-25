import React, { useEffect, useState } from "react"
import axios from "axios"

const API_URL = 'http://localhost:5005';

const TravelCard = ({initialDate,
  finalDate,
  place,
  type,
  origin,
  destination,
  route,
  budget,
  images}) => {

const [travels, setTravels] = useState([])
const getAllTravels = async () => {
  const response = await axios.get(`${API_URL}/api/travels`)
  setTravels(response.data)
}
useEffect(() => {
  getAllTravels()
}, [])
 

  return (
    <div className="travel-card">
      <div className="travel-card-header">
      <div className="travel-card-body-image">
          <img src={images} alt="img" />
        </div>
        <div className="travel-card-header-title">
          <h2>{place}</h2>
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