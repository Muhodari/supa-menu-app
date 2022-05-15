import React from 'react'
import { View,TextInput,Text, StyleSheet ,Platform,StatusBar,} from "react-native"
import {COLORS} from '../constants/colors'


const styles = StyleSheet.create({
    container:{
        paddingTop:Platform.OS ==="ios"? 40: StatusBar.currentHeight +10,
        flex:1,
        backgroundColor:COLORS.ORANGE,
        alignItems:"center",
        alignContent:"center"
    },

text:{

    color:"black",
    fontSize:60,

    fontWeight:650,
    paddingTop:230,    
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
  

