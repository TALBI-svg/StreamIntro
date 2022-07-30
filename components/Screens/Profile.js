import React from 'react'
import { SafeAreaView, StyleSheet,Text,Image,Modal,View,StatusBar,KeyboardAvoidingView, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import colors from '../../layout/colors/colors';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import PostData from '../../layout/data/PostData'
import BottomNavBar from './BottomNavBar';
import userInfoData from '../../layout/data/userInfoData';



export default function Profile() {
  const navigation = useNavigation();
 
  
  const goback = () => {
    navigation.navigate('Home')
  }


  return (
    <View style={styles.containner}>
      <StatusBar translucent backgroundColor="transparent" />
      {/*Header*/}
      <SafeAreaView>
       <View style={styles.WrapperHeader}>
           <TouchableOpacity onPress={goback}>
             <Feather name="arrow-left-circle" size={25} color={colors.textDark} style={styles.HeaderIcon}/>
           </TouchableOpacity>
           
       </View>
      </SafeAreaView>
      {/*TitleSearchArea*/}
      <View style={styles.WrapperTitleSearchArea}>
        <Text style={styles.TitleSearchAreaTitle}>Profile</Text>
        <View style={styles.TitleSearchAreaSearch}>
          <TouchableOpacity>
          <Feather name="search" size={16} color={colors.textDark} style={styles.TitleSearchAreaSearchIcon}/></TouchableOpacity>
        </View>
      </View>
      {/*ContentArea*/}
      <View style={styles.WrapperContentArea}>
        
         {userInfoData.map((item)=> (
          <View style={styles.ContentAreaInfoCrad}>
           <View  style={styles.WrapperContentAreaInfoCradIcon}>
            <Ionicons name="ios-bookmark-outline" size={20} color={colors.primary} style={styles.ContentAreaInfoCradIcon}/>
           </View>

           <View style={styles.WrapperContentAreaInfoCradContent}>
             <Image source={item.image} style={styles.ContentAreaInfoCradContentImage}/> 
             <Text style={styles.ContentAreaInfoCradContentName}>{item.name}</Text>
             <Text style={styles.ContentAreaInfoCradContentEmail}>{item.email}</Text>
             <Text style={styles.ContentAreaInfoCradContentPirth}>{item.pirthDay}</Text>
             <Text style={styles.ContentAreaInfoCradContentType}>{item.type}</Text>
           </View>

           <View style={styles.WrapperContentAreaInfoCradAbout}>
            <Text style={styles.ContentAreaInfoCradAboutText}>About</Text>
            <Text style={styles.ContentAreaInfoCradAboutSubText}>{item.descripe}</Text>
           </View>

           <View style={styles.WrapperContentAreaInfoCradFeatures}>
             <Text style={styles.ContentAreaInfoCradFeaturesTitle}>Features</Text>
             {/*First Button's Features Lien*/}
             <View style={styles.ContentAreaInfoCradFeaturesBottomOne}>
              <TouchableOpacity>
                <Text style={styles.ContentAreaInfoCradFeaturesBottomOneText}>Add Post</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.ContentAreaInfoCradFeaturesBottomOneText}>Add Intro</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.ContentAreaInfoCradFeaturesBottomOneText}>More ...</Text>
              </TouchableOpacity>
             </View>
             {/*Second Button's Features Lien*/}
             <View style={styles.ContentAreaInfoCradFeaturesBottomTow}>
              <TouchableOpacity>
                <Text style={styles.ContentAreaInfoCradFeaturesBottomTowText}>Categorie Voice</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.ContentAreaInfoCradFeaturesBottomTowText}>Translate Intro's</Text>
              </TouchableOpacity>
             </View>
             {/*Third Button's Features Lien*/ }
             <View style={styles.ContentAreaInfoCradFeaturesBottomThree}>
              <TouchableOpacity>
                <Text style={styles.ContentAreaInfoCradFeaturesBottomThreeText}>Text To Voice Intro's</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.ContentAreaInfoCradFeaturesBottomThreeText}>Languages Intro's</Text>
              </TouchableOpacity>
             </View>
           </View>

            
            
          </View>

         ))}
        

       

      </View>
      <BottomNavBar/>
        

    </View>
  )
}
const styles = StyleSheet.create({
    containner: {
      flex:1,
      backgroundColor:colors.backgroundScreen,
      height:hp('100%'), //Height screen in real device 
      width:wp('100%'), //width screen in real device
    },
    WrapperHeader: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginHorizontal:17,
      marginTop:40,

    },
    HeaderIcon: {},
    WrapperTitleSearchArea: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop:20,
      marginHorizontal:17,
      //borderWidth:1,
      //borderColor:colors.textDark,
    },
    TitleSearchAreaTitle: {
      fontSize:16,
      color:colors.textDark,
      fontWeight:'bold',
    },
    TitleSearchAreaSearch: {
      //marginHorizontal:10,
      

    },
    TitleSearchAreaSearchIcon: {
      backgroundColor:colors.light,
      padding:10,
      borderRadius:30,
      
    },
    WrapperContentArea: {
      backgroundColor:colors.light,
      marginHorizontal:17,
      marginTop:20,
      height:'76%',
      marginBottom:55,
      borderRadius: 15,
      //borderColor:colors.textDark,
      //borderWidth:1,
    },
    WrapperContentAreaInfoCradIcon: {
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'center',
      marginHorizontal:20,
      marginTop:20,
      
    },
    ContentAreaInfoCradIcon: {},
    WrapperContentAreaInfoCradContent: {
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      marginHorizontal:20,
      marginTop:15,
      
      
    }, 
    ContentAreaInfoCradContentImage: {
      height:60,
      width:60,
      borderRadius:50,
    },
    ContentAreaInfoCradContentName: {
      marginTop:10,
      fontSize:14,
      fontWeight:'bold',
      color:colors.textDark,
    },
    ContentAreaInfoCradContentEmail: {
      marginTop:3,
      fontSize:12,
      fontWeight:'500',
      color:colors.textDark,

    },
    ContentAreaInfoCradContentPirth: {
      marginTop:3,
      fontSize:11,
      fontWeight:'400',
      color:colors.textDark,
    },
    ContentAreaInfoCradContentType: {
      marginTop:3,
      fontSize:11,
      fontWeight:'500',
      color:colors.textDark,
    },
    WrapperContentAreaInfoCradAbout: {
      marginHorizontal:20,
      marginTop:50,
      //borderColor:colors.textDark,
      //borderWidth:1,

    },
    ContentAreaInfoCradAboutText: {
      fontSize:14,
      fontWeight:'bold',
      color:colors.textDark,
    },
    ContentAreaInfoCradAboutSubText: {
      fontSize:12,
      fontWeight:'400',

    },
    WrapperContentAreaInfoCradFeatures: {
      //flexDirection:'column',
      marginHorizontal:20,
      marginTop:10,

    },
    ContentAreaInfoCradFeaturesTitle: {
      fontSize:14,
      fontWeight:'bold',
      color:colors.textDark,
    },
    ContentAreaInfoCradFeaturesBottomOne: {
      flexDirection:'row',
      marginTop:10,
      
    },
    ContentAreaInfoCradFeaturesBottomOneText: {
      marginRight:20,
      backgroundColor:colors.primary,
      paddingHorizontal:15,
      paddingVertical:6,
      color:colors.background,
      borderRadius:13,
      fontSize:12,
      fontWeight:'bold',

    },
    ContentAreaInfoCradFeaturesBottomTow: {
      flexDirection:'row',
      marginTop:10,
      
    },
    ContentAreaInfoCradFeaturesBottomTowText: {
      marginRight:20,
      backgroundColor:colors.primary,
      paddingHorizontal:15,
      paddingVertical:6,
      color:colors.background,
      borderRadius:13,
      fontSize:12,
      fontWeight:'bold',

    },
    ContentAreaInfoCradFeaturesBottomThree: {
      flexDirection:'row',
      marginTop:10,
      
    },
    ContentAreaInfoCradFeaturesBottomThreeText: {
      marginRight:20,
      backgroundColor:colors.primary,
      paddingHorizontal:15,
      paddingVertical:6,
      color:colors.background,
      borderRadius:13,
      fontSize:12,
      fontWeight:'bold',

    },

   

});