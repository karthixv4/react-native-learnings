import React, {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
export const useGetWeather = ()=>{
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [weather,setWeather] = useState([])
    const fetchWeatherData =async(latitude, longitude)=>{
        try{
          const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=8f4ce0676ca874275d55d8da79a46361`)
          const data = await res.json(
            setWeather(data),
            setLoading(false)
          )
        }catch (e) {
          setError('no weather')
        }finally{
          setLoading(false)
        }
        
      }
      if(weather){
        console.log("Im weater",weather)
      }
    useEffect(()=>{
      Geolocation.getCurrentPosition(async(info) => {
        await fetchWeatherData(info.coords.latitude,info.coords.longitude)
        return [loading, error, weather]
      });
    },[])
}