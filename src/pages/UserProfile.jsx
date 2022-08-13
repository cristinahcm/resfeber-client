import axios from "axios";
import UserCard from "../components/Users/UserCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_URL = 'http://localhost:5005';

const UserProfile = () => {
const [user, setUser] = useState([]);
const { id } = useParams();



const getCurrentUser = async () => {
const response = await axios.get(`${API_URL}/api/users/${id}`)
console.log(`get users`, response.data)
setUser(response.data)
}

useEffect(() => {
  getCurrentUser()
} , [])


  return (
    <div>
      <UserCard name={user.name} email={user.email} picture={user.picture} interests={user.interests
      } gender={user.gender} age={user.age} />
   
    </div>
  );
}

export default UserProfile;
