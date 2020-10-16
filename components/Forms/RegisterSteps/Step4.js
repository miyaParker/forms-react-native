import React from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native'
import Button from '../../Button'
const Step4 = ({ currentStep, handleClick }) => {
    if (currentStep !== 4) {
        return null
    }
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop:"5rem", paddingLeft:"1rem", paddingRight:"1rem"} }>
                <View>
                    <Image
                        style={styles.image}
                        source={require('../../assets/young.png')}
                    />
                </View>
                <View>
                    <Image
                        style={styles.image}
                        source={require('../../assets/old.png')}
                    />
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <Button text="Age"
                    onClickFunction={handleClick} />
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:"1rem"
    },
    input: {
        marginBottom: ".3rem",
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "#C0C0C0",
        paddingTop: ".6rem",
        paddingBottom: ".6rem",
        paddingLeft: "1rem",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold"
    },
    heading: {
        marginTop: "1.5rem",
        marginBottom: "1.5rem"
    }, image: {
        height: 48,
        width: 48
    }
})
export default Step4