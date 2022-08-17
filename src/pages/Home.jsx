import React from "react";
import TravelCard from "../components/TravelCard/TravelCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import TravelEditForm from "../components/Forms/TravelEditForm";
import "./Home.css";


const API_URL = 'http://localhost:5005';

const Home = () => {
	const [travels, setTravels] = useState([]);
	const navigate = useNavigate();
	const [editMode, setEditMode] = useState(false)
	const [editTravel, setEditTravel] = useState({})
    //const { id } = useParams();
	
	
	const getAllTravels = async () => {
		const response = await axios.get(`${API_URL}/api/travels`)
		console.log(`get travels`, response.data)
		setTravels(response.data)
	}
	useEffect(() => {
		getAllTravels()
	}, [])

	const handleEditTravel = async (id , e) => {
		e.preventDefault()
		console.log(editTravel)
		const { data } = await axios.put(`${API_URL}/api/travels/edit/${id}`, editTravel)
		console.log(data)
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
			const { data } = await axios.delete(`${API_URL}/api/travels/delete/${id}`)
			const newTravels = travels.filter(travel => travel.id !== id)
			setTravels(newTravels)
			setTimeout(() => navigate("/"), 1000)
			}
		}
		
		console.log('render')
		return (
			<div className="cards">
	{travels.map((travel) => {
		console.log(travel)
		console.log(travel._id)
	
					return (
						<>
						<TravelCard 
					//	owner = {travel.owner.name}
						destination={travel.destination}
						route={travel.route}
						origin={travel.origin}
						budget={travel.budget}
						initialDate={travel.initialDate}
						finalDate={travel.finalDate}
						typeTravel={travel.typeTravel}
						images={travel.images}
						//type={travel.type}
						_id = {travel._id}
						/>
						<button onClick={() => setEditMode(!editMode)}>Edit</button>
						<button onClick={() => handleDelete(travel._id)}>Delete</button>

						</>
					)
				})}

{editMode && (
	<>
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
	</>

	)}
		</div>

	);
}

export default Home;
