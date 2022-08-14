import React, { useEffect, useState } from 'react';
import { Image, KeyboardAvoidingView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { ButtonWithIcon, NormalButton } from '../../components/Button';
import Container from '../../components/Container';
import Logo from '../../components/Logo/Logo';
import TextInput from '../../components/TextInput';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { GET_INITIAL_CONVERSION, REVERSE_CURRENCY, CHANGE_CURRENCY_AMOUNT } from '../../redux/currency/action';

const mapStateToParams = (state, props) => {
    const { primaryColor } = state.theme;
    const { baseCurrency, quoteCurrency, amount, error, date } = state.currency;
    return { primaryColor, baseCurrency, quoteCurrency, amount, error, date };
}
const mapDispatchToProps = (dispatch, props) => ({
    getInitialConversion: (baseCurrency, quoteCurrency, amount) => {
        dispatch({
            type: GET_INITIAL_CONVERSION,
            payload: { baseCurrency, quoteCurrency, amount },
        });
    },
    reverseCurrency: () => {
        dispatch({
            type: REVERSE_CURRENCY,
            payload: {},
        });
    },
    changeQuoteAmount: (quote_amount) => {
        dispatch({
            type: CHANGE_CURRENCY_AMOUNT,
            payload: { quote_amount }
        })
    }
});

function HomeScreen({ navigation, primaryColor, getInitialConversion, baseCurrency, quoteCurrency, amount, error, date, reverseCurrency, changeQuoteAmount }) {
    const [quote_amount, set_quote_amount] = useState(1);

    useEffect(() => {
        getInitialConversion(baseCurrency, quoteCurrency, 1);
    }, [])

    const handleChangeText = (text) => {
        // set_amount(text);
        if (text && !Number(text).isNaN) {
            console.log("Im ")
            set_quote_amount(text)
            changeQuoteAmount(parseInt(text))
        }
    };

    return (
        <Container backgroundColor={primaryColor}>
            <StatusBar barStyle="light-content" />
            <ImageWrapper
                onPress={() => { navigation.navigate("Settings") }}
            >
                <Image
                    source={require("../../../assets/settings.png")}
                    resizeMode={"center"}
                    style={{ tintColor: 'white' }}
                />
            </ImageWrapper>
            <Logo tintColor={primaryColor} />
            <KeyboardAvoidingView>
                <TextInput
                    buttonText={quoteCurrency}
                    isTag={true}
                    editable={true}
                    onPress={() => { navigation.navigate("CurrencyList", { type: "quote" }) }}
                    defaultValue={quote_amount}
                    keyboardType="numeric"
                    onChangeText={handleChangeText}
                    textColor={"black"}
                />
                <Text style={{ marginVertical: 6, color: 'red' }}></Text>
                <TextInput
                    editable={false}
                    buttonText={baseCurrency}
                    isTag={true}
                    onPress={() => { navigation.navigate("CurrencyList", { type: "base" }) }}
                    value={amount}
                    textColor={"black"}
                />
                <Text style={{ marginTop: 6, color: 'red' }}></Text>
                <ButtonWithIcon
                    text={"Reverse Currencies"}
                    onPress={() => { reverseCurrency() }}
                />
            </KeyboardAvoidingView>
        </Container>
    )
}

const ImageWrapper = styled.TouchableOpacity`
    position: absolute;
    top: 2px;
    right: 2px;
`

export default connect(mapStateToParams, mapDispatchToProps)(HomeScreen);