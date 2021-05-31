import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

class Category extends Component {
  render(){
    return (
      <View style={styles.category}>
        <View style={styles.shadow}><Image source={{uri: this.props.image}} style={styles.categoryImage} /></View>
        <Text style={styles.categoryTitle}>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  category: {
    marginRight: 23,
    marginTop: 20,
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginBottom: 8,
    alignSelf: 'center',
    
  },
  shadow: {
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.10,
    shadowRadius: 5,
    elevation: 18,
  },
  categoryTitle: {
    alignSelf: 'center'
  },  
});
  

export default Category;