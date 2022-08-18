import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  return (
    <AppBar position="static">
          <Link to="/">
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              display: 'flex',
              fontFamily: 'Inter',
              fontWeight: 800,
              justifyContent: 'center',
              backgroundColor: 'white',
              color:'#212121',
              padding:'15px',
            }}
          >
            <div className='logo'>
            RESFEBER
            </div>
            
          </Typography>
        </Link>
      
    </AppBar>
  );
};
export default ResponsiveAppBar;
