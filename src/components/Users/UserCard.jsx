import { Avatar } from "@mui/material";
import axios from "../../context/axiosInstance.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import useAuth from "../../context/auth/useAuth";

function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

const UserCard = () => { 
  const auth = useAuth();
  const [user, setUser] = useState(auth.currentUser);
  console.log("login user", auth.currentUser);
  console.log("user", user);

  return (
    <div className="user-card">   

      <Avatar sx={{ bgcolor:"MediumAquaMarine" }} >
          </Avatar> 
          {user &&  (
            <> 
            <h3 className="profile-name">{user.name}</h3>  
            </>
          )}

  
        <p>Upcoming trips</p>
        <hr></hr>
        <p>Favorite trips</p>
        <hr></hr>
      </div>
  );
}


export default UserCard; 