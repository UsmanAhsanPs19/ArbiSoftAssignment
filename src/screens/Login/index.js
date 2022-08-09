import React, { useState } from 'react';
import { KeyboardAvoidingView, StatusBar, Text, View } from 'react-native';
import { NormalButton } from '../../components/Button';
import Container from '../../components/Container';
import Logo from '../../components/Logo/Logo';
import TextInput from '../../components/TextInput';

export default function LoginScreen({navigation}) {

    const [email, set_email] = useState("");
    const [password, set_password] = useState("");
    const [error, set_error]= useState({});

    const handleChangeEmail = (text) => {
        console.log(text)
        set_email(text);
        set_error({})
    };

    const handleChangePassword = (text) => {
        console.log(text)
        set_password(text);
        set_error({})
    };

    const handleLogin= ()=>{
        if(validated()){
            navigation.replace("Home")
        }
    }

    function validated(){
        var isValid = true;
        var tempError = {...error};
        if(!email){
            tempError.email= "Please write valid email.";
            isValid = false;
        }
        if(!password){
            tempError.password= "Please write valid password.";
            isValid= false;
        }
        
        if(!isValid){
            set_error(tempError);
        }else{
            set_error({})
        }
        return isValid;
    }

    return (
        <Container backgroundColor={"#4F6D7B"}>
            <StatusBar barStyle="light-content" />

            <Logo tintColor={"#4F6D7B"}/>
            <KeyboardAvoidingView behavior="padding" style={{backgroundColor:'white', paddingHorizontal:20, paddingVertical:20, borderRadius:30, elevation:3}}>
                <TextInput
                    placeholder="Email"
                    defaultValue={email}
                    onChangeText={handleChangeEmail}
                    textColor="black"
                />
                <Text style={{marginVertical: 6, color:'red'}}>{error.email}</Text>
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    defaultValue={password}
                    onChangeText={handleChangePassword}
                    textColor="black"
                />
                <Text style={{marginTop:6, color:'red' }}>{error.password}</Text>
                <NormalButton
                text={"Login"}
                onPress={handleLogin}
                />
            </KeyboardAvoidingView>
        </Container>
    )
}