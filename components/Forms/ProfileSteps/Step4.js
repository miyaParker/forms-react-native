import React from 'react';
import { View, TextInput, Text,StyleSheet } from 'react-native'
import Button from '../../Button'
const Step1 = ({ currentStep, handleClick }) => {
    if (currentStep !== 4) {
        return null
    }
    return (
        <View>
            <View style={styles.heading}>
            <Text style={styles.title}>Next of Kin</Text>
            <Text>Please fill in the details below</Text>
            </View>
            <View>
            <TextInput style={styles.input}
                placeholder="Name" />
            <TextInput style={styles.input}
                placeholder="Address" />
                <TextInput style={styles.input}
                placeholder="+234 000 000 0000" />
            <TextInput style={styles.input}
                placeholder="Relationship" />
            </View>
            <Button text="Continue"
                onClickFunction={handleClick} />
        </View>

    )
}
const styles = StyleSheet.create({
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
    }
})
export default Step1

