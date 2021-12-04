import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('@USER').then(userSession => {
      userSession ? setUser(JSON.parse(userSession)) : setUser(null);
      setAuthLoading(false);
    });
  }, []);

  const store = createStore(reducers, {user, authLoading});
  return <Provider store={store}>{children}</Provider>;
};

export default AuthProvider;
