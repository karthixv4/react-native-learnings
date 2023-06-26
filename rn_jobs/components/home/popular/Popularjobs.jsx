import React, {useState} from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import {useRouter} from 'expo-router';

import styles from './popularjobs.style';
import {COLORS, SIZES} from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import  useFetch from '../../../hook/useFetch';
const Popularjobs = () => {
  const {loading, error, data, refetch} = useFetch('search',{
    query:'React Developer',
    num_pages:'1'
  });

  // console.log(data);
  const router=useRouter();
  const isLoading =false;
  const errors = false
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
        : errors ? <Text>Something is wrong</Text>
        : <FlatList
        data={[1,2,3,5,6,7,8,9,10]}
        renderItem={({item})=>(
          <PopularJobCard item={item} />
        )}
        keyExtractor={item=> item?.job_id}
        contentContainerStyle={{columnGap: SIZES.small}}
        horizontal
           />
        
        }
      </View>
    </View>
  )
}

export default Popularjobs