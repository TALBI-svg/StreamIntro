import React from 'react'
import { StyleSheet,Text,View,Image, ActivityIndicator } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../layout/colors/colors';

export default function Loading() {
  return (
    <View style={styles.containner}>
      <Image source={require('../../layout/images/logo.png')} style={styles.ImageArea}/>

        <ActivityIndicator
         color ={colors.primary} // color of your choice
         size = "large"
        />


    </View>
  )
}
const styles = StyleSheet.create({
    containner: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      height: hp('100%'),
      width:wp('100%'),
    },
    ImageArea: {
      height:150,
      width:150,
    },
});
