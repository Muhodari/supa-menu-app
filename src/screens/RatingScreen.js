import { SafeAreaView, View , Text, StyleSheet, Image } from "react-native";
// import FooterImage from "../../components/FooterImage";
import Stars from "../components/Stars";

export default function RateScreen() {
const stars = [1,2,3,4,5];

return (
<SafeAreaView style={styles.container}>
<View>
<Text style={[styles.text]}>Yayy!</Text>
<Text style={styles.text}>We value all feeback</Text>
<Text style={styles.text}>please rate your experience below:</Text>
</View>

<View style={styles.ratings}>
{stars.map((number, index)=>(
<Stars
key={index}
rating={number}

color={number=
3 ? '#ffffff' : '#f7941d'}
handleTap={(rating)=>()=>{}}/>
))}
</View>

<View style={{width: 200, textAlign: "center"}}>
<Text style={[styles.text]}>{"results"}</Text>
</View>
{/* <FooterImage /> */}

<View style={styles.mb}>
     <Image source={require('../../assets/yellow-logo.svg')} style={[styles.image,{margin:0}]} />
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
    width: 300
},
});