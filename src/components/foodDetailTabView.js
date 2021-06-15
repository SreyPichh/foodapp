import React, {Component} from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import FoodDescription from './foodDescription';
import FoodReview from './foodReview';


const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} >
      <Text>If you're hungry for success, food content marketing could be the 
        answer. food puns are as irresistible as mom's apple pie. there's no 
        denying that good food-related content has the potential to draw in the 
        crowds if you're hungry for success.
        </Text>
  </View>
  
);
const SecondRoute = () => <FoodReview />;

const initialLayout = {width: Dimensions.get('window').width};

export default function FoodDetailTabView() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'detail', title: 'Detail'},
    {key: 'review', title: 'Review'},
  ]);

  const renderScene = SceneMap({
    detail: FirstRoute,
    review: SecondRoute
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator_style}
      inactiveColor='#86878B'
      activeColor='red'
      labelStyle={{fontWeight: '600', fontSize: 16}}
      style={{backgroundColor: 'white',}}
      getLabelText={({route}) => route.title} 
     />
     );
     return (
       <TabView 
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
          style={styles.container}
       />
     );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight
  },
  scene: {
    flex: 1,
  },
  indicator_style: {
    backgroundColor: 'red',
    width: 55,
    left: (Dimensions.get('window').width / 3 - 20) / 2,
    height: 4,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});

