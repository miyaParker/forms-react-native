import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
const Card =({cardHolder, cardNumber})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{cardHolder}</Text>
            <Text style={styles.number}>{cardNumber}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop:"1rem",
        borderRadius:10,
        padding:"1.5rem",
        backgroundColor:"#000",
        width:"16rem"
    },
    text:{
        color:"#fff",
        textTransform:"capitalize",
        marginBottom:"1rem",
        marginTop:"1.5rem"
    },
    number:{
        color:"#fff",
        fontSize:10,
        marginBottom:".6rem",
    }
})
export default Card