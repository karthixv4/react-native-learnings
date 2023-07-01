import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import useAuth from '../hooks/useAuth';
const Stack = createNativeStackNavigator();

export default function(){
    const {user} = useAuth();
   
     if(user){
      return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
      )
        }else{
            return (
                <NavigationContainer>
                <Stack.Navigator initialRouteName="Welcome">
                    <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
                    <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
                    <Stack.Screen name="Signup" options={{headerShown: false}}  component={SignUpScreen} />
                </Stack.Navigator>
            </NavigationContainer>
            )
    }
       
}