import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../utils/colors';

export default function ThemesScreens({navigation}){
 
    return(
        <View style={{flex:1}}>
            <View style={styles.mainView}>
                <Text style={styles.listText}>Blue</Text>
                <View style={{...styles.listColor,backgroundColor:colors.primaryBlue}} />
            </View>
            <View style={styles.mainView}>
                <Text style={styles.listText}>Green</Text>
                <View style={{...styles.listColor,backgroundColor:colors.primaryGreen}} />
            </View>
            <View style={styles.mainView}>
                <Text style={styles.listText}>Orange</Text>
                <View style={{...styles.listColor,backgroundColor:colors.primaryOrange}} />
            </View>
            <View style={styles.mainView}>
                <Text style={styles.listText}>Purple</Text>
                <View style={{...styles.listColor,backgroundColor:colors.primaryPurple}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    mainView:{flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'white', paddingHorizontal:20, paddingVertical:20, marginBottom:1},
    listText:{fontFamily:'Roboto-Regular', fontSize:15, color:'black'},
    listColor:{backgroundColor:colors.primaryBlue, width:25, height:25, borderRadius:15}
}
)