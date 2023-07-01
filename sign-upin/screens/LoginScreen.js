import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native'
export default function LoginScreen() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" style={{backgroundColor:"#877dfa"}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
            <TouchableOpacity
            onPress={()=>navigation.goBack()}
            className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            >
                <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
            <Image
            source={require('../assets/loginimg.png')}
            style={{height:200, width: 200}}
            />
        </View>
      </SafeAreaView>
      <View
      style={{borderTopLeftRadius:50, borderTopRightRadius:50}}
      className="flex-1 bg-white px-8 pt-8">
        <View className="form space-y-3">
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput
            placeholder="Email Address" 
            className="p-4 bg-gray-100 text-gray-700 rounder-2xl"
            value=""
            />
            <Text className="text-gray-700 ml-4">Password</Text>
            <TextInput
            placeholder="Enter password" 
            className="p-4 bg-gray-100 text-gray-700 rounder-2xl"
            value="test12"
            secureTextEntry
            />
            <TouchableOpacity className="flex items-end">
                <Text className="text-gray-700">Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl">
                <Text className="font-xl font-bold text-center text-gray-700">Login</Text>
            </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold text-center py-5">
         Or
        </Text>
        <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="bg-gray-100 rounded-2xl p-2 ">
                <Image 
                source={require('../assets/googleicon.png')}
                className="w-10 h-10"
                />
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-100 rounded-2xl p-2 ">
                <Image 
                source={require('../assets/appleicon.png')}
                className="w-10 h-10"
                />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-3">
                <Text className="text-gray font-semibold">Don't have an account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                    <Text className="font-semibold text-yellow-400 ml-2">Sign up</Text>
                </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}