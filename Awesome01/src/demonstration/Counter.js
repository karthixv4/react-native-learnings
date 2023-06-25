import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Counter =()=>{
    const [count,setCount] = useState(0);
    const [newCount,setNewCount] = useState(0);
    useEffect(()=>{
        console.log(`our count values ${count}`)
        return(()=>{
            console.log("Im clean")
        })
    },[count])
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{`Count: ${count}`}</Text>
            <Button color='red' title='increase the count' onPress={()=>{
             setCount(count+1)
             console.log(count)
            }} />
            <Button color='green' title='decrease the count' onPress={()=>{
              setCount(count-1)
             console.log(count)
            }} />
            <Button color='red' title='increase the count' onPress={()=>{
             setNewCount(newCount+1)
             console.log(newCount)
            }} />
            <Button color='green' title='decrease the count' onPress={()=>{
              setNewCount(newCount-1)
             console.log(newCount)
            }} />
        </View>
    )
}
const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'orange'
},
title:{
    alignSelf:'center',
    marginTop:25,
    fontSize:25
}
})
export default Counter