import React from 'react'
import { SafeAreaView, StyleSheet,Text,Image,Modal,View,StatusBar,KeyboardAvoidingView, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import colors from '../../layout/colors/colors';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import PostData from '../../layout/data/PostData'
import BottomNavBar from './BottomNavBar';


export default function Posts() {
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
           <Text style={styles.HeaderText}>Post's</Text>
       </View>
   </SafeAreaView>
   <ScrollView showsVerticalScrollIndicator={false}>
   {/*PostArea*/}
   <View style={styles.WrapperPostArea}>
    {PostData.map((item)=> (
        <View style={styles.PostArea} key={item.id}>
            {/*PostAreaTop*/}
            <View style={styles.PostAreaTop} key={item.id}>
            <View style={styles.PostAreaTopTitle}>
                <TouchableOpacity>
                  <Image source={item.profile}style={styles.PostAreaTopTitleImage}/>
                </TouchableOpacity>

                <View style={styles.PostAreaTopTitleBottom}>
                  <Text style={styles.PostAreaTopTitleBottomName}>{item.name}</Text>
                  <Text style={styles.PostAreaTopTitleBottomTime}>{item.time}</Text>
                </View>
            </View>

            <View>
              <TouchableOpacity>
                <Feather name="more-vertical" size={18} color={colors.textDark}/>
              </TouchableOpacity>
            </View>
        </View>
        {/*PostAreaMiddle*/}
        <View style={styles.PostAreaMiddle}>
            <Image source={item.image} resizeMode="contain" style={styles.PostAreaMiddleImage}/>
        </View>
        {/*PostAreaBottom*/}
        <View style={styles.PostAreaBottom}>
          <View style={styles.PostAreaBottomTop}>
            <TouchableOpacity>
              <FontAwesome name="heart-o" size={20} color={colors.textDark} style={styles.PostAreaBottomIcon}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="message-circle" size={20} color={colors.textDark} style={styles.PostAreaBottomIcon}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="send" size={20} color={colors.textDark} style={styles.PostAreaBottomIcon}/>
            </TouchableOpacity>
          </View>
          {/*DescripeArea*/}
          <View style={styles.WrapperDescripeArea}>
            <Text style={styles.WrapperDescripeAreaLikes}>{item.likes} like</Text>
            <Text style={styles.WrapperDescripeAreaDescripe}>{item.descripe}</Text>
          </View>

         </View>
        </View>
    ))}
   </View>
   
        
     
    </ScrollView>
     <BottomNavBar/>
    
    </View>
  )
}
const styles = StyleSheet.create({
    containner: {
        flex:1,
        backgroundColor:colors.backgroundScreen,
        height:hp('100%'),
        width:wp('100%'),
    },
    WrapperHeader: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:17,
        marginTop:40,

    },
    HeaderIcon: {},
    HeaderText: {
        fontSize:16,
        fontWeight:'bold',
        color:colors.textDark,
    },
    WrapperPostArea: {
        marginHorizontal:17,
        marginTop:20,
        marginBottom:35,
    },
    PostArea: {
        flexDirection:'column',
        marginVertical:10,
    },
    PostAreaTop: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    PostAreaTopTitle: {
      flexDirection:'row',
      alignItems:'center',
    },
    PostAreaTopTitleImage: {
        height:35,
        width:35,
        borderRadius:30,
    },
    PostAreaTopTitleBottom: {
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:10,
        marginBottom:10,
    },
    PostAreaTopTitleBottomName: {
        fontSize:12,
        fontWeight:'bold',
        color:colors.textDark,
    },
    PostAreaTopTitleBottomTime: {
        fontSize:10,
        fontWeight:'400',
        color:colors.lightTwo,
        marginLeft:10,
    },
    PostAreaMiddle: {
        marginTop:20,
        

    },
    PostAreaMiddleImage: {
        height:400,
        width:'100%',

    },
    PostAreaBottom: {
        flexDirection:'column',

    },
    PostAreaBottomTop: {
        flexDirection:'row',
        marginTop:15,

    },
    PostAreaBottomIcon: {
        marginRight:15,
    },
    WrapperDescripeArea: {
        marginTop:20,
    },
    WrapperDescripeAreaLikes: {
        fontSize:12,
        fontWeight:'700',
        color:colors.textDark,
    },
    WrapperDescripeAreaDescripe: {
        fontSize:11,
        fontWeight:'400',
        marginTop:10,
    },
});