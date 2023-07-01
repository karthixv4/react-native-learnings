import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
export default function LoginScreen() {
  return (
    <View className="flex-1 bg-white" style={{backgroundColor:"#877dfa"}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
            <TouchableOpacity>
                <ArrowLeftIcon size="20" color="white" />
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}