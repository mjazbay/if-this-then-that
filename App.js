/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './src/components/HomeScreen';
import SelectionPage from './src/components/SelectionPage';

const Stack = createStackNavigator();
const App = () => {
  const headerTitleStyle = {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 22,
    color: '#3E2866',
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Training',
            headerTitleStyle,
          }}
        />
        <Stack.Screen 
          name="SelectionPage" 
          component={SelectionPage} 
          options={({ route }) => ({ 
            title: route.params.name,
            headerTitleStyle,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
