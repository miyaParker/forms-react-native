import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image,View } from 'react-native'
const Button = ({ text = "", onClickFunction, imageUri ="", label,style }) => {
    return (
        <View>
            <TouchableOpacity 
                onPress={onClickFunction}
                style={styles.button} >
                <Text
                    style={styles.text}>{text}
                </Text>
                <Image source={
                    require('./Forms/RegisterSteps/img.png')
                } />
            </TouchableOpacity>
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    label: {
        color: "#000",
        textAlign:"center",
        marginTop:".5rem"
    },
    button: {
        marginTop: "2rem",
        backgroundColor: "#000",
        borderRadius: 7,
        paddingTop: ".5rem",
        paddingBottom: ".5rem",
        textAlign: "center"
    },
    text: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#fff",
        textTransform: "capitalize"
    }
})
export default Button
