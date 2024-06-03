import axios from 'axios';

class GameService {
  aboutus() {
    return axios.get('http://localhost:8080/aboutus');
  }
}

const game = new GameService();
export default game;
