import { Avatar } from "@mui/material";
import axios from "../../context/axiosInstance.js";
import { useEffect, useState } from "react";
import TravelCard from "../TravelCard/TravelCard.jsx";
import useAuth from "../../context/auth/useAuth";


const UserCard = () => { 
  const auth = useAuth();
  const [user, setUser] = useState(auth.currentUser);
  const [travels, setTravels] = useState([]);
  console.log("login user", auth.currentUser);
  console.log("user", user);

	const getAllTravels = async () => {
		const response = await axios.get("/api/travels")
    console.log("travels profile" , response.data)
    const filteredTravels =  response.data.filter(travel => travel?.owner?._id === user._id);
    console.log("filtered travels", filteredTravels)
		setTravels(filteredTravels)
   
	}

	useEffect(() => {
		getAllTravels()
	}, [])

  

  return (
    <div className="user-card">   

      <Avatar sx={{ bgcolor:"#bae2f4" }} >
          </Avatar> 
          {user &&  (
            <> 
            <h3 className="profile-name">{user.name}</h3>  
            </>
          )}

  
        <p>My trips</p>
        <div className="user-travels">
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
        <hr></hr>
        <p>Favorite trips</p>
        <hr></hr>
      </div>
  );
}


export default UserCard; 