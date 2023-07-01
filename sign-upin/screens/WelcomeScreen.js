import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor:"#002D71"}}>
        <View className="flex-1 flex justify-around my-4"> 
            <Text className="text-white font-bold text-4xl text-center">Lets get started</Text>
        
            <View className="flex-row justify-center">
            <Image
            source={require('../assets/welcome.png')}
            style={{width: 350, height: 350}}
            />
            </View>
            <View className="space-y-4">
            <TouchableOpacity
            onPress={()=>navigation.navigate('Signup')}
            className="py-3 bg-yellow-400 mx-7 rounded-xl">
                <Text 
                className="text-xl text-center font-bold text-gray-700"
                >
                    Sign up
                </Text>
            </TouchableOpacity>
            <View className="flex-row justify-center">
                <Text className="text-white font-semibold">Already have an accoutn?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                    <Text className="font-semibold text-yellow-400"> Log In </Text>
                </TouchableOpacity>
            </View>
            </View>

        </View>
    </SafeAreaView>
  )
}
