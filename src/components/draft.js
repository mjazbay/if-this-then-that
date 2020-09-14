import React from 'react';
import { Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';


const SelectionPage = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Button 
            title="Go To Details...again"
            onPress={() => navigation.push('SelectionPage')}
            />
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Go Back to First Screen in the Stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
      );
}

export default SelectionPage;