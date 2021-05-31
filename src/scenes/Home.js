import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import categoryData from '../data/category.json';
import Category from './Category';
import PopularFood from '../components/popularFood';
import popularFoodData from '../data/popularFood.json';
import featureFood from '../data/featureFood.json';
import BestFood from '../components/bestFood';

class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.top_header}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              What would you like to eat?
            </Text>
            <TouchableOpacity>
              <Icon name="bell-outline" size={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.search}>
            <View style={{marginLeft: 8, alignItems: 'center', justifyContent: 'center'}}>
              <Icon name="magnify" size={24} color="red"/>
            </View>
            <TextInput
              placeholder={'Find a food or restaurent'}
              placeholderTextColor="#CACACA"
              onChangeText={this.props.onChangeText}
              clearButtonMode="always"
              autoFocus={false}
              value={this.props.searchedWord}
              style={styles.search_box}
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('searchFilter')} 
              style={{ alignSelf: 'center', alignItems: 'flex-end'}}>
              <Icon name="filter-variant" size={24} style={styles.filter_icon} color="red" />
            </TouchableOpacity>
          </View>
          <View>
            <FlatList 
              keyboardShouldPersistTaps="handled"
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={categoryData}
              keyExtractor={(item) => item.id}
              renderItem = {({item}) => {
                return (
                  <>
                  {
                    <TouchableOpacity>
                      <Category
                        key={item.id}
                        image={item.image}
                        title={item.title}
                      />
                    </TouchableOpacity>
                  }
                  </>
                );
              }}
            />
          </View>
          <View style={{ marginTop: 16}}>
            <Text style={styles.header_text}>Popular Foods</Text>
            <FlatList
            keyboardShouldPersistTaps="handled"
            horizontal = {true}
            showsHorizontalScrollIndicator={false}
            data = {popularFoodData}
            keyExtractor = {(item) => item.id}
            renderItem = {({item}) => {
              return(
                <>
                {
                  <TouchableOpacity>
                    <PopularFood 
                      key={item.id}
                      image={item.image}
                      name={item.name}
                      price={item.price}
                      isFavorite={item.isFavorite}
                      star={item.star}
                      rate_num={item.rate_num}
                    />
                  </TouchableOpacity>
                }
                </>
              );
            }}
             />
          </View>
          <View style={{marginTop: 20}}>
          <Text style={styles.header_text}>Best Foods</Text>
          <FlatList
            horizontal={false}
            style={{marginTop: 16}}
            data={featureFood}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return(
                <>
                {
                  <TouchableOpacity>
                    <BestFood 
                      key={item.id}
                      cover_image={item.cover_image}
                      name={item.name}
                      star={item.star}
                      rate_num={item.rate_num}
                      restuarant_name={item.restuarant_name}
                    />
                  </TouchableOpacity>
                }
                </>
              )
            }}
           />
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  top_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  search: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#DBDCE0",
  },
  search_box: {
    width: 'auto',
    height: 50,
    color: 'black',
    fontSize: 18,
    paddingLeft: 4,
  },
  filter_icon: {
    justifyContent: 'space-between',
    marginLeft: 85,
  },
  header_text:{
    fontSize: 18,
    fontWeight: '500'
  }
});

export default Home;
