import React, {Children, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg, {Path} from 'react-native-svg';
import {isIphoneX} from 'react-native-iphone-x-helper';

//Internal
import Home from '../scenes/Home';
import NearBy from '../scenes/NearBy';
import Account from '../scenes/Account';
import Cart from '../scenes/Cart';

const Tab = createBottomTabNavigator();

const CustomTabBar = props => {
  if (isIphoneX()) {
    return (
      <View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 30,
            zIndex: 10,
            backgroundColor: 'white',
          }}></View>
        <BottomTabBar {...props.props} />
      </View>
    );
  } else {
    return <BottomTabBar {...props.props} />;
  }
};

const TabBarCustom = ({accessibilityState, children, onPress}) => {
  var isSelected = accessibilityState.selected;
  if (isSelected) {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{flexDirection: 'row', position: 'absolute', top: 0}}>
          <View style={{flex: 1, backgroundColor: '#fff'}}></View>
          <Svg width={75} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill="#fff"
            />
          </Svg>
          <View style={{flex: 1, backgroundColor: '#fff'}}></View>
        </View>

        <TouchableOpacity
          style={{
            top: -22.5,
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#fff',
          }}
          onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 60,
          backgroundColor: '#fff',
        }}
        activeOpacity={1}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};

class BottomTab extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        shifting={true}
        activeColor={'red'}
        tabBarOptions={{
          showLabel: false,
          style: {
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            elevation: 0,
            ...styles.shadow,
          },
        }}
        tabBar={props => <CustomTabBar props={props} />}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                  name={focused ? 'home' : 'home-outline'}
                  size={24}
                  color={focused ? 'red' : '#616264'}
                />
              </View>
            ),
            tabBarButton: props => <TabBarCustom {...props} />,
          }}
        />
        <Tab.Screen
          name="NearBy"
          component={NearBy}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                  name={focused ? 'near-me' : 'near-me'}
                  size={24}
                  color={focused ? 'red' : '#616264'}
                />
              </View>
            ),
            tabBarButton: props => <TabBarCustom {...props} />,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                  name={focused ? 'cart' : 'cart-outline'}
                  size={24}
                  color={focused ? 'red' : '#616264'}
                />
              </View>
            ),
            tabBarButton: props => <TabBarCustom {...props} />,
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                  name={focused ? 'account' : 'account-outline'}
                  size={24}
                  color={focused ? 'red' : '#616264'}
                />
              </View>
            ),
            tabBarButton: props => <TabBarCustom {...props} />,
          }}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default BottomTab;
