import React,{ useState }  from 'react'
import { SafeAreaView, StyleSheet,Text,Image,Modal,View,StatusBar,TextInput,KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../layout/colors/colors';
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SignIn() {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <KeyboardAvoidingView  style={styles.containner}>
        <StatusBar translucent backgroundColor="transparent" />
        {/*Header*/}
        <SafeAreaView>
            <View style={styles.WrapperHeader}>
                <TouchableOpacity>
                  <Feather name="arrow-left-circle" size={25} color={colors.textDark} style={styles.HeaderIcon}/>
                </TouchableOpacity>
                <Text style={styles.HeaderText}>SignIn</Text>
            </View>
        </SafeAreaView>
        {/*TitleArea*/}
        <ScrollView>
        <View style={styles.TitleArea}>
            <Text style={styles.TitleAreaText}>Welcome Back</Text>
            <Image source={require('../../layout/images/SignIn.png')}  resizeMode="contain" style={styles.TitleAreaImage}/>
        </View>
        {/*FormArea*/}
        <View style={styles.WrapperFormArea}>
            <TextInput
             placeholder="UserName"
             placeholderTextColor={colors.lightTwo}
             style={styles.FormAreaInput}

            />
            {/*<TextInput
             placeholder="Email"
             placeholderTextColor={colors.lightTwo}
             style={styles.FormAreaInput}

            />
            <TextInput
             placeholder="PassWord"
             placeholderTextColor={colors.lightTwo}
             secureTextEntry
             style={styles.FormAreaInput}
            />*/}

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

                <TouchableOpacity style={styles.SumitAreaTouchab}>
                  <Text style={styles.SumitAreaTouchabText}>SignIn</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.SumitAreaTouchabSocialMedia} onPress={() => setModalVisible(!modalVisible)}>
                  <Text  style={styles.SumitAreaTouchabSocialMediaText}>SignUp with social media</Text>
                </TouchableOpacity>

                {/*SubmitAreaLink*/}
                <View style={styles.WrapperSumitAreaLink}>
                  <Text style={styles.SumitAreaLink}>Back to </Text>
                  {/*Modal Social media Area*/}
                   {/*First Modal "Settings story"*/}
                   <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    setModalVisible(!modalVisible); 
                    }}>
                     <View style={styles.modalViewContent}>
                       <View style={styles.centeredView}>
                         <View style={styles.modalView}>
                            <TouchableOpacity style={styles.modalViewIconTouchab}  onPress={() => setModalVisible(!modalVisible)}>
                              <AntDesign name="arrowleft" size={20} color={colors.textDark} style={styles.modalViewIcon}/>
                            </TouchableOpacity>
                           <View style={styles.modalViewBottom}>
                             <Text style={styles.modalViewBottomText}>-- SignIn with social media --</Text>
                             <View style={styles.modalViewBottomBottom}>
                               <TouchableOpacity>
                                <Image source={require('../../layout/images/facebook.png')} resizeMode="contain" style={styles.modalViewBottomBottomImage}/>
                               </TouchableOpacity>

                               <TouchableOpacity>
                                <Image source={require('../../layout/images/google.png')} resizeMode="contain" style={styles.modalViewBottomBottomImage}/>
                               </TouchableOpacity>

                               <TouchableOpacity>
                                <Image source={require('../../layout/images/twitter.png')} resizeMode="contain" style={styles.modalViewBottomBottomImage}/>
                               </TouchableOpacity>

                               <TouchableOpacity>
                                <Image source={require('../../layout/images/github.png')} resizeMode="contain" style={styles.modalViewBottomBottomImage}/>
                               </TouchableOpacity>
                            </View>
                           </View>
                         </View>
                       </View>
                     </View>
                    </Modal>

                  <TouchableOpacity>
                    <Text style={styles.SumitAreaLinkOne}> SignUp ?</Text>
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
    SumitAreaTouchab: {
        backgroundColor:colors.primary,
        width:'100%',
        paddingVertical:16, 
        borderRadius:15,
        

          
    },
    SumitAreaTouchabText: {
        color:colors.background,
        textAlign:'center',
        fontWeight:'bold',
       
        fontSize:12, 
        

    },
    SumitAreaTouchabSocialMedia: { 
        backgroundColor:colors.lightOne,
        marginTop:10,
        width:'100%',
        paddingVertical:16,
        borderRadius:15,
    },
    SumitAreaTouchabSocialMediaText: {
        color:colors.textDark,
        textAlign:'center',
        fontWeight:'bold',
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
    modalViewContent: {
        backgroundColor:colors.textDark,
        height:'100%',
        opacity:0.9,
    },
    centeredView: {
        marginTop: 400,
    },
    
    modalView: {
        marginHorizontal: 20,
        backgroundColor:colors.background,
        borderRadius:10,
        height:150,
        
    },
    modalViewIconTouchab: {
        width:50,
        //borderColor:colors.textDark,
        //borderWidth:1,
    },
    modalViewIcon: {
        marginHorizontal:10,
        marginVertical:10,
    },
    modalViewBottom: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    modalViewBottomText: {
        fontSize:12,
        fontWeight:'bold',
        color:colors.primary,
    },
    modalViewBottomBottom: {
        flexDirection:'row',

    },
    modalViewBottomBottomImage: {
        height:25,
        width:25,
        marginHorizontal:10,
        marginTop:30,
    },
    SumitAreaLinkOne: {
        fontSize:14,
        fontWeight:'bold',
        color:colors.primary,
    },
});
