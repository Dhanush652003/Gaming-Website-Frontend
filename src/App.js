import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import Games from './component/Games';
import Gameplay2 from './component/Gameplay2';
import Aboutus from './component/Aboutus';
import News from './component/News';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/games' element = {<Games/>} />
        <Route path='/gameplay2' element = {<Gameplay2/>} />
        <Route path='/about' element= {<Aboutus/>}/>
        <Route path='/news' element={<News/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
