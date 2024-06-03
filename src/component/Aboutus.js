import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import game from '../service/GameService';
import joystick from './Asserts/black.gif'; 
import logo from './Asserts/About/logo.png';
import './Aboutus.css';

const Aboutus = () => {
  const divStyle = {
    backgroundImage: `url(${joystick})`,
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%',
  };
  const [aboutUsContent, setAboutUsContent] = useState('');

  useEffect(() => {
    game.aboutus()
      .then(response => {
        setAboutUsContent(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the About Us content!", error);
      });
  }, []);

  return (
    <div className="aboutus-container" style={divStyle}> 
      <Header />
      <div className="container mt-3 text-white">
        <div className="row justify-content-center mb-4">
          <div className="col-12 text-center">
            <h2>About Us</h2>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 text-justify">
            <p className="justified-text">{aboutUsContent}</p>
          </div>
          <div className="col-md-6 text-center">
            <img src={logo} alt="Logo" className="img-fluid logo-img" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aboutus;
