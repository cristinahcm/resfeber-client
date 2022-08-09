import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const API_URL = 'http://localhost:5005';

const TravelForm = () => {
  const [travel, setTravel] = useState({
    location: "",
    route: "",
    budget: "",
    initialDate: "",
    finalDate: "",
    type: "",
    images: [],
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setTravel({
      ...travel,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post(`${API_URL}/api/travels`, travel , payload , {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(travel);
      navigate("/travels"); }
      catch(err){console.log(err)}
   
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            placeholder="Enter location"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="route">Route</label>
          <input
            type="text"
            className="form-control"
            id="route"
            name="route"
            placeholder="Enter route"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="budget">Budget</label>
          <input
            type="text"
            className="form-control"
            id="budget"
            name="budget"
            placeholder="Enter budget"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="initialDate">Initial Date</label>
          <input
            type="date"
            className="form-control"
            id="initialDate"
            name="initialDate"
            placeholder="Enter initial date"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">  
          <label htmlFor="finalDate">Final Date</label>
          <input
            type="date" 
            className="form-control"  
            id="finalDate"  
            name="finalDate"
            placeholder="Enter final date"
            onChange={handleChange} 
          />  
        </div>
        <div className="form-group">  
          <label htmlFor="type">Type</label>
          <input  
            type="text" 
            className="form-control"  
            id="type"
            name="type"
            placeholder="Enter type"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="images">Images</label>
          <input
            type="text"
            className="form-control"
            id="images"
            name="images"
            placeholder="Enter images"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );

}

export default TravelForm;