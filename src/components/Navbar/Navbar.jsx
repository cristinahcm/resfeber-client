import useAuth from "../../context/auth/useAuth"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import {Link} from 'react-router-dom';


export default function BottomAppBar({handleHeartButton}) {
  return (
    <React.Fragment>
      <AppBar position="fixed" sx={{ top: 'auto', bottom: -20, }}>
        <Toolbar sx={{backgroundColor:'white', display: 'flex', justifyContent:'center'}}>
          <IconButton>
            <Link to="/home"><HomeOutlinedIcon sx={{color:'#212121', fontSize:'65px', paddingRight:'20px', paddingLeft:'20px'}}/></Link>
            <Link to="/search"><SearchRoundedIcon sx={{color:'#212121', fontSize:'65px', paddingRight:'20px', paddingLeft:'20px'}}/></Link>
            <Link to="/createTravel"><ControlPointRoundedIcon sx={{color:'#212121', fontSize:'65px', paddingRight:'20px', paddingLeft:'20px'}}/></Link>
            <Link to="/favorites"><FavoriteBorderRoundedIcon sx={{color:'#212121', fontSize:'65px', paddingRight:'20px', paddingLeft:'20px'}} onCLick={handleHeartButton}  /></Link>
            <Link to="/profile"><PersonOutlineRoundedIcon sx={{color:'#212121', fontSize:'65px', paddingRight:'20px', paddingLeft:'20px'}}/></Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

