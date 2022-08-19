import React from "react";
import { Avatar } from "@mui/material";

// React Component to display individual item
const SelectComponent = ({ name, interests }) => (
  <div className="item-container">
    <div>
      <Avatar />
      <span className="item-label">Name:</span>
      {name}
    </div>
    <div>
      <span className="item-label">Interests:</span>
      {interests}
    </div>
  </div>
);

export default SelectComponent;