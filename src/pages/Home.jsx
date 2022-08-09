import React from "react";
import TravelCard from "../components/TravelCard/TravelCard";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = 'http://localhost:5005';

const Home = () => {

	const [travels, setTravels] = useState([]);

const getAllTravels = async () => {
	const response = await axios.get(`${API_URL}/api/travels`)
  console.log(response.data)
  setTravels(response.data)
}
useEffect(() => {
  getAllTravels()
}, [])

	return (
		<div>
	{travels.map((travel) => {
					console.log(travel)
					return (
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
						/>
					)
				})}
		</div>
	);
};

export default Home;
