import React from "react";
import TravelCard from "../components/TravelCard/TravelCard";
import axios from "../context/axiosInstance.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Home.css";
import TinderCard from 'react-tinder-card'
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import authValues from "../context/auth/UserWrapper"
import useAuth from "../context/auth/useAuth";
import EditModal from "../components/Modals/EditModal";	


const Home = () => {
	const [travels, setTravels] = useState([]);
	const navigate = useNavigate();
	const [editTravel, setEditTravel] = useState({});
	const [isLiked, setIsLiked] = useState([]);
	const [isDisliked, setIsDisliked] = useState(false);
	const auth = useAuth();
	const [idTravelToEdit, setIdTravelToEdit] = useState(null);

	const [open, setOpen] = React.useState(false);

  const handleOpen = (id) => {
		setIdTravelToEdit(id);
		setOpen(true); 
	}	
  const handleClose = () => setOpen(false);

	
	const getAllTravels = async () => {
		const response = await axios.get("/api/travels")
		setTravels(response.data)
	}

	useEffect(() => {
		getAllTravels()
	}, [])

	
const handleLike = async (travelId) => {
	const response = await axios.put(`/api/users/like/${auth.currentUser._id}`, {isFavorite: travelId})
	console.log(response)
	console.log("home user ", auth.currentUser)
	const newTravels = travels.filter(travel => travel._id !== travelId)
	setTravels(newTravels)
	console.log(travelId)
} 


const handleDislike =  (travelId) => {
	// setIsDisliked(travels.map(travel => travel._id === travelId ? {...travel, isDisliked: true} : travel))
	const newTravels = travels.filter(travel => travel._id !== travelId)
	setTravels(newTravels)
	console.log(isDisliked)
	console.log(travelId)
}

// const handleheartButton = () => {
// 	setHeartButton(!heartButton)
// }

	const handleEditTravel = async (e) => {
		e.preventDefault()
		console.log(idTravelToEdit)
		const { data } = await axios.put(`/api/travels/edit/${idTravelToEdit}`, editTravel)
		setEditTravel(data)
		console.log("Edit", data)
		console.log("Edit", editTravel)
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
			setTimeout(() => navigate("/"), 1000)
			}
		}
		
		return (
			<div className="cards">
	{travels.map((travel) => {
	
					return (
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
						handleLike = {() => handleLike(travel._id)}
						handleDislike = {() => handleDislike(travel._id)}
						/>
						<Box className="buttonstravel">
						<Button onClick={() => handleOpen(travel._id)}>Edit</Button>
						<Button onClick={() => handleDelete(travel._id)}>Delete</Button>
						</Box>
					
						</>
					)
				})}

				<EditModal  open={open} handleClose={handleClose} handleChange={onChange} handleSubmit={handleEditTravel} />

		</div>

	);
}

export default Home;
