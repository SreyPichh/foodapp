import * as React from 'react';
import {View, SafeAreaView, Text, Platform, StatusBar} from 'react-native';
import {BottomNavigation} from 'react-native-paper';
import Account from '../scenes/Account';

import Home from '../scenes/Home';
import NearBy from '../scenes/NearBy';
import Cart from '../scenes/Cart';
import Account from '../scenes/Account';

const HomeRoute = () => <Hom />;
const NearByRoute = () => <NearBy />
const CartRoute = () => <Cart />
const AccountRoute = () => <Account />

const BottomBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'Home', icon: 'home'},
    {key: 'nearby', title: 'NearBy', icon: 'home'},
    {key: 'cart', title: 'Cart', icon: 'home'},
    {key: 'account', title: 'Account', icon: 'home'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    nearby: NearByRoute,
    cart: CartRoute,
    account: AccountRoute
  });

  return (
    <>
      {Platform.OS == 'ios' ? <StatusBar barStyle="dark-content" /> : <></>}
      <BottomNavigation
        barStyle={{backgroundColor: '#ffffff'}}
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </>
  );
};

export default BottomBar;
