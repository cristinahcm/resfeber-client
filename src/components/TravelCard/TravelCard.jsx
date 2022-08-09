import React, { useEffect, useState } from "react"
import axios from "axios"


const API_URL = 'http://localhost:5005';

const TravelCard = () => {

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
          <img src={setTravels.images} alt="img" />
        </div>
        <div className="travel-card-header-title">
          <h2>{setTravels.place}</h2>
        </div>
        <div className="travel-card-header-date">
          <p>{setTravels.initialDate}</p>
          <p>{setTravels.finalDate}</p>
        </div>
      </div>
      <div className="travel-card-body">
       
        <div className="travel-card-body-text">
          <p>{setTravels.route}</p>
          <span>{setTravels.budget}</span>
          <p>{setTravels.type}</p>
        </div>
      </div>
    </div>
  );
}


export default TravelCard;