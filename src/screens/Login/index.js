import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StatusBar, Text, View } from 'react-native';
import { NormalButton } from '../../components/Button';
import Container from '../../components/Container';
import Logo from '../../components/Logo/Logo';
import {connect} from 'react-redux';
import TextInput from '../../components/TextInput';
import { GET_USER_INFO } from '../../redux/user/actions';

const mapStateToParams= (state, props)=>{
    const {id, name, email} = state.user;

    return {id, name, email};
}

const mapDispatchToProps = (dispatch, props) => ({
    getUserInfo: () => {
      dispatch({
        type: GET_USER_INFO,
        payload: {},
      });
    },
  });

function Login({navigation, id, name, email, getUserInfo}) {

    const [i_email, set_email] = useState("");
    const [password, set_password] = useState("");
    const [error, set_error]= useState({});

    useEffect(()=>{
        //getUserInfo();
        if(email && name){
          navigation.replace("Home");  
        }
    },[id, name, email])

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
            getUserInfo();
            //navigation.replace("Home")
        }
    }

    function validated(){
        var isValid = true;
        var tempError = {...error};
        if(!i_email){
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
                    defaultValue={i_email}
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

export default connect(mapStateToParams, mapDispatchToProps)(Login);