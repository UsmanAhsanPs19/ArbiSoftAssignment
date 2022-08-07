import React, { useState } from 'react';
import { KeyboardAvoidingView, StatusBar, View } from 'react-native';
import { NormalButton } from '../../components/Button';
import Container from '../../components/Container';
import TextInput from '../../components/TextInput';

export default function LoginScreen() {

    const [email, set_email] = useState("")
    const [password, set_password] = useState("")

    const handleChangeEmail = (text) => {
        console.log(text)
        set_email(text)
    };

    const handleChangePassword = (text) => {
        console.log(text)
        set_password(text)
    };
    return (
        <Container backgroundColor={"blue"}>
            <StatusBar barStyle="light-content" />
            <KeyboardAvoidingView behavior="padding">
                <TextInput
                    placeholder="Email"
                    defaultValue={email}
                    onChangeText={handleChangeEmail}
                    textColor="black"
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    defaultValue={email}
                    onChangeText={handleChangePassword}
                    textColor="black"
                />

                <NormalButton
                text={"Login"}
                onPress={()=>alert("welcome")}
                />
            </KeyboardAvoidingView>
        </Container>
    )
}