import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



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
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));


  const navigate = useNavigate();
  const handleChange = (e) => {
    setTravel({
      ...travel,
      [e.target.name]: e.target.value,
    });
    setTypeTravel(e.target.value);
    setValue(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(travel);

      const response = await axios.post(`${API_URL}/api/travels/upload`, travel)
      //headers: {
      //Authorization: `Bearer ${token}`,
      //},

      console.log(travel);
      navigate("/");
    }
    catch (err) { console.log(err) }

  }
  return (

    <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className="travelform"
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
          /> <br></br>
          <TextField
            required
            id="origin"
            label="Origin"
            name="origin"
            placeholder="Origin"
            onChange={handleChange}
          /><br></br>
          <TextField
            required
            id="route"
            label="Route"
            name="route"
            placeholder="Describe the route"
            onChange={handleChange}
          /><br></br>
          <TextField
            required
            id="budget"
            label="Budget"
            name="budget"
            placeholder="Budget"
            onChange={handleChange}
          /><br></br>
          Type of travel
          <br></br>
          <Select sx={{ m: 1, width: '28ch' }}
            required
            name="typeTravel"
            id="typeTravel"
            value={typeTravel}
            label="Type"
            placeholder="Type of travel"
            onChange={handleChange}
>
            <MenuItem value="Eco">Eco</MenuItem>
            <MenuItem value="Family">Family</MenuItem>
            <MenuItem value="Friends">Friends</MenuItem>
            <MenuItem value="Solo">Solo</MenuItem>
            <MenuItem value="Only Women">Only Women</MenuItem>
          </Select>
          <br></br>
          <Stack noValidate spacing={3}>
            <TextField
              label="Initial Date"
              type="date"
              className="form-control"
              id="initialDate"
              name="initialDate"
              defaultValue="2017-05-24"
              onChange={handleChange}
            />
            <TextField
              label="Final Date"
              type="date"
              className="form-control"
              id="finalDate"
              name="finalDate"
              defaultValue="2017-05-24"
              onChange={handleChange}
            />
            <TextField
              id="images"
              label="Images"
              name="images"
              placeholder="Images"
              onChange={handleChange}
            />
          </Stack>
          <Button type="submit" variant="outlined" className="button" >
            Submit
          </Button>
        </form>
      </div>
    </Box>
  );

}

export default TravelForm;