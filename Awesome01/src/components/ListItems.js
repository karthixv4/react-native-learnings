import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
const ListItems = (props) => {
  const {dt_txt, min, max, condition} = props;
  return (
    <View style={styles.item}>
      <Feather name="sun" size={50} color="black" />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
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
});
