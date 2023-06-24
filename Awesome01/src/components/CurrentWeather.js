import React from "react";
import {View, SafeAreaView, Text, StyleSheet} from 'react-native'
import Feather from "react-native-vector-icons/Feather";
const CurrentWeather = () =>{
return(
<SafeAreaView style={styles.wrapper}>
    <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>25 C</Text>
        <Text style={styles.feelsLike}>Feels: 24 C</Text>
        <View style={styles.highLowWrapper}>
        <Text style={styles.highLow}>high:42</Text>
        <Text style={styles.highLow}>low:35</Text>
        </View>
    </View>
    <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's Damn Sunny</Text>
        <Text style={styles.message}>Take an umbrella with you</Text>
    </View>
</SafeAreaView>
)
}

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:'pink',
        flex:1
    },
    container:{  
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    temp:{
        color:'black',
        fontSize: 40
    },
    feelsLike:{
        color:'black',
        fontSize:35
    },
    highLow:{
        color:'black',
        fontSize:27
    },
    description:{
        fontSize: 48,
        color:'black'
    },
    message:{
        fontSize: 30,
        color:'black'
    },
    bodyWrapper:{
        justifyContent:'flex-end',
        alignItems:'flex-start',
        paddingLeft:25,
        marginBottom:40
    },
    highLowWrapper:{
        flexDirection:'row'
    }
})

export default CurrentWeather