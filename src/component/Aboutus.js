import React from 'react';
import Header from './Header';
import Footer from './Footer';
import joystick from './Asserts/black.gif'; 
import logo from './Asserts/About/logo.png';
import './Aboutus.css';

const Aboutus = () => {
  const divStyle = {
    backgroundImage: `url(${joystick})`,
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
  };

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
            <p className="justified-text">Tencent Gaming is a world-leading game developer and publisher, dedicated to creating high-quality, innovative gaming experiences for players worldwide. Our mission is to bring joy and entertainment through our diverse portfolio of games, ranging from mobile to PC and console platforms. With a commitment to excellence and a passion for gaming, we strive to push the boundaries of the industry and connect people through the power of play.At Tencent Gaming, we are passionate about creating immersive gaming experiences that captivate players around the world. Founded with the vision of pushing the boundaries of interactive entertainment, our team of dedicated professionals works tirelessly to innovate and deliver top-notch games across various genres. Our portfolio boasts a diverse range of titles, from fast-paced action games to deeply engaging role-playing adventures, each crafted with the utmost attention to detail and quality.</p>
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
