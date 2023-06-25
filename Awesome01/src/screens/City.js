import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React from 'react';
import IconText from '../components/IconText';

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageLayout}
        source={require('../../assets/city.jpg')}>
        <Text style={[styles.city, styles.cityText]}>Chennai</Text>
        <Text style={[styles.country, styles.cityText]}>India</Text>
        <View style={[styles.populationWrapper, styles.rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={'8000'}
            bodyTextStyle={styles.populationText}
          />
        </View>
        <View style={[styles.sunWrapper, styles.rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={'6:00:07 a.m'}
            bodyTextStyle={styles.sunText}
          />
            <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={'17:27:00 p.m'}
            bodyTextStyle={styles.sunText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default City;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLayout: {
    flex: 1,
  },
  city: {
    fontSize: 40,
  },
  country: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  populationWrapper: {
    
    justifyContent: 'center',
    marginTop: 30,
    
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
    fontWeight: 'bold',
  },
  sunWrapper: {
    
    justifyContent: 'space-around',
    marginTop: 30,
  },
  sunText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  rowLayout:{
    flexDirection: 'row',
    alignItems: 'center',
  }
});
