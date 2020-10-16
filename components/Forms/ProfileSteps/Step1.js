import React from 'react';
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Button from '../../Button'
const Step1 = ({ currentStep, handleClick }) => {
    if (currentStep !== 1) {
        return null
    }
    return (
        <View>
            <View style={styles.heading}>
                <Text style={styles.title}>Basic Information</Text>
                <Text>Please fill in the details below</Text>
            </View>
            <View>
                <TextInput style={styles.input}
                    placeholder="First name" />
                <TextInput style={styles.input}
                    placeholder="Last name" />
                <View style={{ flexDirection: "row", justifyContent: "space-around" ,padding:".5rem"}}>
                    <View>
                        <TouchableOpacity style={styles.button}>
                            <Image
                                style={styles.image}
                                source={require('../../assets/male.png')}
                            />
                        </TouchableOpacity>
                        <Text style={{textAlign:"center"}}>Male</Text>

                    </View>
                    <View>
                        <TouchableOpacity style={styles.button}>
                            <Image
                                style={styles.image}
                                source={require('../../assets/female.png')}
                            />
                        </TouchableOpacity>
                        <Text style={{textAlign:"center"}}>Female</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <View style={{ flex: 1 }}>
                        <TextInput style={styles.input}
                            placeholder="Status" />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput style={styles.input}
                            placeholder="Age" />
                    </View>
                </View>
                <TextInput style={styles.input}
                    placeholder="Occupation" />
                <TextInput style={styles.input}
                    placeholder="Address" />
                <TextInput style={styles.input}
                    placeholder="Local government" />
                <TextInput style={styles.input}
                    placeholder="Input Address" />
                <Button text="Continue"
                    onClickFunction={handleClick} />
            </View>

        </View>

    )
}
const styles = StyleSheet.create({
    button: {
        fontSize: 15,
        padding: ".5rem",
        borderRadius: 10,
        borderWidth:1,
        borderColor:"#C0C0C0"
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
    },
    image: {
        height: 30,
        width: 30
    }
})
export default Step1

