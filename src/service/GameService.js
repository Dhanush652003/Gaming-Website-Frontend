import axios from 'axios';

class GameService {
  aboutus() {
    return axios.get('http://localhost:8080/aboutus');
  }

  getGameText() {
    return axios.get('http://localhost:8080/game');
  }

  getUpdateText(){
    return axios.get('http://localhost:8080/update');
  }

  contactus(formData){
    return axios.post('http://localhost:8080/contactus',formData)
  }
}

const game = new GameService();
export default game;
