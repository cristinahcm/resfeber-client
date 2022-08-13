import React from "react";
import TravelCard from "../components/TravelCard/TravelCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import TravelEditForm from "../components/Forms/TravelEditForm";


const API_URL = 'http://localhost:5005';

const Home = () => {
	const [travels, setTravels] = useState([]);
	const navigate = useNavigate();
	const [editMode, setEditMode] = useState(false)
	const [editTravel, setEditTravel] = useState({})
  const { id } = useParams();


const getAllTravels = async () => {
	const response = await axios.get(`${API_URL}/api/travels`)
  console.log(`get travels`, response.data)
  setTravels(response.data)
}
useEffect(() => {
  getAllTravels()
}, [])

const handleEditTodo = async (e) => {
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


const handleDelete = async (id) => {
	const { data } = await axios.delete(`${API_URL}/api/travels/delete/${id}`)
	const newTravels = travels.filter(travel => travel.id !== id)
	setTravels(newTravels)
	setTimeout(() => navigate("/"), 1000)
}


	return (
		<div>
	{travels.map((travel) => {
					console.log(travel)
					console.log(travel._id)
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
						//type={travel.type}
						deleteTravel = {() => handleDelete(travel._id)}
						_id = {travel._id}
						/>
						<button onClick={() => setEditMode(!editMode)}>Edit travel</button>
						</>
					)
				})}

{editMode && (
	<TravelEditForm
		travel={editTravel}
		onChange={onChange}
		onSubmit={handleEditTodo}
	/>

	)}
		</div>

	)};
}

export default Home;
