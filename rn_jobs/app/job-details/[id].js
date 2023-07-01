import { StyleSheet, Text, View,SafeAreaView,  ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import {Stack, useRouter, useSearchParams} from 'expo-router';

import {useCallback, useState} from 'react';
import { Company, JobAbout, JobFooter, Specifics, JobTabs, ScreenHeaderBtn } from '../../components';
import { COLORS, SIZES, icons } from '../../constants';
import useFetch from '../../hook/useFetch';
const JobDetails = () => {
    const params = useSearchParams();
    const router = useRouter();
    const {loading, error, data, refetch} = useFetch('job-details',
    {job_id: params.id,}
    )
    console.log("DATA",data)
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh=()=>{

    }
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
        <Stack.Screen
        options={{
            headerStyle:{ backgroundColor: COLORS.lightWhite},
            headerBackVisible: false,
            headerShadowVisible:false,
            headerLeft:()=>(
                <ScreenHeaderBtn 
                iconUrl={icons.left}
                dimension={"60%"}
                handlePress={()=>router.back()}
                />
            ),
            headerTitle:"",
            headerRight:()=>(
                <ScreenHeaderBtn 
                iconUrl={icons.share}
                dimension={"60%"}
                />
            )
        }}
        >
        </Stack.Screen>
        <>
        <ScrollView showsVerticalScrollIndicator={false} refreshControl={
            <RefreshControl refreshing={refreshing}  />
        }>
            { loading ? ( 
        <ActivityIndicator size={SIZES.large} color={COLORS.primary} /> )
        : error ? (
        <Text>Something went wrong</Text> )
        : data.length === 0 ? (
        <Text> No data </Text> )
        : (
            
            <View style={{padding: SIZES.medium, paddingBottom: 100}}>
                <Company
                    companyLogo={data[0].employer_logo}
                    // jobTitle={data[0]?.job_title}
                    companyName={data[0].employer_name}
                    // location={data[0]?.job_country}
                />
                <JobTabs 
                
                />
            </View>
        )

        }
        </ScrollView>
        </>
    </SafeAreaView>
  )
}

export default JobDetails

const styles = StyleSheet.create({})