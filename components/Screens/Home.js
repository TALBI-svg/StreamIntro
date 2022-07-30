import React from 'react'
import { SafeAreaView, StyleSheet,Text,Image,Modal,View,FlatList,TextInput,KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import colors from '../../layout/colors/colors';
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import cardInfoData from '../../layout/data/cardInfoData';
import morePlansData from '../../layout/data/morePlansData';
import BottomNavBar from './BottomNavBar';

export default function Home() {
  const navigation = useNavigation();

  const Posts = () => {
    navigation.navigate('Posts')
  }

  
  const CardInfo = () => {
    navigation.navigate('Profile')
  }



    
    const  renderCardItem = ({item}) => {
        return(
            <TouchableOpacity onPress={CardInfo}>
            <View style={styles.CardInfoContent}>
                <View style={styles.CardInfoContentLeft}>
                    <Image source={item.image} style={styles.CardInfoContentLeftImage}/>
                    <View style={styles.CardInfoContentLeftBottom}>
                        <Text style={styles.CardInfoContentLeftBottomName}>{item.name}</Text>
                        <Text style={styles.CardInfoContentLeftBottomContent}>{item.content}</Text>
                    </View>
                    <View style={styles.CardInfoContentLeftRight}>
                      <Entypo name="star" size={17} color={colors.yellow} style={styles.CardInfoContentLeftRightIcon}/>
                      <Entypo name="star" size={17} color={colors.light} style={styles.CardInfoContentLeftRightIcon}/>
                      <Entypo name="star" size={17} color={colors.light} style={styles.CardInfoContentLeftRightIcon}/>
                     </View>
                </View>
                <View style={styles.CardInfoContentBottom}>
                  <View style={styles.CardInfoContentBottomTop}>
                    <Text style={styles.CardInfoContentBottomAboutTitle}>{item.aboutTitle}</Text>
                    <Text style={styles.CardInfoContentBottomAbout}>{item.about}</Text>
                  </View>
                  <View style={styles.CardInfoContentBottomBottom}>

                  <TouchableOpacity>
                    <AntDesign name="pluscircleo" size={17} color={colors.textDark} style={styles.CardInfoContentBottomAdd}/>
                  </TouchableOpacity>
                  
                  <TouchableOpacity>
                    <AntDesign name="heart" size={18} color={colors.textDark} style={styles.CardInfoContentBottomLike}/>
                  </TouchableOpacity>

                  </View>
                </View>
            </View>
            </TouchableOpacity>
        )
    }

    const renderPlansItem = ({item}) => {
        return(
            <TouchableOpacity>
            <View style={styles.PlansAreaContent}>
               <Image source={item.image} resizeMode="contain" style={styles.PlansAreaContentImage}/>
               <Text style={styles.PlansAreaContentTitle}>{item.title}</Text>
               <Text style={styles.PlansAreaContentSubTitle}>{item.subTitle}</Text>
            </View>
            </TouchableOpacity>
        )
    }

    
  return (
    <View style={styles.containner}>
        {/*Header*/}
        <SafeAreaView>
            <View style={styles.WrapperHeader}>
                <View style={styles.HeaderLeft}>
                    <Image source={require('../../layout/images/logo_1.png')} resizeMode="contain" style={styles.HeaderLeftImage}/>
                    <Text style={styles.HeaderLeftText}>Stream Intro</Text>
                </View>
                <TouchableOpacity onPress={Posts}>
                  <Image source={require('../../layout/images/Profile_1.png')}  style={styles.HeaderRightImage}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        {/*CardInfo*/}
        <View style={styles.WrapperCardInfo}>
            <Text style={styles.CardInfoText}>Know more ...</Text>
            <ScrollView>
            <FlatList
             data={cardInfoData}
             renderItem={renderCardItem}
             keyExtractor={item => item.id}
             horizontal={true}
             showsHorizontalScrollIndicator={false}
            /></ScrollView>
        </View>
        <ScrollView nestedScrollEnabled={true}  showsVerticalScrollIndicator={false}>
        {/*VideoArea*/}
        <View style={styles.WrapperVideoArea}>
            <Text style={styles.VideoAreaTitle}>Make your own intro</Text>
            <View style={styles.VideoAreaBottom}>
            <Image source={require('../../layout/images/make_intro.png')} resizeMode="contain" style={styles.VideoAreaBottomImage}/>
            </View>
            <View style={styles.VideoAreaBottomBottom}>
              <TouchableOpacity>
                <FontAwesome name="heart-o" size={21} color={colors.textDark} style={styles.VideoAreaBottomBottomIcon}/>
              </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name="message-circle" size={21} color={colors.textDark} style={styles.VideoAreaBottomBottomIcon}/>
                </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="send" size={21} color={colors.textDark} style={styles.VideoAreaBottomBottomIcon}/>
              </TouchableOpacity>
            </View>
        </View>
        {/*PlansArea*/}
        <View style={styles.WrapperPlansArea}>
            <Text style={styles.PlansAreaText}>More Plans</Text>
            <ScrollView>
            <FlatList
             data={morePlansData}
             renderItem={renderPlansItem}
             keyExtractor={item => item.id}
             horizontal={false}
             numColumns={2}
             showsVerticalScrollIndicator={false}
            /></ScrollView>
        </View>
        {/*PostArea*/}
        
           

        
    </ScrollView> 

    <BottomNavBar/>
    </View>
  )
}
const styles = StyleSheet.create({
    containner: {
        flex:1,
        backgroundColor:colors.backgroundScreen,
        height: hp('100%'),
        width: wp('100%'),
    },
    WrapperHeader: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:17,
        marginTop:20,
        

    }, 
    HeaderLeft: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    }, 
    HeaderLeftImage: {
        height:70,
        width:70,
    }, 
    HeaderLeftText: {
        fontSize:16,
        fontWeight:'bold',
        color:colors.secondary,
    }, 
    HeaderRightImage: {
        height:40,
        width:40,
        borderRadius:50,
    },
    WrapperCardInfo: {
        marginHorizontal:17,
        marginTop:10,
        borderBottomColor:colors.lightTwo,
        borderBottomWidth:0.3,

    }, 
    CardInfoText: {
        fontSize:14,
        fontWeight:'bold',
        color:colors.textDark,
    },
    CardInfoContent: {
        //flexDirection:'row',
        //justifyContent:'space-between',
        //alignItems:'center',
        width:275,
        height:162,
        marginVertical:10,
        marginRight:10,
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:10,
        backgroundColor:colors.lightOne,
        
    }, 
    CardInfoContentLeft: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        //marginHorizontal:5,
        //marginTop:5,

    }, 
    CardInfoContentLeftImage: {
        height:35,
        width:35,
        borderRadius:50,

    },
    CardInfoContentLeftBottom: {
        flexDirection:'column',
        justifyContent: 'flex-start',
        alignItems:'flex-start',
        marginHorizontal:5,
        
    },
    CardInfoContentLeftBottomName: {
        fontSize:12,
        fontWeight:'bold',
        color:colors.textDark,

    },
    CardInfoContentLeftBottomContent: {
        fontSize:10,
        fontWeight:'500',
        color:colors.textDark,
    },
    CardInfoContentLeftRight: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:40,
        width:60,
    },
    CardInfoContentLeftRightIcon: {},
    CardInfoContentBottom: {
        marginTop:20,
    },
    CardInfoContentBottomTop: {
        flexDirection:'column',

    },
    CardInfoContentBottomAboutTitle: {
        fontSize:11,
        fontWeight:'600',
    },
    CardInfoContentBottomAbout: {
        fontSize:10,
        fontWeight:'400',
        width:150,
        height:45,
    },
    CardInfoContentBottomBottom: {
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        marginTop:5,
    },
    CardInfoContentBottomAdd: {
        marginRight:7,
    },
    CardInfoContentBottomLike: {},
    WrapperVideoArea: {
        marginHorizontal:17,
        marginTop:10,
    },
    VideoAreaTitle: {
        fontSize:14,
        fontWeight:'bold',
        color:colors.textDark,
    },
    VideoAreaBottom: {
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
    },
    VideoAreaBottomImage: {
        height:250,
        width:380,
        borderColor:colors.textDark,
        borderWidth:1,
    },
    VideoAreaBottomBottom: {
        flexDirection:'row',
        justifyContent:'flex-start',
        justifyContent:'flex-start',
        marginTop:10,
    },
    VideoAreaBottomBottomIcon: {
        marginRight:10,
    },
    WrapperPlansArea: {
        marginHorizontal:17,
        marginVertical:20,
        marginBottom:45,
    },  
    PlansAreaText: {
        fontSize:14,
        fontWeight:'bold',
        color:colors.textDark,
    },
    PlansAreaContent: {
        backgroundColor:colors.light,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
        marginRight:5,
        borderRadius:5,
        width:186,
        height:150,
        //borderColor:colors.textDark,
        //borderWidth:1,
    },
    PlansAreaContentImage: {
        height:30,
        width:30,
    },
    PlansAreaContentTitle: {
        fontSize:12,
        fontWeight:'500',
        color:colors.textDark,
        marginTop:10,
    },
    PlansAreaContentSubTitle: { 
        fontSize:10,
        fontWeight:'300',
        color:colors.textDark,
        textAlign:'center',
        marginTop:5,
        width:140,
    },
    WrapperPostArea: {
        marginHorizontal:17,
        marginTop:20,
    },
    PostArea: {}, 
    PostAreaTop: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'',
    }, 
    PostAreaTopImage: {},
});
