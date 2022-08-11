import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../utils/colors';
import { connect } from 'react-redux';
import { CHANGE_THEME } from '../../redux/theme/actions';

const mapStateToParams= (state, props)=>{
    const {primaryColor} = state.theme;
    return {primaryColor};
}

const mapDispatchToProps = (dispatch, props) => ({
    changeTheme: (color) => {
      dispatch({
        type: CHANGE_THEME,
        payload: {color},
      });
    },
  });

function ThemesScreens({navigation, changeTheme}){

    return(
        <View style={{flex:1}}>
            <TouchableOpacity onPress={()=>changeTheme(colors.primaryBlue)} style={styles.mainView}>
                <Text style={styles.listText}>Blue</Text>
                <View style={{...styles.listColor,backgroundColor:colors.primaryBlue}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>changeTheme(colors.primaryGreen)} style={styles.mainView}>
                <Text style={styles.listText}>Green</Text>
                <View style={{...styles.listColor,backgroundColor:colors.primaryGreen}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>changeTheme(colors.primaryOrange)} style={styles.mainView}>
                <Text style={styles.listText}>Orange</Text>
                <View style={{...styles.listColor,backgroundColor:colors.primaryOrange}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>changeTheme(colors.primaryPurple)} style={styles.mainView}>
                <Text style={styles.listText}>Purple</Text>
                <View style={{...styles.listColor,backgroundColor:colors.primaryPurple}} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    
    mainView:{flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'white', paddingHorizontal:20, paddingVertical:20, marginBottom:1},
    listText:{fontFamily:'Roboto-Regular', fontSize:15, color:'black'},
    listColor:{backgroundColor:colors.primaryBlue, width:25, height:25, borderRadius:15}
}
)

export default connect(mapStateToParams, mapDispatchToProps)(ThemesScreens);