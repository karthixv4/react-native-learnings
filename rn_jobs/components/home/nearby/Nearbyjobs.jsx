import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

import styles from './nearbyjobs.style';
import {COLORS, SIZES} from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import  useFetch from '../../../hook/useFetch';
import { useRouter } from 'expo-router';
const Nearbyjobs = () => {
  const {loading, error, data, refetch} = useFetch('search',{
    query:'React Developer',
    num_pages:'1'
  });
  const router=useRouter();
  const isLoading =false;
  const errors = false
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
        : errors ? <Text>Something is wrong</Text>
        : (
          data ?.map((job)=>(
            <NearbyJobCard
              job={job}
              key={`nearby-jobs-${job.job_id}`}
              handleNavigate={()=>router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )
        
        }
      </View>
    </View>
  )
}

export default Nearbyjobs