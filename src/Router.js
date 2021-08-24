// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//pages
import Products from './pages/Products';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            title: 'DÜKKAN',
            headerTitleStyle: {color: 'purple', fontWeight: 'bold'},
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: 'DÜKKAN',
            headerTitleStyle: {color: 'purple', fontWeight: 'bold'},
            headerTintColor: 'purple',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
