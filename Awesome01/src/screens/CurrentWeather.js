import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import RowText from '../components/RowText';
import {WeatherType} from '../utilities/WeatherType'
const CurrentWeather = ({weatherData}) => {
  const {main:{temp, feels_like, temp_max,temp_min}, weather} = weatherData
  const weatherCondition = weather[0].main
  return (
    <SafeAreaView style={[styles.wrapper, {backgroundColor: WeatherType[weatherCondition].backgroundColor}]}>
      <View style={styles.container}>
        <Feather name={WeatherType[weatherCondition]?.icon} size={100} color="white" />
        <Text style={styles.temp}>{temp}</Text>
        <Text style={styles.feelsLike}>{`Feels like ${feels_like}°`}C</Text>
        <RowText
          bodyTextOne={`High: ${temp_max}° `}
          bodyTextTwo={`Low: ${temp_min}° `}
          bodyStyleOne={styles.highLow}
          bodyStyleTwo={styles.highLow}
          bodyStyleWrapper={styles.highLowWrapper}
        />
      </View>
      <RowText
        bodyTextOne={weather[0].description}
        bodyTextTwo={WeatherType[weatherCondition]?.message}
        bodyStyleOne={styles.description}
        bodyStyleTwo={styles.message}
        bodyStyleWrapper={styles.bodyWrapper}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 40,
  },
  feelsLike: {
    color: 'black',
    fontSize: 35,
  },
  highLow: {
    color: 'black',
    fontSize: 27,
  },
  description: {
    fontSize: 43,
    color: 'black',
  },
  message: {
    fontSize: 25,
    color: 'black',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
});

export default CurrentWeather;
