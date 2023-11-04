import firebase from '@react-native-firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyDcFy1uUBexTKSqSFYVQK6CbxmYrxlRKVQ',

  authDomain: 'rapidbuild-60542.firebaseapp.com',

  projectId: 'rapidbuild-60542',

  storageBucket: 'rapidbuild-60542.appspot.com',

  messagingSenderId: '308991996913',

  appId: '1:308991996913:web:bcc76d0142efdc554d8a50',
};

if (!firebase.apps.length) {
  firebase.initializeApp({});
} else {
  firebase.app(); // if already initialized, use that one
}
export {firebase};
