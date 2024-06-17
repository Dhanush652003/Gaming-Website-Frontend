import React, { useState } from 'react';
import Header from './Header';
import joystick from './Asserts/black.gif';
import { TextField, Button, Container, Box, Typography } from '@mui/material';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    console.log("form submitted")
  };

  return (
    <div>
      <Header />
      <Container
        maxWidth="false"
        disableGutters
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          background: `url(${joystick}) no-repeat center center fixed`,
          backgroundSize: 'cover',
          marginTop: '-5.1%'
        }}
      >
        <Box
          sx={{
            width: '400px',
            p: 4,
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: 3,
            borderRadius: 1,
            textAlign: 'center'
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              bgcolor: 'black',
              color: 'white',
              py: 2,
              borderRadius: '4px 4px 0 0'
            }}
          >
            Contact Us
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box mb={2}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="FeedBack"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Box>
            <Box textAlign="center">
              <Button type="submit" variant="outlined" style={{ borderColor: 'black', color: 'black' }}>
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </div>
  );
}

export default Contactus;
