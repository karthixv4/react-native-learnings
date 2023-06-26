import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch=(endpoint,query)=>{
const [data,setData] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {...query},
    headers: {
      'X-RapidAPI-Key': "4cd03a74ecmsh4f3ff5062126671p13544ajsn5e61dfc00dc",
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  const fetchData = async()=>{
    setLoading(true);
    try{
        const response = await axios.request(options);
        setData(response.data.data);
        setLoading(false)
    }catch(e){
        setError(error);
        alert('there is an error')
    }finally{
        setLoading(false);
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  const refetch=()=>{
    setLoading(true);
    fetchData();
  }

return {loading, error, data, refetch};
}

export default useFetch;