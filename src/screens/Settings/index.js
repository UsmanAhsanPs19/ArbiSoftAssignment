import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../utils/colors';
import { connect } from 'react-redux';
import { REMOVE_USER_INFO } from '../../redux/user/actions';
const mapStateToParams= (state, props)=>{
    const {email} = state.user;
    return {email};
}

const mapDispatchToProps = (dispatch, props) => ({
    removeUser: () => {
      dispatch({
        type: REMOVE_USER_INFO,
        payload: {},
      });
    },
  });
function Settings({navigation, removeUser}){
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
                removeUser();
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

export default connect(mapStateToParams, mapDispatchToProps)(Settings);