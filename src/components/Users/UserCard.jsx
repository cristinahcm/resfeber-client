import { Avatar } from "@mui/material";
import axios from "../../context/axiosInstance.js";
import { useEffect, useState } from "react";
import TravelCard from "../TravelCard/TravelCard.jsx";
import useAuth from "../../context/auth/useAuth";
import { useNavigate } from "react-router-dom"
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import React from "react";
import EditModal from "../../components/Modals/EditModal";	

const UserCard = () => { 
  const auth = useAuth();
  const [user, setUser] = useState(auth.currentUser);
  const [travels, setTravels] = useState([]);
  const [editTravel, setEditTravel] = useState({});
  const [idTravelToEdit, setIdTravelToEdit] = useState(null);

 const navigate = useNavigate();

	const getAllTravels = async () => {
		const response = await axios.get("/api/travels")
    const filteredTravels =  response.data.filter(travel => travel?.owner?._id === user._id);
		setTravels(filteredTravels)
   
	}

	useEffect(() => {
		getAllTravels()
	}, [])

  const [open, setOpen] = React.useState(false);

  const handleOpen = (id) => {
		setIdTravelToEdit(id);
		setOpen(true); 
	}	
  const handleClose = () => setOpen(false);

  const handleEditTravel = async (e) => {
		e.preventDefault()
	
		const { data } = await axios.put(`/api/travels/edit/${idTravelToEdit}`, editTravel)
		setEditTravel(data)
	
		setOpen(false);
	}

	const onChange = (e) => {
		setEditTravel({
			...editTravel,
			[e.target.name]: e.target.value
		})
	}


  const handleDelete = async (id) => {
    let result = window.confirm("Are you sure you want to delete this travel?")
    if (result) {
    const { data } = await axios.delete(`/api/travels/delete/${id}`)
    const newTravels = travels.filter(travel => travel._id !== id)
    setTravels(newTravels)
    setTimeout(() => navigate("/home"), 1000)
    }
  }

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
            <>
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
           
            <Box className="buttonstravel">
						<Button onClick={() => handleOpen(travel._id)}>Edit</Button>
            <Button onClick={() => handleDelete(travel._id)}>Delete</Button>
						</Box>
            </>
          ))}
        </div>
        <EditModal  open={open} handleClose={handleClose} handleChange={onChange} handleSubmit={handleEditTravel} />
      </div>
  );
}


export default UserCard; 