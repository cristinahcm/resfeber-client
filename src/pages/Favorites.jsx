 import axios from "../context/axiosInstance.js";
 import { useState, useEffect } from "react";
 import TravelCard from "../components/TravelCard/TravelCard.jsx";


 const Favorites = () => {
 const [travels, setTravels] = useState([])
  
 
  const getAllTravels = async () => {
    try {
      const response = await axios.get("/api/travels");
      const currentUser = await axios.get(`/api/auth/me`);
      
      const filteredTravels = response.data.filter(travel => currentUser.data.isFavorite.includes(travel._id))
      setTravels(filteredTravels)
     
    } catch (error) { 
      console.log(error)
    }
  }
  useEffect(() => {
    getAllTravels()
  } , [])


  return (
    <div>
      <h1 className="h1form">Favorites</h1>
      <div className="cards-fav">
        {travels.map(travel => (
        <TravelCard className="usercard"
        destination={travel.destination}
        route={travel.route}
        origin={travel.origin}
        budget={travel.budget}
        initialDate={travel.initialDate}
        finalDate={travel.finalDate}
        typeTravel={travel.typeTravel}
        images={travel.images}
        _id = {travel._id}
       
        />
         
        ))}
        </div>
     
    </div>
  )


}

export default Favorites;