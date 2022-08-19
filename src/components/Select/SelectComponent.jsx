import React from "react";
import { Avatar } from "@mui/material";
import Card from "@mui/material/Card";
import Box from "@mui/system/Box";
import { fontSize } from "@mui/system";
import { generateRandomLetter } from "../utils/utils";


// React Component to display individual item
const SelectComponent = ({ name, interests }) => (
  <div className="cards-search">
    <Avatar sx={{ bgcolor:"#bae2f4", width:"30px", height:"30px", fontSize:"1rem" }}>
    {generateRandomLetter()}
      </Avatar>
      <Box className="name-search">{name}</Box>

  </div>
);

export default SelectComponent;