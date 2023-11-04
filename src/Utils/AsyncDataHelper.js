import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import {Actions, store} from '@Redux';
const KEYS = Object.freeze({
  USER: 'userData',
});

let userData = {
  data: {},
};

class AsyncDataHelper {
  constructor() {}
  static keys = KEYS;

  static store = {
    [KEYS.USER]: {},
  };

  static save(key, data) {
    this.store[key] = data;
    Object.freeze(this.store);
  }
  static setUserData(data) {
    userData.data = data;
    Object.freeze(userData);
    console.log(userData.data);
    this.save(this.keys.USER, data);
  }
  static get userData() {
    //console.log(store.getState());
    // let response = null;
    // AsyncStorage.getItem('userData')
    //   .then(res => {
    //     this.save(this.keys.USER, JSON.parse(res));
    //     response = res;
    //   })
    //   .catch(error => console.log(error));
    return this.store[this.keys.USER];
  }

  static async getUserToken() {
    const token = AsyncStorage.getItem('token');
    return token;
  }
}
export default AsyncDataHelper;
