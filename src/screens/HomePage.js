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




export default function Homepage(){
  
    return <View style={styles.container}>
  
    <Text style={styles.text}>Supa<Text style={styles.textWhite}>Menu</Text></Text>
    
    
      </View>
  
  
  }
  

