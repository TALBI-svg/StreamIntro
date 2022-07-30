import React from 'react'
import { SafeAreaView, StyleSheet,Text,Image,Modal,View,StatusBar,KeyboardAvoidingView, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../layout/colors/colors';
import Feather from 'react-native-vector-icons/Feather'


export default function RatApp() {
  return (
    <View style={styles.containner}>
        <Text>hello from rateapp repo</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    containner: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.backgroundScreen,
        height:hp('100%'), //Height screen in real device 
        width:wp('100%'), //width screen in real device

    },

});
