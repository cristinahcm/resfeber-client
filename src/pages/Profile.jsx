import axios from "../context/axiosInstance.js";
import UserCard from "../components/Users/UserCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



const Profile = () => {
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
    <div>
			{user &&
      <UserCard name={user.name} email={user.email} picture={user.picture} //interests={user.interests
       age={user.age} />
		}
    </div>
  );
}

export default Profile;

