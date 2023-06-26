import React,{useState} from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'

import styles from './welcome.style'
import {icons, SIZES} from '../../../constants'
import {useRouter } from 'expo-router';

const jobTypes=["Full-Time","unemployed", "Part-time"]

const Welcome = () => {
  const router = useRouter();
  const [activeJob, setActiveJob] = useState("Full-Time");
  return (
    <View >
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Boss!</Text>
        <Text style={styles.welcomeMessage}>Curate your Job</Text>
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value=""
              placeholder="Search for a Job ?"
              onChange={()=>{}}
            />
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
            <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tabsContainer}>
          <FlatList
          data={jobTypes}
          renderItem={({item})=>(
              <TouchableOpacity 
              style={styles.tab(activeJob, item)}
              onPress={()=>{
                setActiveJob(item)
                router.push(`/search/${item}`)
              }}
              >
                <Text style={styles.tabText(activeJob, item)}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item=>item}
            contentContainerStyle={{columnGap: SIZES.small}}
            horizontal
          />
        </View>
      </View>
    </View>
  )
}

export default Welcome