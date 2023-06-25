import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {WeatherType} from '../utilities/WeatherType';
import moment from 'moment';
const ListItems = (props) => {
  const {dt_txt, min, max, condition} = props;
  return (
    <View style={styles.item}>
      <Feather name={WeatherType[condition].icon} size={50} color="black" />
      <View style={styles.dateTextWrapper}>
      <Text style={styles.date}>{moment(dt_txt).format('dddd')}</Text>
      <Text style={styles.date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
      
      <Text style={styles.temp}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
    </View>
  );
};

export default ListItems;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'pink',
    alignItems: 'center',
    borderRadius: 6,
    borderColor: 'black',
  },
  temp: {
    color: 'white',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
  dateTextWrapper:{
    flexDirection:'column'
  }
});
