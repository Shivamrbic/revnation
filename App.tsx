import React, {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import StackNavigator from './src/Navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/Redux/store';

const store = createStore(rootReducer, applyMiddleware(thunk));

// const store = createStore(UserReducer);

function App() {
  const [isLogin, setIsLogin] = React.useState(null);

  AsyncStorage.getItem('token').then(res => {
    if (res?.length > 0) {
      setIsLogin(true);
      console.log('res', isLogin);
    } else {
      setIsLogin(false);
    }
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        {isLogin != null && <StackNavigator isLogin={isLogin} />}
      </NavigationContainer>
    </Provider>
  );
}

export default App;
