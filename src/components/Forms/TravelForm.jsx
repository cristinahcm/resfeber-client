import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const API_URL = 'http://localhost:5005';

const TravelForm = () => {
  const [travel, setTravel] = useState({
    destination: "",
    route: "",
    budget: "",
    initialDate: "",
    finalDate: "",
    type: ["Eco, Family, Solo, Friends, Only Women"],
    images: [],
  });
  const [type, setType] = React.useState('');

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
      const response = await axios.post(`${API_URL}/api/travels/upload`, travel)
        //headers: {
         //Authorization: `Bearer ${token}`,
        //},
      
      console.log(travel);
      navigate("/"); }
      catch(err){console.log(err)}
   
  }
  return (
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="container">
      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="destination"
          label="Destination"
          name="destination"
          placeholder="Enter destination"
          onChange={handleChange}
        />
        <TextField
          required
          id="route"
          label="Route"
          name="route"
          placeholder="Describe the route"
          onChange={handleChange}
        />
        <TextField
          required
          id="origin"
          label="Origin"
          name="origin"
          placeholder="Origin"
          onChange={handleChange}
        />
        <TextField
        required
        id="budget"
        label="Budget"
        name="budget"
        placeholder="Budget"
        onChange={handleChange}
      />
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
          <label htmlFor="typeTravel">Type</label>
          <select name="typeTravel" className="form-select" id="typeTravel">
            <option value="Eco">Eco</option>
            <option value="Family">Family</option>
            <option value="Friends">Friends</option>
            <option value="Only Women">Only Women</option>
            <option value="Solo">Solo</option>
          </select>
        </div>
        <TextField
        id="images"
        label="Images"
        name="images"
        placeholder="Images"
        onChange={handleChange}
      />
      <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </Box>
  );

}

export default TravelForm;