import  React from 'react';
import { SafeAreaView, StyleSheet,Text,Image,Modal,View,FlatList,TextInput,KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../layout/colors/colors';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Onboard from '../Screens/Onboard';
import SignUp from '../Screens/SignUp';
import Loading from '../Screens/Loading';
import SignIn from '../Screens/SignIn';
import Home from '../Screens/Home';
import Posts from '../Screens/Posts';
import Profile from '../Screens/Profile';
import RatApp from '../Screens/RatApp';
import BottomNavBar from '../Screens/BottomNavBar';



const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false,}}>
        
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="RatApp" component={RatApp} />
        <Stack.Screen name="BottomNavBar" component={BottomNavBar} />

        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen name="Loading" component={Loading} />

      </Stack.Navigator>
    </NavigationContainer>
  );
} 
const styles = StyleSheet.create({
    containner: {
        flex:1,
        backgroundColor:colors.backgroundScreen,
        height: hp('100%'),
        width: wp('100%'),
    },


});