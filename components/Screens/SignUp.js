import React from 'react'
import { SafeAreaView, StyleSheet,Text,Image,View,StatusBar,TextInput,KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../layout/colors/colors';
import Feather from 'react-native-vector-icons/Feather'

export default function SignUp() {
  return (
    <KeyboardAvoidingView  style={styles.containner}>
        <StatusBar translucent backgroundColor="transparent" />
        {/*Header*/}
        <SafeAreaView>
            <View style={styles.WrapperHeader}>
                <TouchableOpacity>
                  <Feather name="arrow-left-circle" size={25} color={colors.textDark} style={styles.HeaderIcon}/>
                </TouchableOpacity>
                <Text style={styles.HeaderText}>SignUp</Text>
            </View>
        </SafeAreaView>
        {/*TitleArea*/}
        <ScrollView>
        <View style={styles.TitleArea}>
            <Text style={styles.TitleAreaText}>Create Account</Text>
            <Image source={require('../../layout/images/SignUp.png')}  resizeMode="contain" style={styles.TitleAreaImage}/>
        </View>
        {/*FormArea*/}
        <View style={styles.WrapperFormArea}>
            <TextInput
             placeholder="UserName"
             placeholderTextColor={colors.lightTwo}
             style={styles.FormAreaInput}

            />
            <TextInput
             placeholder="Email"
             placeholderTextColor={colors.lightTwo}
             style={styles.FormAreaInput}

            />
            <TextInput
             placeholder="PassWord"
             placeholderTextColor={colors.lightTwo}
             secureTextEntry
             style={styles.FormAreaInput}

            />
            <View style={styles.WrapperFormAreaInputLast}>
            <TextInput
             placeholder="Confirm PassWord"
             placeholderTextColor={colors.lightTwo}
             secureTextEntry
             style={styles.FormAreaInputLast}

            />
            <TouchableOpacity>
              <Text style={styles.FormAreaTextLast}>Forgot ?</Text>
            </TouchableOpacity>
            </View>
            {/*SubmitArea*/}
            <View style={styles.WrapperSumitArea}>
                <TouchableOpacity>
                  <Text style={styles.SumitAreaText}>SignUp</Text>
                </TouchableOpacity>
                {/*SubmitAreaLink*/}
                <View style={styles.WrapperSumitAreaLink}>
                  <Text style={styles.SumitAreaLink}>Already have an account </Text>
                  <TouchableOpacity>
                    <Text style={styles.SumitAreaLinkOne}> SignIn ?</Text>
                  </TouchableOpacity>
                 
                </View>
               
            </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
    containner: {
        flex:1,
        height:hp('100%'),// 100% of  height device screen
        width:wp('100%'),// 100% of width device screen

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
    TitleArea: {
       
        marginHorizontal:17,
        marginTop:20,
    },
    TitleAreaText: {
       //marginTop:40,
       marginLeft:50,
       fontSize:18,
       fontWeight:'bold',
       color:colors.textDark,
    },
    TitleAreaImage: {
        marginTop:40,
        height:150,
        width:'100%',
    },
    WrapperFormArea: {
        marginHorizontal:17,
    },
    FormAreaInput: {
        //backgroundColor:colors.light,
        borderBottomColor:colors.lightTwo,
        borderBottomWidth:0.5,
        paddingLeft:10,
        marginVertical:5,
        fontSize:12,

    },
    WrapperFormAreaInputLast: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:colors.lightTwo,
        borderBottomWidth:0.5,
    },
    FormAreaInputLast: {
        //backgroundColor:colors.light,
        width:'82%',
        paddingLeft:10,
        marginVertical:5,
        fontSize:12,

    },
    FormAreaTextLast: {
        fontSize:12,
        color:colors.textDarkOne,
        paddingRight:10,
    },
    WrapperSumitArea: {
        marginHorizontal:17,
        marginTop:50,
        justifyContent:'center',
        alignItems:'center',
    }, 
    SumitAreaText: {
        backgroundColor:colors.primary,
        color:colors.background,
        paddingHorizontal:145,
        paddingVertical:16,
        textAlign:'center',
        fontWeight:'bold',
        borderRadius:15,
        fontSize:12,
       
       
       
      
    },
    WrapperSumitAreaLink: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:80,
        //backgroundColor:colors.primary,
    },
    SumitAreaLink: {
        fontSize:12,
       
    },
    SumitAreaLinkOne: {
        fontSize:14,
        fontWeight:'bold',
        color:colors.primary,
    },
});
