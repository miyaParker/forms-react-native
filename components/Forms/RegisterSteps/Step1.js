import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native'
import Button from '../../Button'
const Step1 = ({ currentStep, handleClick }) => {
    if (currentStep !== 1) {
        return null
    }
    return (
        <View>
            <View style={styles.heading}>
                <Text style={styles.title}>Sign Up</Text>
                <Text>Require information to account creations</Text>
            </View>
            <View>
                <TextInput style={styles.input}
                    placeholder="First name" />
                <TextInput style={styles.input}
                    placeholder="Last name" />
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

