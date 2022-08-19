import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal( {open , handleClose, handleSubmit, handleChange}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Travel
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
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
          <InputLabel id="typeoftravel">Type of travel</InputLabel>
          <Select sx={{ m: 1, width: '28ch' }}
            required
            name="typeTravel"
            id="typeTravel"
            // value={typeTravel}
            label="Type of travel"
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

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
