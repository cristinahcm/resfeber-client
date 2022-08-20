import React from "react";
import TravelCard from "../components/TravelCard/TravelCard";
import axios from "../context/axiosInstance.js";
import { useEffect, useState } from "react";
import "./Home.css";
import useAuth from "../context/auth/useAuth";



const Home = () => {
	const [travels, setTravels] = useState([]);
	const [isDisliked, setIsDisliked] = useState(false);
	const auth = useAuth();


	
	const getAllTravels = async () => {
		const response = await axios.get("/api/travels")
		setTravels(response.data)
	}

	useEffect(() => {
		getAllTravels()
	}, [])

	
const handleLike = async (travelId) => {
	const response = await axios.put(`/api/users/like/${auth.currentUser._id}`, {isFavorite: travelId});
	const newTravels = travels.filter(travel => travel._id !== travelId)
	setTravels(newTravels);

} 


const handleDislike =  (travelId) => {
	const newTravels = travels.filter(travel => travel._id !== travelId)
	setTravels(newTravels)
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
				<hr /> <hr />
				<hr /> <hr />
				
						</>
					)
				})}

			

		</div>

	);
}

export default Home;
