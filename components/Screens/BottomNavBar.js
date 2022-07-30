import React from 'react'
import {  StyleSheet,Text,Image,Modal,View,StatusBar,KeyboardAvoidingView, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import colors from '../../layout/colors/colors';
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default function BottomNavBar() {
  const navigation = useNavigation();

  const Myaccount = () => {
    navigation.navigate('Profile');

  }

  const Home = () => {
    navigation.navigate('Home');

  }

  





  return (
    <View >
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.WrapperBottomNavBar}>
            <View style={styles.BottomNavBar}>
            {/*Home*/}
            <TouchableOpacity onPress={Home}>
              <AntDesign name="home" size={20} color={colors.textDark}/>
            </TouchableOpacity>
            {/*Search*/}
            <TouchableOpacity>
               <Feather name="search" size={20} color={colors.textDark}/>
            </TouchableOpacity>
            {/*add*/}
            <TouchableOpacity >
              <Feather name="plus-square" size={20} color={colors.textDark}/>
            </TouchableOpacity>
            {/*explore*/}
            <TouchableOpacity>
              <Feather name="refresh-cw" size={20} color={colors.textDark}/>
            </TouchableOpacity>
            {/*Profile*/}
            <TouchableOpacity onPress={Myaccount}>
              <Feather name="user" size={20} color={colors.textDark}/>
            </TouchableOpacity>
           
           

            </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    //containner: {
        //flex:1,
        //backgroundColor:colors.secondary,
        //height:hp('100%'),
        //width:wp('100%'),

    //},
    WrapperBottomNavBar: {
        position:'absolute',
        bottom:0,
        //marginHorizontal:17,
        //backgroundColor:colors.primary,
        width:'100%',
        
    },
    BottomNavBar: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:colors.background,
        marginHorizontal:10,
        //marginVertical:10,
        paddingHorizontal:10,
        paddingVertical:10,
        borderTopColor:colors.light,
        borderTopWidth:1,
        //borderRadius:5,
        
    },
});
