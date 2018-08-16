import { observable, action } from 'mobx';

export default class UserStore {
  @observable
  address = '';

  @observable
  name = '';

  @action
  async init() {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve({ address: '0xfffff', name: 'yjy' });
      }, 1000);
    });

    this.address = data.address;
    this.name = data.name;
  }
}
