// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//pages
import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';
//useSelector
import {useSelector, useDispatch} from 'react-redux';
import Loading from './components/Loading';
//ICON
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

function App() {
  const userSession = useSelector(s => s.user);
  const isLoading = useSelector(s => s.authLoading);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      {isLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'LOGIN',
              headerTitleStyle: {color: 'purple', fontWeight: 'bold'},
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Products"
            component={Products}
            options={{
              title: 'PRODUCTS',
              headerStyle: {backgroundColor: 'white'},
              headerTitleStyle: {color: 'purple', fontWeight: 'bold'},
              headerRight: () => (
                <Icon
                  name={'logout'}
                  size={30}
                  color={'purple'}
                  onPress={() => dispatch({type: 'REMOVE_USER'})}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              title: 'DETAIL',
              headerTitleStyle: {color: 'purple', fontWeight: 'bold'},
              headerTintColor: 'purple',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
