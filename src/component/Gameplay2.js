import React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Link } from 'react-router-dom';
import background from './Asserts/black.gif';
import Button from '@mui/material/Button';
import gun1 from './Asserts/Weapons/m4a1.png';
import gun2 from './Asserts/Weapons/m10.png';
import gun3 from './Asserts/Weapons/gun1.png';
import gun4 from './Asserts/Weapons/gun2.png';
import gun5 from './Asserts/Weapons/gun3.png';
import pic1 from './Asserts/Characters/pic1.png';
import pic2 from './Asserts/Characters/pic2.png';
import pic3 from './Asserts/Characters/pic3.png';
import pic4 from './Asserts/Characters/pic4.png';
import pic5 from './Asserts/Characters/pic5.png';
import video from './Asserts/game.webm'
import './Gameplay2.css'

const Gameplay2 = () => {
  const divStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    height: '280vh',
    width: '100%',
  };
  const weapon = "Powerful weapons scattered across the map to arm players for intense battles in the battleground. Each gun offers unique advantages and strategies, enhancing the thrill of survival. Guns are the primary tools of engagement in our battle royale universe. From pistols to sniper rifles, each firearm offers a distinct advantage, catering to different playstyles and situations. Players scavenge for guns across the sprawling map, ensuring they are well-equipped for every encounter. With precise aiming and strategic weapon selection, victory can be seized amidst the chaos of battle."
  const char = "Characters are the heart and soul of the action-packed narrative, each with their own unique backstory, abilities, and motivations. From seasoned warriors to enigmatic renegades, these diverse personalities bring depth and intrigue to the battlefield, shaping the course of epic confrontations. With every match, players embody these characters, immersing themselves in a world where skill, strategy, and survival instincts reign supreme. As they engage in fierce skirmishes and daring escapades, the characters evolve, leaving an indelible mark on the ever-evolving landscape of battle royale gaming."
    return (
      <div className="container-fluid text-white" style={divStyle}>
        <div className="row">
          <div className="col-12 text-center py-3">
            <div className="fw-bold" style={{ fontSize: '2.5rem' }}>
              Tencent Games
            </div>
          </div>
          <div className="col-12 text-start py-3">
            <div className="fw-bold" style={{ fontSize: '1.5rem' }}>
              <FiberManualRecordIcon style={{marginTop:'-0.4%'}}/> Guns
            </div>
            <div className="text-white fw-bold mt-3 ms-4 me-3">
              {weapon}
            </div>
          </div>
          <div className="row justify-content-center mt-3 mb-3">
            <div className="col-md-2">
              <img src={gun1} alt="Gun 1" className="img-fluid" />
            </div>
            <div className="col-md-2">
              <img src={gun2} alt="Gun 2" className="img-fluid" />
            </div>
            <div className="col-md-2">
              <img src={gun3} alt="Gun 3" className="img-fluid" />
            </div>
            <div className="col-md-2">
              <img src={gun4} alt="Gun 4" className="img-fluid" />
            </div>
            <div className="col-md-2">
              <img src={gun5} alt="Gun 5" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="col-12 text-start py-3">
            <div className="fw-bold" style={{ fontSize: '1.5rem' }}>
              <FiberManualRecordIcon style={{marginTop:'-0.4%'}} /> Characters
            </div>
            <div className="text-white fw-bold mt-3 ms-4 me-3">
            {char}
            </div>
          </div>
          <div className="row justify-content-center mt-3 mb-3">
            <div className="col-md-2">
              <img src={pic1} alt="Gun 1" className="img-fluid" />
            </div>
            <div className="col-md-2">
              <img src={pic2} alt="Gun 2" className="img-fluid" />
            </div>
            <div className="col-md-2">
              <img src={pic3} alt="Gun 3" className="img-fluid" />
            </div>
            <div className="col-md-2">
              <img src={pic4} alt="Gun 4" className="img-fluid" />
            </div>
            <div className="col-md-2">
              <img src={pic5} alt="Gun 5" className="img-fluid" />
            </div>
          </div>
          <div className="row justify-content-center mt-3 mb-3">
          <div className="fw-bold" style={{ fontSize: '1.5rem' }}>
             <FiberManualRecordIcon style={{marginTop:'-0.4%'}} /> Sample Gameplay
         </div>
            <div className="col-md-12 text-center mt-5"> 
              <video autoPlay className="video-fluid">
                <source src={video} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className='mt-3 mb-5 col-12 text-center py-3'>
          <Link to ='/'>
        <Button variant="contained" className='bg-warning'>Home Page</Button>
        </Link>
        </div>
        </div>
    );
  };
  
  export default Gameplay2;

