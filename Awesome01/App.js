import React from 'react';
import CurrentWeather from './src/components/CurrentWeather';
import UpcomingWeather from './src/components/UpcomingWeather'
import {View, StyleSheet} from 'react-native'
const App =()=>{
return(
    <View style={styles.container}>
        {/* <CurrentWeather /> */}
        <UpcomingWeather />
    </View>
    
)
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
export default App