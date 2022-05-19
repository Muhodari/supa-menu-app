import React from "react"
import { View , Text ,StyleSheet,Button, TextInput,TouchableOpacity} from "react-native"
import BackToPreviousPageButton from "../components/BackToPreviousPageButton";
import BottomNavigation from "../components/BottomNavigation";
import RestaurantCard from "../components/RestaurantCard";
import { COLORS } from "../constants/colors";


const styles = StyleSheet.create({
    container:{
    paddingTop:15
    },


header:{
display:"flex",
flexDirection:'row',

width:'80%',
marginLeft:'5%',
// backgroundColor:COLORS.ORANGE,
},

    textSearchInput:{
        height: 40,
        // borderWidth: 1,
        borderColor:'#ffffff',
        padding: 10,
        width:'66%',
        marginLeft:20,
        fontWeight:'600',
        fontSize:17
       
    }
})




export default function SearchRestaurantPage(){

return (
<View style={styles.container}>

    <View style={styles.header}>
    <BackToPreviousPageButton/>
    <TextInput 
    style={styles.textSearchInput}
    placeholder={'Search...'}
    ></TextInput>
    </View>

    <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingTop:20,
  }}
/>



    {/* seach result */}
<RestaurantCard />


 {/* bottom */}

 <BottomNavigation/>
</View>
);
    
}