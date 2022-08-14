import React, { Component } from 'react';
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import currencies from '../../currencies_data/currencies';
import { CHANGE_BASE, CHANGE_QUOTE } from '../../redux/currency/action';
import colors from '../../utils/colors';

function CurrencyList({ navigation, route,changeBase, changeQuote, primaryColor, baseCurrency,quoteCurrency }) {

    let comparisonCurrency = baseCurrency;
    const { type } = route.params;
    if (type === 'quote') {
      comparisonCurrency = quoteCurrency;
    }

    function handlePress(currency) {
        if (type === 'base') {
            changeBase(currency);
        } else if (type === 'quote') {
            changeQuote(currency);
        }

        navigation.goBack(null);
    };

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="default" />
            <ScrollView>
                {
                    currencies.map(val => (
                        <>
                            <TouchableHighlight onPress={() => { handlePress(val) }} underlayColor={colors.border}>
                                <View style={{
                                    paddingHorizontal: 20,
                                    paddingVertical: 16,
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    backgroundColor: colors.white,
                                }}>
                                    <Text style={{
                                        color: val === comparisonCurrency? primaryColor:  colors.darkText,
                                        fontWeight:val === comparisonCurrency?"bold" : "normal",
                                        fontSize:val === comparisonCurrency?20: 16,
                                    }}>{val}</Text>
                                </View>
                            </TouchableHighlight>
                            <View style={{
                                backgroundColor: colors.border,
                                height: 1,
                                flex: 1,
                                marginLeft: 20
                            }} />
                        </>
                    ))
                }
            </ScrollView>
        </View>
    );
}

const mapStateToParams= (state, props)=>{
    const {primaryColor} = state.theme;
    const {baseCurrency,quoteCurrency} = state.currency;
    return {primaryColor, baseCurrency,quoteCurrency};
}
const mapDispatchToProps = (dispatch, props) => ({

    changeBase:(currency)=>{
        dispatch({
            type: CHANGE_BASE,
            payload:{currency}
        })
    },
    changeQuote: (currency)=>{
        dispatch({
            type: CHANGE_QUOTE,
            payload:{currency}
        })
    },
  });
export default connect(mapStateToParams,mapDispatchToProps)(CurrencyList);
