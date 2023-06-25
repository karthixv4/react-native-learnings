import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
const IconText = (props) => {
    const {iconName, iconColor, bodyText, bodyTextStyle} = props;
  return (
    <View style={styles.wrapper}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[styles.textTheme, bodyTextStyle]}>{bodyText}</Text>
    </View>
  );
};

export default IconText;

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: 'bold',
  },
  wrapper:{
    alignItems:'center'
  }
});
