import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class FoodDescription extends Component {
  render (){
    return(
      <View style={styles.container}>
        <Text>If you're hungry for success, food content marketing could be the 
          answer. food puns are as irresistible as mom's apple pie. there's no 
          denying that good food-related content has the potential to draw in the 
          crowds if you're hungry for success.
          </Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 0
  }
});

export default FoodDescription;