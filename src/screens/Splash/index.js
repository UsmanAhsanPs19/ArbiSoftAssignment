import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Logo from '../../components/Logo/Logo';
import colors from '../../utils/colors';
import {connect} from 'react-redux';

const mapStateToParams= (state, props)=>{
    const {id, name, email} = state.user;
    const {primaryColor}= state.theme;

    return {id, name, email, primaryColor};
}

const mapDispatchToProps = (dispatch, props) => ({
  });

function SplashScreen({navigation, id, name, email, primaryColor}){

    useEffect(()=>{
        setTimeout(() => {
            if(email && name){
                navigation.replace("Home")
            }
            else
            navigation.replace('Login');
        }, 3000);
    },[])

    return(
        <View style={{flex:1, backgroundColor:primaryColor, alignItems:'center', justifyContent:'center'}}>
            <Logo tintColor={primaryColor} Icontext={"Currency Converter"}/>
            <ActivityIndicator color="white" size={"large"} style={{marginTop:10}}/>
        </View>
    )
}

export default connect(mapStateToParams, mapDispatchToProps)(SplashScreen);