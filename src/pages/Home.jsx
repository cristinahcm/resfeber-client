import React from "react";
import TravelCard from "../components/TravelCard/TravelCard";
import axios from "../context/axiosInstance.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import TravelEditForm from "../components/Forms/TravelEditForm";
import "./Home.css";
import TinderCard from 'react-tinder-card'
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import authValues from "../context/auth/UserWrapper"
import useAuth from "../context/auth/useAuth";


const Home = () => {
	const [travels, setTravels] = useState([]);
	const navigate = useNavigate();
	const [editMode, setEditMode] = useState(false);
	const [editTravel, setEditTravel] = useState({});
	const [isLiked, setIsLiked] = useState([]);
	const [isDisliked, setIsDisliked] = useState(false);
	const auth = useAuth();

	console.log("only auth ", auth);


//	const [heartButton, setHeartButton] = useState(false);
//const { id } = useParams();
	
	const getAllTravels = async () => {
		const response = await axios.get("/api/travels")
		setTravels(response.data)
	}

	useEffect(() => {
		getAllTravels()
	}, [])

	
const handleLike = async (travelId) => {
	const response = await axios.put(`/api/users/like/${auth.currentUser._id}`, {isFavorite: travelId})
//	setIsLiked(travels.map(travel => travel._id === travelId ? {...travel} : travel))
// {...travel, isLiked: true} : travel
	console.log(response)
	const newTravels = travels.filter(travel => travel._id !== travelId)
	setTravels(newTravels)
	console.log(isLiked)
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

	const handleEditTravel = async (id , e) => {
		e.preventDefault()
		const { data } = await axios.put(`/api/travels/edit/${id}`, editTravel)
		setEditTravel(data)
		setEditMode(false)
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
					{/* <TinderCard className="swipe" key={travel.id} preventSwipe={['up', 'down']}>  */}
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
						<Button onClick={() => setEditMode(!editMode)}>Edit</Button>
						<Button onClick={() => handleDelete(travel._id)}>Delete</Button>
						</Box>
					
						</>
					)
				})}


				{isLiked && 
				(<>
					<h1>You liked this travel</h1>
					<TravelCard className="usercard"
						destination={isLiked.destination}
						route={isLiked.route}
						origin={isLiked.origin}
						budget={isLiked.budget}
						initialDate={isLiked.initialDate}
						finalDate={isLiked.finalDate}
						typeTravel={isLiked.typeTravel}
						images={isLiked.images}
						_id = {isLiked._id}
						/>
				</>)
				
				
				
				}

{editMode && (
	<TravelEditForm
		travel={editTravel}
		onChange={onChange}
		onSubmit={() => handleEditTravel(editTravel._id)}
		destination = {editTravel.destination}
		route = {editTravel.route}
		origin = {editTravel.origin}
		budget = {editTravel.budget}
		initialDate = {editTravel.initialDate}
		finalDate = {editTravel.finalDate}
		typeTravel = {editTravel.typeTravel}
		images = {editTravel.images}
	/>

	)}
		</div>

	);
}

export default Home;
