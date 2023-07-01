import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import {signOut} from 'firebase/auth';
import {auth} from '../config/firebase'
export default function HomeScreen() {
    const handleLogout=async()=>{
        await signOut(auth)
    }
  return (
    <SafeAreaView className="flex-1 flex-row justify-center items-center">

<Text className="font-xl font-bold text-center">HomeScreen is here</Text>
<TouchableOpacity className="p-5 bg-red-300 rounded-lg"
onPress={handleLogout}
>
    <Text className="font-xl font-bold">Logout</Text>
</TouchableOpacity>
    
    </SafeAreaView>
  )
}