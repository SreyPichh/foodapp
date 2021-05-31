/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import type {Node} from 'react';
import {
  AppState,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import third party lib
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Import internal component
import Home from './src/scenes/Home';
import BottomTab from './src/components/bottomTab';

const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <AppStack.Navigator>
          <AppStack.Screen
            name="Home"
            component={BottomTab}
            options={{
              headerShown: false,
            }}
          />
          <AppStack.Screen
            name="NearBy"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <AppStack.Screen
            name="Cart"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <AppStack.Screen
            name="Account"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'column',
  },
  textView: {
    alignItems: 'center',
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 25,
  },
});

export default App;
