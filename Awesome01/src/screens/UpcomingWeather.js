/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ImageBackground,
} from 'react-native';
import ListItems from '../components/ListItems';
const UpcomingWeather = ({weatherData}) => {
  const renderItem = ({item}) => (
    <ListItems
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/upcoming_weather.jpg')} style={styles.image}>
      <FlatList
        data={weatherData}
        renderItem={renderItem}
        keyExtractor={item => item.dt_txt}
      />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:  0 ,
    backgroundColor: 'pink',
  },
  image:{
    flex:1
  }
})

export default UpcomingWeather;
