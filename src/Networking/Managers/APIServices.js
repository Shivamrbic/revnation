import {Alert, Platform, Dimensions} from 'react-native';
// import DeviceInfo from 'react-native-device-info';
import config from './Config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const QueryString = require('query-string');
// const uniqueId = DeviceInfo.getUniqueId();

//let atoken = 'MTI.VaZrHE9AOF7pLzrj_WdXxqp10JjzoFVWQI1xNNEaH8Ah6u2vE3Q5V1dpphZJ';
export const APIService = {
  meta,
  mobileVerify,
  updateUser,
  getUser,
  CheckIn,
  CheckOut,
  timeSheetList,
  attendance,
  login,
};

const baseUrl =
  config.url === 'baseurl'
    ? config.baseurl
    : config.url === 'localurl'
    ? config.localurl
    : config.url === 'ngrokurl'
    ? config.ngrokurl
    : config.url === 'sandbox'
    ? config.sandbox
    : null;

const platform = Platform.OS;

async function meta() {
  let userAgent = await AsyncStorage.getItem('userAgent');
  let pn_token = await AsyncStorage.getItem('fcmToken');
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': config.contentType,
      api_key: config.apiKey,
      'User-Agent': userAgent,
      pn_token,
    },
  };
  return fetch(baseUrl + config.endpoints.meta, requestOptions)
    .then(_handleResponse)
    .then(async data => {
      //alert(JSON.stringify(data, null, 2));
      await AsyncStorage.setItem('metaData', JSON.stringify(data));
      return data;
    });
}

function mobileVerify(phone) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': config.contentType,
    },
  };
  return fetch(baseUrl + config.endpoints.mobileverify + phone, requestOptions)
    .then(_handleResponse)
    .then(res => {
      // Alert.alert(JSON.stringify(res));
      if (!res?.isRegistered) {
        return false;
      }
      return true;
    });
}

function login(employeeid, password) {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({employee_id: employeeid, password: password}),
    headers: {
      'Content-Type': config.contentType,
      api_key: config.apiKey,
    },
  };
  return fetch(baseUrl + config.endpoints.login, requestOptions)
    .then(_handleResponse)
    .then(async res => {
      await AsyncStorage.setItem('userData', JSON.stringify(res));
      return res;
    });
}

function getUser(authToken) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': config.contentType,
      Authorization: `Bearer ${authToken}`,
    },
  };

  return fetch(baseUrl + config.endpoints.users, requestOptions)
    .then(_handleResponse)
    .then(async res => {
      await AsyncStorage.setItem('userData', JSON.stringify(res));
      return res;
    });
}

function updateUser(data, authToken) {
  const requestOptions = {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': config.contentType,
      api_key: config.apiKey,
      Authorization: 'Bearer ' + authToken,
    },
  };
  return fetch(baseUrl + config.endpoints.users, requestOptions)
    .then(_handleResponse)
    .then(async res => {
      await AsyncStorage.setItem('userData', JSON.stringify(res));
      return res;
    });
}

function timeSheetList(authToken) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': config.contentType,
      Authorization: `Bearer ${authToken}`,
    },
  };
  // console.log(
  //   'api call timesheet',
  //   baseUrl + config.endpoints.timesheet,
  //   requestOptions,
  // );
  return fetch(baseUrl + config.endpoints.timesheet, requestOptions)
    .then(_handleResponse)
    .then(res => {
      // console.log('time sheet list data ', res);
      //await AsyncStorage.setItem('userData', JSON.stringify(res));
      return res;
    });
}

async function CheckIn(authToken, projectId) {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({project_id: projectId}),
    headers: {
      'Content-Type': config.contentType,
      Authorization: `Bearer ${authToken}`,
    },
  };
  console.log(
    'check in data id',
    baseUrl + config.endpoints.checkin,
    requestOptions,
  );
  return fetch(baseUrl + config.endpoints.checkin, requestOptions)
    .then(_handleResponse)
    .then(res => {
      //console.log('check in api call', res);
      return res;
    });
}

async function CheckOut(authToken, projectId) {
  const requestOptions = {
    method: 'PUT',
    body: JSON.stringify({project_id: projectId}),
    headers: {
      'Content-Type': config.contentType,
      Authorization: `Bearer ${authToken}`,
    },
  };
  console.log(
    'check in data id',
    baseUrl + config.endpoints.checkout,
    requestOptions,
  );
  return fetch(baseUrl + config.endpoints.checkout, requestOptions)
    .then(_handleResponse)
    .then(res => {
      //console.log('check in api call', res);
      return res;
    });
}

async function attendance(authToken, data) {
  // console.log('api data--', data);
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': config.contentType,
      Authorization: `Bearer ${authToken}`,
    },
  };
  // console.log(
  //   'api call attendance',
  //   baseUrl + config.endpoints.attendance,
  //   requestOptions,
  // );
  return fetch(baseUrl + config.endpoints.attendance, requestOptions)
    .then(_handleResponse)
    .then(res => {
      //console.log('check in api call', res);
      return res;
    });
}

function _handleResponse(response) {
  return response.text().then(text => {
    // console.log('APIService _handleResponse', response.url, text);
    const data = text && JSON.parse(text);
    if (!response.ok) {
      console.log('response.status', response.status);
      if (response.status === 401) {
        //logout();
        return Promise.reject('Server logged user out.');
      }
      return Promise.reject(data);
    }
    return data;
  });
}
