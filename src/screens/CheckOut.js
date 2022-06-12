import React from 'react'
// import { render } from 'react-dom'
import { View, StyleSheet, Text, Image, Pressable} from "react-native"
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
// // import Svg, { Path, SvgUri } from 'react-native-svg'
// import SvgUri from 'react-native-svg'
// import Chevron from '../../assets/images/ChevronLeft.svg'
import { COLORS } from '../constants/colors'

const styles = StyleSheet.create({
    container:{
        paddingTop:3,
        paddingRight: 8,
        paddingLeft:8
    },
    icons:{
    height: 100,
    width: 100,
    marginLeft: -20
    },
    rightWords:{
        textAlign:'right',
        marginRight: 50,
        marginTop: -30
    },
    smallRightWord:{
        fontWeight:"medium",
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10,
        color: COLORS.ORANGE
    },
    bigRightWord:{
        fontWeight:"bold",
        fontSize:23
    },
    list:{
        marginTop:15,
        marginRight:15,
        marginLeft:15,
        backgroundColor:COLORS.BGCOLOR,
        height: 85,
        borderRadius:13
    },
    smallImage:{
        margin:10,
        width:60, 
        height:65,
        padding:10,
        borderRadius:16
    },
    smallText:{
        textTransform:'capitalize',
        fontSize:11,
        fontWeight:200,
        position: 'absolute',
        left:85,
        top: 10
    },
    boldtext:{
        textTransform:'capitalize',
        fontSize: 13,
        fontWeight: 500,
        position: 'absolute',
        left:85,
        top: 25
    },
    orangetext:{
        color:COLORS.ORANGE,
        textTransform:'capitalize',
        fontSize:"medium",
        fontWeight: 700,
        position: 'absolute',
        left:85,
        top: 47
    },
    counter:{
        width:60,
        borderRadius:4,
        height:23,
        backgroundColor:"white",
        position: 'absolute',
        bottom:10,
        right:16,
        top: 47,
    },
    number:{
        position: 'absolute',
        // bottom:10,
        left:20,
        fontSize:13,
        fontWeight:'bold'
        // top: 50
    },
    sign1:{
        position: 'absolute',
        // bottom:10,
        left:3,
        // top: 47,
        color:COLORS.ORANGE
    },
    sign2:{
        position: 'absolute',
        // bottom:10,
        right:3,
        // top: 47,
        color:COLORS.ORANGE
    },
    icon2:{
        width:20,
        height:20,
        position:'absolute',
        left: 240
    },
    moredrinks:{
        paddingTop: 39,
        paddingBottom: 25
    },
    drinks:{
        textAlign:'center',
        fontWeight:"bold",
        fontSize: 15,
        color:COLORS.ORANGE,
        textTransform:'lowercase'
    },
    containTotal:{
        textTransform:'capitalize',
        margin:30
    },
    containTotal1:{
        fontSize:"medium",
        fontWeight: 700,
        position: 'absolute',
    },
    containTotal2:{
        fontSize:"medium",
        fontWeight: 700,
        position: 'absolute',
        left:210,
        color:COLORS.ORANGE
    },
    containButton:{
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
    },
    proceedButton:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        paddingHorizontal: 32,
        borderRadius: 16,
        elevation: 3,
        backgroundColor: COLORS.ORANGE,
        marginTop:5,
        shadowColor:COLORS.GRAY,
        shadowOpacity: 0.5,
        shadowRadius:25
    },
    buttonText:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 600,
        letterSpacing: 0.25,
        color: 'white',
    },
    menu:{
        height:85,
        margin:3,
        backgroundColor:"white",
        shadowColor:COLORS.GRAY,
        shadowOpacity: 0.3,
        shadowRadius:25,
        // borderRadius:50,
        borderTopLeftRadius:56,
        borderTopRightRadius:56,
        marginTop:20
    },
    menuContainer:{
        flexDirection:"row",
        margin:5,
    },
    menuList:{
        width:50,
        height:50,
        margin:10
    }
})

export default function CheckOut(){
    return(
        <>
        <View style={styles.container}>
            <View>
                <Image style={styles.icons} source={require('../../assets/images/chevron-left (1).png')} />                
            </View>
            <View style= {styles.rightWords}>
                <Text style= {styles.bigRightWord}>Choose Kigali</Text>
                <Text style= {styles.smallRightWord}>Drinks</Text>
            </View>
            <View style={styles.list}>
                <Image style={styles.smallImage} source={require('../../assets/images/tom-yum-384x544.jpg')} />  
                <Text style= {styles.smallText} >kaffir lime vodka, lemon glass, ginger, citrus</Text>
                <Text style= {styles.boldtext} >tommy yummy - 12.5</Text>
                <Text style= {styles.orangetext} >frw 5,000</Text>
                <View style= {styles.counter} >
                    <Text style= {styles.sign1}> - </Text>
                    <Text style= {styles.number}> 2 </Text>
                    <Text style= {styles.sign2} > + </Text>
                </View>
            </View>
            <View style={styles.list}>
                <Image style={styles.smallImage} source={require('../../assets/images/Chili-Citrus-Margarita.jpg')} />
                <Text style= {styles.smallText} >kaffir lime vodka, lemon glass, ginger, citrus</Text>
                <Text style= {styles.boldtext} >tommy yummy - 12.5</Text>
                <Text style= {styles.orangetext} >frw 5,000</Text>
                <View style= {styles.counter} >
                    <Text style= {styles.sign1}> - </Text>
                    <Text style= {styles.number}> 2 </Text>
                    <Text style= {styles.sign2} > + </Text>
                </View>
            </View>
            <View style={styles.list}>
                <Image style={styles.smallImage} source={require('../../assets/images/Chili-Citrus-Margarita.jpg')} />
                <Text style= {styles.smallText} >kaffir lime vodka, lemon glass, ginger, citrus</Text>
                <Text style= {styles.boldtext} >tommy yummy - 12.5</Text>
                <Text style= {styles.orangetext} >frw 5,000</Text> 
                <View style= {styles.counter} >
                    <Text style= {styles.sign1}> - </Text>
                    <Text style= {styles.number}> 2 </Text>
                    <Text style= {styles.sign2} > + </Text>
                </View>
            </View>
            <View style={styles.moredrinks}>
                <Text style={styles.drinks}>
                    More drinks
                </Text>
                <Image style={styles.icon2} source={require('../../assets/images/right.png')} />
            </View>
            <View style={styles.containTotal}>
                <Text style={styles.containTotal1}>Total</Text>
                <Text style={styles.containTotal2}>Frw 16,000</Text>
            </View>
            <View style={styles.containButton}>
            <Pressable style={styles.proceedButton}>
            <Text style={styles.buttonText}>Proceed to checkout</Text>
        </Pressable>
            </View>
        </View>
        <View style={styles.menu}>
        <View style={styles.menuContainer}>
                <Image style={styles.menuList} source={require('../../assets/images/home.svg')} />
                <Image style={styles.menuList} source={require('../../assets/images/notification.svg')} />
                <Image style={styles.menuList} source={require('../../assets/images/search.svg')} />
                <Image style={styles.menuList} source={require('../../assets/images/clock.svg')} />
                <Image style={styles.menuList} source={require('../../assets/images/cart.svg')} />                
            </View>
            </View>
        </>
    );
}