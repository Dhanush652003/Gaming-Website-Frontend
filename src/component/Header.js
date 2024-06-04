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
import { Link } from 'react-router-dom';
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
              <Link to = '/'><MenuItem>Home Page</MenuItem> </Link>
              <Link to = '/about'><MenuItem>About us</MenuItem></Link>
              <Link to = '/news'><MenuItem>News</MenuItem></Link>
              <Link to = '/feedback'><MenuItem>Contact Us</MenuItem></Link>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Link to ='/'>
            <Button
              className="button-hover" 
              style={{
                color:'white'
              }}
            >
              Home Page
            </Button>
            </Link>
            <Link to ='/about'>
            <Button
              className="button-hover" 
              style={{
                color:'white'
              }}
            >
              About us
            </Button>
            </Link>
            <Link to ='/news'>
            <Button
              className="button-hover" 
              style={{
                color:'white'
              }}
            >
              News
            </Button>
            </Link>
            <Link to='/feedback'>
            <Button
              className="button-hover" 
              style={{
                color:'white'
              }}
            >
              FeedBack
            </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
