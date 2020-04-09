/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import BusinessShowScreen from './src/screens/BusinessShowScreen';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{title: 'BusinessSearch'}}
        />
        <Stack.Screen name="BusinessShow" component={BusinessShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
