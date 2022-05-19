import React from 'react'
import { View,TextInput,Text, StyleSheet ,Platform,StatusBar,} from "react-native"
import {COLORS, FONTS} from '../constants/colors'


const styles = StyleSheet.create({
    container:{
        paddingTop:Platform.OS ==="ios"? 40: StatusBar.currentHeight +10,
        flex:1,
        backgroundColor:COLORS.ORANGE,
    },

text:{
    color:"black",
    fontSize:50,
    ...FONTS.Source_sans_pro,
    paddingLeft:60,
    paddingTop:220
},
textWhite:{
    color:"white",   
}

});

export default function SignIn(){

    return(
        <>
        {/* <View style={styles.container}>
        <Link to="/login" underlayColor="#f0f4f7">
          <Text>SignIn</Text>
        </Link>
        </View> */}
        <Text>Sign In</Text>
        </>
    )
}