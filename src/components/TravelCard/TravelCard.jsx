import React, { useEffect, useState } from "react"
import axios from "axios"
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Box } from "@mui/system";

const API_URL = 'http://localhost:5005';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const TravelCard = ({
  owner,
  destination,
  route,
  origin,
  budget,
  initialDate,
  finalDate,
  typeTravel,
  handleLike,
  handleDislike,
  images,
  _id
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  return (
    <Card sx={{ maxWidth: 345}}>
      
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"MediumAquaMarine" }} aria-label="recipe">
            {generateRandomLetter()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title=  {destination}
        />
        <Box className="dates">
          Initial Date: {initialDate}
        </Box>
        <Box className="dates">
          Final Date: {finalDate}
        </Box>
      <CardMedia
        component="img"
        height="194"
        image="./images/travel.jpg"
        alt="Destination image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" fontSize="14px" fontWeight="500">
          {`Origin: ${origin}`}
        </Typography>
        <Typography variant="body3" color="text.secondary" fontSize="14px" fontWeight="500">
          {`Budget: ${budget}`}
        </Typography>
        <br></br>
        <Typography variant="body4" color="text.secondary" fontSize="14px" fontWeight="500">
          {`Type of travel: ${typeTravel}`}
        </Typography>
        
      </CardContent>
      <CardActions sx={{display:'flex',justifyContent:'space-around' }}>
        
        <IconButton aria-label="reject"  onClick = {handleDislike}>
        <CloseOutlinedIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <IconButton aria-label="add to favorites" onClick = {handleLike} >
        <FavoriteBorderOutlinedIcon  />
        </IconButton>
       
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{route}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default TravelCard;


