import React from "react"
import { View,Text , StyleSheet,Image} from "react-native"



const styles = StyleSheet.create({


container:{
    alignContent:'center',
    alignItems:'center',
    paddingTop:10,
},

card:{
backgroundColor:'#f8f8fb',
height:85,
paddingTop:10,
width:'85%',
paddingBottom:5,
display:"flex",
flexDirection:"row",
paddingLeft:5,
borderRadius:20,


},
image:{
    width:60,
    height:65,
    borderRadius:15,
    paddingLeft:23,


},
textTitle:{
    fontSize:16,
    paddingLeft:15,
    paddingTop:3,
    fontWeight:'800'


},
textDescription:{
   paddingLeft:15,
   paddingTop:5

}

});


export default function RestaurantCard(){


return(
  <View style={styles.container}>  


<View style={styles.card}> 
 
 <Image style={styles.image}
 source={require('../../assets/images/london-stock.jpg')}
 />

<View>
<Text style={styles.textTitle}>Choose Kigali</Text>
<Text style={styles.textDescription}>World,African,Pizzerla,Coffee</Text>
</View>

</View>

</View>
);

}

