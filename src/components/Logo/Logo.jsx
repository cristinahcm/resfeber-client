import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  return (
    <AppBar position="static">
      
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
              padding:'20px',
            }}
          >
            <div className='logo'>
            RESFEBER
            </div>
            
          </Typography>
        
      
    </AppBar>
  );
};
export default ResponsiveAppBar;
