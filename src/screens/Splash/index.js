import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Logo from '../../components/Logo/Logo';
import colors from '../../utils/colors';

export default function SplashScreen({navigation}){

    useEffect(()=>{
        setTimeout(() => {
            navigation.replace('Login');
        }, 3000);
    },[])

    return(
        <View style={{flex:1, backgroundColor:colors.primaryBlue, alignItems:'center', justifyContent:'center'}}>
            <Logo tintColor={colors.primaryBlue} Icontext={"Currency Converter"}/>
            <ActivityIndicator color="white" size={"large"} style={{marginTop:10}}/>
        </View>
    )
}