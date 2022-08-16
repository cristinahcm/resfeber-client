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
    typeTravel: "",
    images: [],
  });
  const [typeTravel, setTypeTravel] = React.useState('');


  const navigate = useNavigate();
  const handleChange = (e) => {
    setTravel({
      ...travel,
      [e.target.name]: e.target.value,
    });
    setTypeTravel(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      console.log(travel);

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
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          name="typeTravel"
          labelId="demo-simple-select-label"
          id="typeTravel"
          value={typeTravel}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value="Eco">Eco</MenuItem>
          <MenuItem value="Family">Family</MenuItem>
          <MenuItem value="Friends">Friends</MenuItem>
          <MenuItem value="Solo">Solo</MenuItem>
          <MenuItem value="Only Women">Only Women</MenuItem>
        </Select>
        
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