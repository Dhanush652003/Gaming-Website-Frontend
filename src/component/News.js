import React, { useEffect, useState } from 'react';
import Header from './Header';
import game1 from './Asserts/img11.jpg';
import game2 from './Asserts/img12.jpg';
import game3 from './Asserts/img15.jpg';
import update1 from './Asserts/img14.jpg';
import update2 from './Asserts/img13.jpg';
import update3 from './Asserts/img10.jpg';
import gameService from '../service/GameService';
import Footer from './Footer';
import './News.css';

const News = () => {
  const [gameText, setGameText] = useState('');
  const [updateText, setUpdateText] = useState('');

  useEffect(() => {
    gameService.getGameText().then(response => setGameText(response.data));
    gameService.getUpdateText().then(response => setUpdateText(response.data));
  }, []);

  return (
    <div className='news-container'>
      <Header />
      <div className="row justify-content-center">
        <div className="col-12 text-center text-white fw-bolder mt-3">
          <h2>Upcoming Games</h2>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row mb-4">
          <div className="col-md-6">
            <img src={game1} alt="Game 1" className="img-fluid" />
          </div>
          <div className="col-md-6 text-white d-flex align-items-center">
            <p>{gameText}</p>
          </div>
        </div>
        <div className="row mb-4 flex-md-row-reverse">
          <div className="col-md-6">
            <img src={game2} alt="Game 2" className="img-fluid" />
          </div>
          <div className="col-md-6 text-white d-flex align-items-center">
            <p>{gameText}</p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6">
            <img src={game3} alt="Game 3" className="img-fluid" />
          </div>
          <div className="col-md-6 text-white d-flex align-items-center">
            <p>{gameText}</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 text-center text-white fw-bolder mt-3">
          <h2>Updates And Bug Fixes</h2>
        </div>
        <div className="container mt-4">
        <div className="row mb-4">
          <div className="col-md-6">
            <img src={update1} alt="update 1" className="img-fluid-update" />
          </div>
          <div className="col-md-6 text-white d-flex align-items-center">
            <p>{updateText}</p>
          </div>
        </div>
        <div className="row mb-4 ">
          <div className="col-md-6">
            <img src={update2} alt="update 2" className="img-fluid-update" />
          </div>
          <div className="col-md-6 text-white d-flex align-items-center">
            <p>{updateText}</p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6">
            <img src={update3} alt="update 3" className="img-fluid-update" />
          </div>
          <div className="col-md-6 text-white d-flex align-items-center">
            <p>{updateText}</p>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default News;

