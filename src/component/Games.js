import React from 'react';
import Button from '@mui/material/Button';
import img1 from './Asserts/img10.jpg';
import img2 from './Asserts/img11.jpg';
import img3 from './Asserts/img12.jpg';
import img4 from './Asserts/img13.jpg';
import img5 from './Asserts/img14.jpg';
import img6 from './Asserts/img15.jpg';
import img7 from './Asserts/img7.jpg';
import img8 from './Asserts/img8.jpg';
import img9 from './Asserts/img9.jpg';
import { Link } from 'react-router-dom';
import './Games.css'

const GamesBottom = () => {
  return (
    <div className="container-fluid bg-black text-center py-5">
        <div className='text-start fw-bolder d-flex justify-content-between' style={{ fontSize: '250%', marginBottom: '2%', color:'white' }}>
        Tencent Games
        <Link to ='/'>
        <Button variant="contained" className='bg-warning'>Home Page</Button>
        </Link>
      </div>
      <div className="row justify-content-center">
        <div className="col-4 mb-4">
          <div className="img-container">
            <img src={img1} alt="img1" className="img-fluid grid-image" />
          </div>
        </div>
        <div className="col-4 mb-4">
          <div className="img-container">
            <img src={img2} alt="img2" className="img-fluid grid-image" />
          </div>
        </div>
        <div className="col-4 mb-4">
          <div className="img-container">
            <img src={img3} alt="img3" className="img-fluid grid-image" />
          </div>
        </div>
        <div className="col-4 mb-4">
          <div className="img-container">
            <img src={img4} alt="img4" className="img-fluid grid-image" />
          </div>
        </div>
        <div className="col-4 mb-4">
          <div className="img-container">
            <img src={img5} alt="img5" className="img-fluid grid-image" />
          </div>
        </div>
        <div className="col-4 mb-4">
          <div className="img-container">
            <img src={img6} alt="img6" className="img-fluid grid-image" />
          </div>
        </div>
        <div className="col-4 mb-4">
          <div className="img-container">
            <img src={img7} alt="img7" className="img-fluid grid-image" />
          </div>
        </div>
        <div className="col-4 mb-4">
          <div className="img-container">
            <img src={img8} alt="img8" className="img-fluid grid-image" />
          </div>
        </div>
        <div className="col-4 mb-4">
          <div className="img-container">
            <img src={img9} alt="img9" className="img-fluid grid-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesBottom;
