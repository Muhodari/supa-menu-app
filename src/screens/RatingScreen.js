import { SafeAreaView, View , Text, StyleSheet, Image,TouchableOpacity } from "react-native";
import { useState } from "react";
import Stars from "../components/Stars";


export default function RateScreen() {
    const [defaultRating, setdefaultRating] =useState(0);
    const [stars, setStarts] =useState([1,2,3,4,5]);
    const [thanksText, setThanksText] =useState(false);
return (
<SafeAreaView style={styles.container}>
<View>
<Text style={[styles.text]}>Yayy!</Text>
<Text style={styles.text}>We value all feeback</Text>
<Text style={styles.text}>please rate your experience below:</Text>
</View>

<View style={styles.ratings}>
{stars.map((number, index)=>(

<TouchableOpacity
activeOpacity={0.7}
key={number}
onPress={()=>{
    setdefaultRating(number),
    setThanksText(true)
        
    
    }}
>


<Stars
key={number}
rating={defaultRating}


color={
    number <= defaultRating
 ? '#f7941d' : '#ffffff'}
/>



</TouchableOpacity>

))}


</View>

<View style={{width: 200, textAlign: "center"}}>
<Text style={[styles.text]}>{defaultRating+'/'+5}</Text>
</View>

<View>
<Text style={[styles.text]}>
{thanksText  ==true
?"Thank You for helping us\nImprove our service !"
:""
}
</Text>
</View>

{/* <FooterImage /> */}

<View style={styles.mb}>
     <Image source={require('../../assets/yellow-logo.png')} style={[styles.image,{margin:0}]} />
     </View>



</SafeAreaView>
);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        height: "100%",
        backgroundColor: "black",
        flexDirecton: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
    },

    text: {
        color: "#f7941d",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },    
ratings: {
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
margin: 20,
},
mb: {
    marginBottom: '30%',
},
image: {
    height: 67,
    margin: 'auto',
    resizeMode: 'contain',
    width: 220
},
});