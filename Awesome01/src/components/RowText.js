import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RowText = props => {
  const {
    bodyTextOne,
    bodyTextTwo,
    bodyStyleOne,
    bodyStyleTwo,
    bodyStyleWrapper,
  } = props;
  return (
    <View style={bodyStyleWrapper}>
      <Text style={bodyStyleOne}>{bodyTextOne}</Text>
      <Text style={bodyStyleTwo}>{bodyTextTwo}</Text>
    </View>
  );
};

export default RowText;

const styles = StyleSheet.create({});
