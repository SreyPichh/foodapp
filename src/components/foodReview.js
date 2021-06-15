import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'

class FoodReview extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 400
  }
});

export default FoodReview;