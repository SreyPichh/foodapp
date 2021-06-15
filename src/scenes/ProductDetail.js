import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ThemeConsumer} from 'react-native-elements';
import TabView from '../components/foodDetailTabView';
import fileBase64 from '../assets/fileBase64';

// third party
import Share from 'react-native-share';

class ProductDetail extends Component {

  state = {
    counter: 0,
  }

  render() {
    const image = this.props.route.params.image;
    const name = this.props.route.params.name;
    const restaurant = this.props.route.params.restaurant;
    const price = this.props.route.params.price;
    const counter = this.state.counter;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.topHeader}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}
              style={{marginLeft: 0}}>
              <Icon name="chevron-left" size={35} colo="#616264" />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => onShare()}
              style={{marginLeft: 0}}>
              <Icon name="shopping-outline" size={30} colo="#616264" />
            </TouchableOpacity>
          </View>

          <View style={styles.innerContainer}>
            <Image source={{uri: image}} style={styles.featureImage} />
            <View style={styles.contentCard}>
              <View style={{justifyContent: 'space-between'}}>
                <View>
                  <Text style={styles.foodName}>{name}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#616264'}}>by </Text>
                    <TouchableOpacity>
                      <Text style={{fontWeight: '500'}}>{restaurant}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    alignSelf: 'flex-end',
                  }}>
                  ${price}
                </Text>
              </View>

              {/*  */}
              <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 16, alignItems: 'center', paddingBottom: 16}}>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>this.onMinus()}>
                  <Icon name="minus" size={24} />
                </TouchableOpacity>
                <Text style={{fontSize:18, fontWeight: '600', paddingLeft:4, paddingRight:4, justifyContent: 'center', alignSelf: 'center'}}>{counter}</Text>
                <TouchableOpacity onPress={() => this.onPlus()}>
                  <Icon name="plus" size={24} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.addToCartBtn}><Text style={{fontWeight: '800', color: '#fff'}}>Add To Cart</Text></TouchableOpacity>
              </View>
              {/* tab */}
              <TabView />
              
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  onPlus = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  onMinus = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    } else {
      alert('The Value cannot be less than 0');
    }
  }
}
const onShare = async () => {
    const shareOptions = {
      message: 'Sell your land property faster on Landmap App!',
      url: fileBase64.image
    }
    try {
      const shareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log('Error =>', error);
    }
  };

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  featureImage: {
    width: 'auto',
    height: 300,
  },
  contentCard: {
    width: 'auto',
    height: 'auto',
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 10,
  },
  foodName: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  addToCartBtn: {
    backgroundColor: 'red',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 6,
    width: 'auto'
  }
});

export default ProductDetail;
