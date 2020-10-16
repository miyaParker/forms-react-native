import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Card from './Card'
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.heading} flexDirection="row">
                <Text>Home</Text>
            </View>
            <Text style={styles.bold}>Your Payment Secured</Text>
            <View>
                <Card cardHolder="Olamide Ademola" cardNumber="9337 5379 011 XXXX" />
            </View>
            <View style={styles.balances}>
                <Text style={styles}>Balances</Text>
                <Text style={styles.balance}>N 123,456.78</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        paddingLeft:"2rem",
        paddingRight:"2rem"
    },
    bold: {
        fontWeight: "bold",
        width: "7rem"
    },
    heading: {
        textAlign: "center",
        marginBottom: "1rem"
    },
    balances:{
        marginBottom: ".7rem",
        marginTop: ".7rem"
    },
    balance:{
        color:"red",
        fontSize:10,
        fontWeight:"bold",
        marginBottom: ".7rem",
        marginTop: ".7rem"
    }
})
export default HomeScreen