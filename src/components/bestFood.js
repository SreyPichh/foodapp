import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class BestFood extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Image source={{uri:this.props.cover_image}} style={styles.coverImage} />
        <View style={styles.innerContent}>
          <View>
          <Text style={{fontWeight: '600'}}>{this.props.name}</Text>
          <Text style={{color: '#616264', fontSize: 12}}>by {this.props.restuarant_name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 12}}>{this.props.star}</Text>
            <Icon name="star" size={12} color="red"/>
            <Icon name="star" size={12} color="red"/>
            <Icon name="star" size={12} color="red"/>
            <Icon name="star" size={12} color="red"/>
            <Icon name="star-outline" size={12} color="red"/>
            <Text style={{fontSize: 12}}>({this.props.rate_num})</Text>
          </View>
          </View>
          <View style={styles.nearMe}>
            <Icon name="near-me" size={24} color="red" />
          </View>
        </View>
        {/* <View style={{flexDirection: 'column'}}>
          
          </View> */}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 300,
    borderRadius: 6,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  coverImage:{
    width: 'auto',
    height: 230,
  },
  innerContent: {
    padding:10,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  nearMe: {
    backgroundColor: '#fff',
    height: 32,
    width: 32,
    borderRadius: 16,
    padding: 4,
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.1
  }
});

export default BestFood;