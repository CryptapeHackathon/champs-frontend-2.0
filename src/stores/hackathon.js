import { observable, action, computed } from 'mobx';
import axios from 'axios';

class HackathonStore {
  @observable
  hackathons = [];

  @action
  init() {
    axios
      .get(
        'https://easy-mock.com/mock/5b790998de86980870733436/example/hackathons'
      )
      .then(response => {
        let currentHackathons = response.data.data.hackathons;
        this.hackathons = currentHackathons;
        console.log('Number of current hackathons: ' + this.hackathons.length);
        console.log('current hackathons ', this.hackathons);
        console.log('hackathon store updated.');
      });
  }
}

export default HackathonStore;
