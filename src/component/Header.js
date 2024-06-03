import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Header.css'; 

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily:'Fantasy' }}>
            Tencent Games
          </Typography>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                style: {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: 'whitesmoke'
                },
              }}
            >
              <MenuItem onClick={handleClose}>About</MenuItem>
              <MenuItem onClick={handleClose}>Gallery</MenuItem>
              <MenuItem onClick={handleClose}>News</MenuItem>
              <MenuItem onClick={handleClose}>Contact Us</MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button
              color="inherit"
              onClick={() => console.log('About clicked')}
              className="button-hover" 
            >
              About
            </Button>
            <Button
              color="inherit"
              onClick={() => console.log('Gallery clicked')}
              className="button-hover" 
            >
              Gallery
            </Button>
            <Button
              color="inherit"
              onClick={() => console.log('News clicked')}
              className="button-hover" 
            >
              News
            </Button>
            <Button
              color="inherit"
              onClick={() => console.log('Contact Us clicked')}
              className="button-hover" 
            >
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
