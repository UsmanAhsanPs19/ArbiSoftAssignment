import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../utils/colors';

export default function Settings({navigation}){
    const options = ["Themes", "Logout"];
    return(
        <View style={{flex:1}}>
            <TouchableOpacity
            onPress={()=>{
                navigation.navigate("Themes");
            }}
            style={styles.mainView}>
                <Text style={styles.listText}>{options[0]}</Text>
                <Image
                    source={require("../../../assets/forward.png")}
                    resizeMode={"center"}
                    style={{ tintColor: colors.primaryBlue}}
                />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
                navigation.navigate("Login");
            }}
            style={styles.mainView}>
                <Text style={styles.listText}>{options[1]}</Text>
                <Image
                    source={require("../../../assets/power_off.png")}
                    resizeMode={"center"}
                    style={{ tintColor: colors.primaryBlue}}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    
    mainView:{flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'white', paddingHorizontal:20, paddingVertical:7, marginBottom:2},
    listText:{fontFamily:'Roboto-Regular', fontSize:15, color:'black'}
}
)