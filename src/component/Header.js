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
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; 

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const location = useLocation();

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
              <Link to='/'><MenuItem sx={{ color: location.pathname === '/' ? 'rgba(255, 157, 0,0.6)' : 'white', textDecoration: 'none' }}>Home Page</MenuItem></Link>
              <Link to='/about'><MenuItem sx={{ color: location.pathname === '/about' ? 'rgba(255, 157, 0,0.6)' : 'white', textDecoration: 'none' }}>About us</MenuItem></Link>
              <Link to='/news'><MenuItem sx={{ color: location.pathname === '/news' ? 'orargba(255, 157, 0,0.6)nge' : 'white', textDecoration: 'none' }}>News</MenuItem></Link>
              <Link to='/feedback'><MenuItem sx={{ color: location.pathname === '/feedback' ? 'rgba(255, 157, 0,0.6)' : 'white', textDecoration: 'none' }}>Contact Us</MenuItem></Link>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link to='/'>
              <Button
                className="button-hover"
                style={{
                  color: 'white',
                  marginRight: '5px',
                  backgroundColor: location.pathname === '/' ? 'rgba(255, 157, 0,0.6)' : 'transparent',
                  transition: 'background-color 0.3s ease'
                }}
              >
                Home Page
              </Button>
            </Link>
            <Link to='/about'>
              <Button
                className="button-hover"
                style={{
                  color: 'white',
                  marginRight: '5px',
                  backgroundColor: location.pathname === '/about' ? 'orgba(255, 157, 0,0.6)range' : 'transparent',
                  transition: 'background-color 0.3s ease'
                }}
              >
                About us
              </Button>
            </Link>
            <Link to='/news'>
              <Button
                className="button-hover"
                style={{
                  color: 'white',
                  marginRight: '5px',
                  backgroundColor: location.pathname === '/news' ? 'rgba(255, 157, 0,0.6)' : 'transparent',
                  transition: 'background-color 0.3s ease'
                }}
              >
                News
              </Button>
            </Link>
            <Link to='/feedback'>
              <Button
                className="button-hover"
                style={{
                  color: 'white',
                  marginRight: '5px',
                  backgroundColor: location.pathname === '/feedback' ? 'rgba(255, 157, 0,0.6)' : 'transparent',
                  transition: 'background-color 0.3s ease'
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