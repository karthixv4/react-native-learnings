import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import RowText from '../components/RowText';
const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>25 C</Text>
        <Text style={styles.feelsLike}>Feels: 24 C</Text>
        <RowText
          bodyTextOne={'high:42'}
          bodyTextTwo={'low:35'}
          bodyStyleOne={styles.highLow}
          bodyStyleTwo={styles.highLow}
          bodyStyleWrapper={styles.highLowWrapper}
        />
      </View>
      <RowText
        bodyTextOne={"It's Damn Sunny"}
        bodyTextTwo={'Take an umbrella with you'}
        bodyStyleOne={styles.description}
        bodyStyleTwo={styles.message}
        bodyStyleWrapper={styles.bodyWrapper}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'pink',
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
    fontSize: 48,
    color: 'black',
  },
  message: {
    fontSize: 30,
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
