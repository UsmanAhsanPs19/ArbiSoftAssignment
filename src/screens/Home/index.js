import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { ButtonWithIcon, NormalButton } from '../../components/Button';
import Container from '../../components/Container';
import Logo from '../../components/Logo/Logo';
import TextInput from '../../components/TextInput';
import styled from 'styled-components';

export default function HomeScreen({ navigation }) {
    let quotePrice = '...';
    const [amount, set_amount] = useState(1);

    const handleChangeText = (text) => {
        set_amount(text);
    };
    return (
        <Container backgroundColor={"#4F6D7B"}>
            <StatusBar barStyle="light-content" />
            <ImageWrapper
            onPress={()=>{navigation.navigate("Settings")}}
            >
                <Image
                    source={require("../../../assets/settings.png")}
                    resizeMode={"center"}
                    style={{ tintColor: 'white'}}
                />
            </ImageWrapper>
            <Logo tintColor={"#4F6D7B"} />
            <KeyboardAvoidingView>
                <TextInput
                    buttonText={"PKR"}
                    isTag={true}
                    editable={true}
                    onPress={() => { navigation.navigate("CurrencyList", { type: "base" }) }}
                    defaultValue={amount}
                    keyboardType="numeric"
                    onChangeText={handleChangeText}
                    textColor={"black"}
                />
                <Text style={{ marginVertical: 6, color: 'red' }}></Text>
                <TextInput
                    editable={false}
                    buttonText={"USD"}
                    isTag={true}
                    onPress={() => { navigation.navigate("CurrencyList", { type: "quote" }) }}
                    value={quotePrice}
                    textColor={"black"}
                />
                <Text style={{ marginTop: 6, color: 'red' }}></Text>
                <ButtonWithIcon
                    text={"Reverse Currencies"}
                    onPress={() => { alert("Yes") }}
                />
            </KeyboardAvoidingView>
        </Container>
    )
}

const ImageWrapper= styled.TouchableOpacity`
    position: absolute;
    top: 2px;
    right: 2px;
`