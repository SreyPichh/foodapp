import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


class PopularFood extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View>
          <Image source={{uri: this.props.image}} style={styles.food_image} />
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', paddingLeft: 8, paddingRight: 8, alignItems: 'center'}}>
          <Text>{this.props.name}</Text>
          <View style={styles.heart_icon}>
            <Icon name="heart-outline" size={16} color="red" style={{alignSelf: 'center', padding: 2}}/>
          </View>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', paddingLeft: 8, paddingRight: 8, alignItems: 'center', paddingBottom: 8}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 12}}>{this.props.star}</Text>
            <Icon name="star" size={12} color="red"/>
            <Icon name="star" size={12} color="red"/>
            <Icon name="star" size={12} color="red"/>
            <Icon name="star" size={12} color="red"/>
            <Icon name="star-outline" size={12} color="red"/>
            <Text style={{fontSize: 12}}>({this.props.rate_num})</Text>
          </View>
          <Text style={{fontSize: 14, fontWeight: '600'}}>${this.props.price}</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginRight: 16,
    marginTop: 16
  },
  food_image: {
    width: 150,
    height: 150,
    margin: 10
  },
  heart_icon: {
    marginBottom: 5,
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: 26,
    height: 26,
    borderRadius: 16,
    shadowColor: 'red',
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    elevation: 10,
  }
});

export default PopularFood;