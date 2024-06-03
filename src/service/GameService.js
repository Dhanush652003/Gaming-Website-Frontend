import axios from 'axios';

class GameService {
  aboutus() {
    return axios.get('http://localhost:8080/aboutus');
  }

  getGame1Text() {
    return axios.get('http://localhost:8080/game1');
  }

  getGame2Text() {
    return axios.get('http://localhost:8080/game2');
  }

  getGame3Text() {
    return axios.get('http://localhost:8080/game3');
  }

  getUpdate1Text(){
    return axios.get('http://localhost:8080/update1');
  }

  getUpdate2Text(){
    return axios.get('http://localhost:8080/update2');
  }

  getUpdate3Text(){
    return axios.get('http://localhost:8080/update3');
  }
}

const game = new GameService();
export default game;
