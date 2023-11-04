import AsyncStorage from '@react-native-async-storage/async-storage';
import APIKit from './crypto';

export default class APIClient {
  static setAuthToken = token => {
    APIKit.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  static Token = async () => {
    try {
      await AsyncStorage.getItem('userAuthToken').then(token => {
        return token;
      });
    } catch (error) {
      return null;
    }
  };

  static postAPI(url, params) {
    console.log('params in post api ', params);
    return new Promise((resolve, reject) => {
      APIKit.post(url, params)
        .then(response => {
          console.log('=====', response);
          // !!response?.data?.auth && this.setAuthToken(response.data.auth.token);
          resolve(response);
        })
        .catch(error => reject(error));
    });
  }

  static getAPI(url) {
    console.log('its me', url);
    return new Promise((resolve, reject) => {
      APIKit.get(url)
        .then(response => {
          console.log('response is ', response);
          resolve(response);
        })
        .catch(error => {
          console.log('error message ', error);
          reject(error);
        });
    });
  }

  static deleteAPI(url) {
    return new Promise((resolve, reject) => {
      APIKit.delete(url)
        .then(response => {
          resolve(response);
        })
        .catch(error => reject(error));
    });
  }

  static putAPI(url, params) {
    return new Promise((resolve, reject) => {
      APIKit.put(url, params)
        .then(response => {
          resolve(response);
        })
        .catch(error => reject(error));
    });
  }

  static postSignedUrl(url) {
    return new Promise((resolve, reject) => {
      APIKit.get(url)
        .then(response => {
          resolve(response);
        })
        .catch(error => reject(error));
    });
  }
}
