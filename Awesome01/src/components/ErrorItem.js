import React from 'react';
import {View, StyleSheet, Text} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

const ErrorItem=()=>{
return(
    <View style={styles.container}>
        <Text style={styles.errorMessage}>Sorry something went Wrong!</Text>
        <Feather name={'frown'} size={100} color={'white'} />
    </View>
)
}
const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red'
},
errorMessage:{
    fontSize:30,
    color:'white',
    marginHorizontal:10,
    textAlign:'center'
}
})
export default ErrorItem