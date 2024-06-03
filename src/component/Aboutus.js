import React, { useEffect, useState } from 'react';
import Header from './Header';
import game from '../service/GameService';
import joystick from './Asserts/About/joystick.jpg'; 
import logo from './Asserts/About/logo.png';
import Footer from './Footer';
import './Aboutus.css'; 

const Aboutus = () => {
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
    <div className="aboutus-container position-relative container-fluid"> 
      <div className="header-container">
        <Header />
      </div>
      <div className="image-container">
        <img src={joystick} alt="Joystick" className="img-fluid custom-img" />
      </div>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-12 text-center text-white fw-bolder">
            <h2>About Us</h2>
          </div>
        </div>
        <div className="row mt-3 mb-10">
          <div className="col-md-6 text-white fw-bold">
            <p>{aboutUsContent}</p>
          </div>
          <div className="col-md-6 text-center">
            <img src={logo} alt="Logo" className="img-fluid logo-img" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Aboutus;
