import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native'
import Button from '../../Button'
const Step3 = ({ currentStep, handleClick }) => {
    if (currentStep !== 3) {
        return null
    }
    return (
        <View>
            <View style={styles.heading}>
                <Text style={styles.title}>Set Password</Text>
                <Text>Require information to account creations</Text>
            </View>

            <TextInput style={styles.input}
                placeholder="Password" />
            <TextInput style={styles.input}
                placeholder="Repeat Password" />
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
export default Step3