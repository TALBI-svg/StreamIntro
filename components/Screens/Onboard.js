import React from 'react'
import { StyleSheet,Text,View,StatusBar,Image } from 'react-native'
import colors from '../../layout/colors/colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppIntroSlider from 'react-native-app-intro-slider';

const data = [
    {
      title: "Make intro easy",
      text: "With Stream intr'o you can create and make intos easilly for your video's",
      image: require('../../layout/images/onboard_3.png'),
      bg: '#59b2ab',
    },
    {
      title: "Create your own intro's",
      text: "You can cutomize itro's by select what is the subject itro's about",
      image: require('../../layout/images/onboard_2.png'),
      bg: '#febe29',
    },
    {
      title: "Don't worry about videos intro",
      text: "You can create and shear you intro's and post news about it",
      image: require('../../layout/images/onboard_1.png'),
      bg: '#22bcb5',
    },
  ];

export default function Onboard () {

    const renderItem = ({item}) => {
        return(
            <View style={styles.WrapperSlide}>
                  <Image source={item.image} resizeMode="contain" style={styles.SlideImage}/>
                <View style={styles.SlideBottom}>
                    <Text style={styles.SlideBottomTitle}>{item.title}</Text>
                    <Text style={styles.SlideBottomText}>{item.text}</Text>
                </View>
            </View>
        )
    }

    const keyExtractor = (item) => item.title;
    const renderDoneButton = () => {
        return (
            <View style={styles.WrapperTextButtons}>
                <Text style={styles.TextDoneButtons}>Done</Text>
            </View>
        )
    }
    const renderNextButton = () => {
        return (
            <View style={styles.WrapperTextButtons}>
                <Text style={styles.TextButtons}>Next</Text>
            </View>
        )
    }
    const renderPrevButton = () => {
        return (
            <View style={styles.WrapperTextButtons}>
                <Text style={styles.TextButtons}>Prev</Text>
            </View>
        )
    }

  return (
    <View style={styles.containner}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.WrapperAreaSkip}>
          <Text style={styles.AreaSkipText}>Stream Intro</Text>
        </View>

        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          data={data}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          renderPrevButton={renderPrevButton}
          showPrevButton
        />
    
    </View>
  )
}
const styles = StyleSheet.create({
    containner: {
        //flex:1,
        backgroundColor:colors.backgroundScreen,
        height: hp('100%'), // 70% of height device screen
        width: wp('100%'),   // 80% of width device screen
    },
    WrapperAreaSkip: {
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        marginTop:20,
        marginHorizontal:20,
    },
    AreaSkipText: {
        fontSize:14,
        fontWeight:'bold',
        color:colors.secondary,  
    },
    WrapperSlide: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:17,
    }, 
    SlideImage: {
        height:200,
        width:300,
        //borderColor:colors.textDark,
        //borderWidth:1,
    },
    SlideBottom: {
        justifyContent:'center',
        alignItems:'center',
        marginTop:60,  
    },
    SlideBottomTitle: {
        fontSize:17,
        fontWeight:'bold',
        color:colors.textDark,
    }, 
    SlideBottomText: {
        fontSize:11,
        fontWeight:'bold',
        color:colors.lightTwo,
        textAlign:'center',
        marginHorizontal:35,
        marginTop:5,
        
    },
    TextDoneButtons: {
        fontSize:12,
        fontWeight:'bold',
        color:colors.secondary, 

    },
    TextButtons: {
        fontSize:12,
        fontWeight:'bold',
        color:colors.textDark,

    },
    WrapperTextButtons: {
        marginHorizontal:10,
    },

});
