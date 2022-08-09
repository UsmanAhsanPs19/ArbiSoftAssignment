import React, { Component } from 'react';
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import currencies from '../../currencies_data/currencies';
import colors from '../../utils/colors';

function CurrencyList({ navigation, route }) {
    let comparisonCurrency = "USD";
    if (route.params.type === 'quote') {
        comparisonCurrency = "PKR";
    }
    function handlePress (currency){
        const { type } = route.params;
        if (type === 'base') {
            //   this.props.dispatch(changeBaseCurrency(currency));
        } else if (type === 'quote') {
            //   this.props.dispatch(changeQuoteCurrency(currency));
        }

        navigation.goBack(null);
    };

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="default" />
            <ScrollView>
                {
                    currencies.map(val=>(
                        <>
                        <TouchableHighlight onPress={() => {handlePress(val) }} underlayColor={colors.border}>
                        <View style={{
                            paddingHorizontal: 20,
                            paddingVertical: 16,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'row',
                            backgroundColor: colors.white,
                        }}>
                            <Text style={{
                                color: colors.darkText,
                                fontSize: 16,
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
            {/* <FlatList
                data={currencies}
                renderItem={({ item }) => (
                    // <TouchableHighlight onPress={() => { }} underlayColor={colors.border}>
                    //     <View style={{
                    //         paddingHorizontal: 20,
                    //         paddingVertical: 16,
                    //         justifyContent: 'space-between',
                    //         alignItems: 'center',
                    //         flexDirection: 'row',
                    //         backgroundColor: colors.white,
                    //     }}>
                    //         <Text style={{
                    //             color: colors.darkText,
                    //             fontSize: 16,
                    //         }}>{item}</Text>
                    //     </View>
                    // </TouchableHighlight>
                    <Text>{item}</Text>
                )}
                keyExtractor={item => item}
                ItemSeparatorComponent={
                (<View style={{
                    backgroundColor: colors.border,
                    height: StyleSheet.hairlineWidth,
                    flex: 1,
                    marginLeft: 20
                }} />)}
            /> */}
        </View>
    );
}

// const mapStateToProps = state => ({
//   baseCurrency: state.currencies.baseCurrency,
//   quoteCurrency: state.currencies.quoteCurrency,
//   primaryColor: state.theme.primaryColor,
// });

export default CurrencyList;
