 import axios from "../context/axiosInstance.js";
 import { useState, useEffect } from "react";
 import TravelCard from "../components/TravelCard/TravelCard.jsx";


 const Favorites = () => {
 const [favorites, setFavorites] = useState([])
 const [travels, setTravels] = useState([])


  const getAllTravels = async () => {
    try {
      const response = await axios.get("/api/travels")
      setTravels(response.data)
      console.log("responde data",response.data,"travels", travels)
    } catch (error) { 
      console.log(error)
    }
  }
  useEffect(() => {
    getAllTravels()
  } , [])


  const getUserFavoritesId = async () => {
    try {
      const response = await axios.get(`/api/auth/me`)
      setFavorites(response.data.isFavorite)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserFavoritesId()
  } , [])
  console.log("favorites",favorites)
  console.log("all travels",travels)

  const filteredTravels = travels.filter(travel => favorites.includes(travel._id))
  console.log(filteredTravels)



  return (
    <div>
      <h1>Favorites</h1>
      <div className="favorites-container">
        {filteredTravels.map(travel => (
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
        // handleDislike = {() => handleDislike(travel._id)}
        />
         
        ))}
        </div>
     
    </div>
  )


}

export default Favorites;