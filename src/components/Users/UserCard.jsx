import { Avatar } from "@mui/material";
import axios from "../../context/axiosInstance.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  return alphabet[Math.floor(Math.random() * alphabet.length)];
}
  
const UserCard = () => { 
  const [user, setUser] = useState(null);
  const getCurrentUser = async () => {
  const response = await axios.get(`/api/users`)
  console.log(`get users`, response.data)
  setUser(response.data)
  }
  
  useEffect(() => {
    getCurrentUser()
  } , [])

  return (
    <div className="user-card">   
      
      <Avatar sx={{ bgcolor:"#A8BCCB" }} aria-label="recipe">
            {generateRandomLetter()}
          </Avatar> 
          {user && <h3 className="profile-name">{user.name}</h3>}    
        <p>Upcoming trips</p>
        <hr></hr>
        <p>Favorite trips</p>
        <hr></hr>
      </div>
  );
}


export default UserCard;