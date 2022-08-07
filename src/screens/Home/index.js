import React, { useState } from 'react';
import { KeyboardAvoidingView, StatusBar, Text, View } from 'react-native';
import { ButtonWithIcon, NormalButton } from '../../components/Button';
import Container from '../../components/Container';
import Logo from '../../components/Logo/Logo';
import TextInput from '../../components/TextInput';

export default function HomeScreen({navigation}){
    let quotePrice = '...';
    const [amount, set_amount]= useState(1);

    const handleChangeText = (text) => {
        set_amount(text);
      };
    return(
        <Container backgroundColor={"#4F6D7B"}>
            <StatusBar barStyle="light-content" />
            <Logo tintColor={"#4F6D7B"}/>
            <KeyboardAvoidingView>
                <TextInput
                    buttonText={"PKR"}
                    isTag= {true}
                    editable={true}
                    onPress={()=>{alert("Go into base currency")}}
                    defaultValue={amount}
                    keyboardType="numeric"
                    onChangeText={handleChangeText}
                    textColor={"black"}
                />
                <Text style={{marginVertical: 6, color:'red'}}></Text>
                <TextInput
                    editable={false}
                    buttonText={"USD"}
                    isTag= {true}
                    onPress={()=>{}}
                    value={quotePrice}
                    textColor={"black"}
                />
                <Text style={{marginTop:6, color:'red' }}></Text>
                <ButtonWithIcon
                text={"Reverse Currencies"}
                onPress={()=>{alert("Yes")}}
                />
            </KeyboardAvoidingView>
        </Container>
    )
}