import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Skills from './Skills';
import Moves from './Moves';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = ({navigation}) => {
  // return (
  //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //     <Text>Home Screen</Text>
  //     <Button 
  //       title="Go To Details"
  //       onPress={() => navigation.navigate('SelectSomething')}
  //     />
  //   </View>
  // );
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
        fontFamily: 'Helvetica',
        fontStyle:'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 22,
        left: 30,
        },
        indicatorStyle: {
        borderBottomWidth: 5,
        borderColor: '#3E2866',
        width:80,
        left: 93,
        },
        activeTintColor: '#3E2866',
        inactiveTintColor: "#9F9F9F",
      }}
    >
      <Tab.Screen name="Skills" component={Skills} />
      <Tab.Screen name="Moves" component={Moves} />
    </Tab.Navigator>    
  )
}

export default HomeScreen;
