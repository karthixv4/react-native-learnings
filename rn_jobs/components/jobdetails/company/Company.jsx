import React from 'react';
import {View, Text, Image, StyleSheet  } from 'react-native';
import styles from './company.style'
import { checkImageURL } from '../../../utils';
const Company=({companyLogo, companyName})=>{
  return (
<View>
  <Text>{companyName}</Text>
  <View style={{width: 80,
    height: 80}} >
         <Image
           source={{uri: checkImageURL(companyLogo) ? companyLogo : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'}}
           resizeMode='contain'
           style={styles.logoImage}
         />
       </View>
</View>
  )
}
// const styles = StyleSheet.create({
//   container: {
//     width: 200,
//     height: 200,
//     backgroundColor: "red",
//   },
//   image: {
//     borderRadius: 10,
//   },
// });

export default Company