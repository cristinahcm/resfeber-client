import { Avatar } from "@mui/material";
import axios from "../../context/axiosInstance.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TravelCard from "../TravelCard/TravelCard.jsx";

import useAuth from "../../context/auth/useAuth";

function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

const UserCard = () => { 
  const auth = useAuth();
  const [user, setUser] = useState(auth.currentUser);
  const [userTravels, setUserTravels] = useState([]);
  const[ travels, setTravels ] = useState([]);
  console.log("login user", auth.currentUser);
  console.log("user", user);

	const getAllTravels = async () => {
		const response = await axios.get("/api/travels")
		setTravels(response.data)
	}

	useEffect(() => {
		getAllTravels()
	}, [])


  // const getUserTravels = async () => {
  //   travels.map(travel => {
  //     if (travel.owner._id === user._id) {
  //       setUserTravels(travels.map(travel => travel._id === travel._id ? {...travel} : travel))
  //     }
  //   }
  //   )
  // }
  // useEffect(() => {
  //   getUserTravels()
  // }
  // , [])
  // console.log("userTravels", userTravels);

  const filterTravels = () => {
    return travels.filter(travel => travel.owner._id === user._id)
  } 
  useEffect(() => {
    setUserTravels(filterTravels())
  }
  , [])
  console.log("userTravels", userTravels);



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
          {userTravels.map(travel => (
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