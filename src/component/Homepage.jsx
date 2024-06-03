import React from 'react';
import background1 from './Asserts/6.gif';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage.css'; 
import { Link } from 'react-router-dom';


const Homepage = () => {
  const divStyle = {
    backgroundImage: `url(${background1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
  };

  return (
    <div style={divStyle}>
      <Header />
      <div className="d-flex justify-content-center align-items-center" style={{ height: 'calc(100vh - 66px)' }}>
        <div style={{ textAlign: 'center', marginTop: '25%' }}>
          <Link to = {'/games'}>
          <button className="m-2 p-2 fs-6 fw-lighter border border-white glow-on-click">View Games</button>
          </Link>
          <Link to = {'/gameplay2'}>
          <button className="m-2 p-2 fs-6 fw-lighter border border-white glow-on-click">Instructions</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
