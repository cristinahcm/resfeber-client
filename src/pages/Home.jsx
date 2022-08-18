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




const Home = () => {
	const [travels, setTravels] = useState([]);
	const navigate = useNavigate();
	const [editMode, setEditMode] = useState(false);
	const [editTravel, setEditTravel] = useState({});
  //const { id } = useParams();
	
	const getAllTravels = async () => {
		const response = await axios.get("/api/travels")
		setTravels(response.data)
	}

	useEffect(() => {
		getAllTravels()
	}, [])


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
			const newTravels = travels.filter(travel => travel.id !== id)
			setTravels(newTravels)
			setTimeout(() => navigate("/"), 1000)
			}
		}
		
		return (
			<div className="cards">
	{travels.map((travel) => {
	
					return (
						<>
						<TravelCard
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
						<Button onClick={() => setEditMode(!editMode)}>Edit</Button>
						<Button onClick={() => handleDelete(travel._id)}>Delete</Button>
						</Box>
						</>
					)
				})}

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
