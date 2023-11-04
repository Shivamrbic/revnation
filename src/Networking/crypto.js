import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {store} from '../Redux/store';

// export const ROOT_URL = "dev.anytimedoc.com";
// export const ROOT_URL = "http://192.168.2.244";
export const ROOT_URL = 'api.anytimedoc.com';
// const BASE_URL = `https://${ROOT_URL}/api`;
const BASE_URL = 'http://192.168.1.22:3333/api/v1';
const noAuthRequestUrls = ['/patient/login', '/patient/register'];

const encrypted = data => {
  // const encrypt = CryptoJS.AES.encrypt(JSON.stringify(data), CLIENT_SECRET_KEY); //ENC_KEY,{ iv: IV});
  console.log('........In data log', data);
  return data;
};

const queryStringToObject = queryString => {
  const pairs = queryString.substring(1).split('&');

  var array = pairs.map(el => {
    const parts = el.split('=');
    return parts;
  });

  return Object.fromEntries(array);
};

const encryptRequest = async request => {
  // const baseURL = '/api';
  // let queryParam = '';

  // if (request.url.indexOf('?') > -1) {
  //   queryParam = JSON.stringify(
  //     queryStringToObject('?' + request.url.split('?')[1].toString()),
  //   );
  //   request.url = request.url.split('?')[0];
  // } else if (request.url.indexOf('..') > -1) {
  //   request.url = request.url.split('../../')[1];
  //   var arr = request.baseURL.split('/');
  //   request.baseURL = arr[0] + '//' + arr[2];
  //   queryParam = JSON.stringify(request.params);
  // }
  // console.log('request', request);
  // const data = request.data ? JSON.stringify(request.data) : '';
  // let payload;
  // let encrypt;

  // if (queryParam) {
  //   payload = baseURL + request.url + JSON.stringify(queryParam);
  //   encrypt = encrypted(queryParam);
  //   request.params = {data: encrypt};
  // } else {
  //   payload = baseURL + request.url + data;
  //   encrypt = encrypted(request.data);
  //   if (data) {
  //     request.data = {data: encrypt};
  //   }
  // }

  // let sign = signature(payload);
  // request.headers.common['x-signature'] = sign;
  // console.log(request.headers.common);
  if (!noAuthRequestUrls.includes(request.url)) {
    const token = await AsyncStorage.getItem('userAuthToken');
    const pntoken = await AsyncStorage.getItem('pntoken');
    if (pntoken) {
      request.headers.common['x-pn-token'] = `${pntoken}`;
    }
    if (token) {
      request.headers.common.Authorization = `Bearer ${token}`;
    }
  }
  // request.headers.common['x-device-id'] =
  //   store.getState().auth.appData.appDeviceID;
  // request.headers.common['user-agent'] =
  //   store.getState().auth.appData.userAgent;
  // console.log(store.getState().auth.appData.os);
  // request.headers.common['x-platform'] = store.getState().auth.appData.os;
  // request.headers.common['x-ios-pushkittoken'] = await RNCall.getUserDefault(
  //   'pushKitToken',
  // );
  return request;
};

const handleResponse = async response => {
  if (response?.response?.status === 401) {
    AppEvents.emitUserSessionTimeout();
  }
  return Promise.reject(response);
};

const APIKit = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
});

APIKit.interceptors.request.use(encryptRequest, Promise.reject);
APIKit.interceptors.response.use(Promise.resolve, handleResponse);

export default APIKit;
