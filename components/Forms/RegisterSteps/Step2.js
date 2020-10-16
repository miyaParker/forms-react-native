import React from 'react';
import { StyleSheet, View, Text,TextInput } from 'react-native'
import Button from '../../Button'
const Step2 = ({ currentStep, handleClick }) => {
    if (currentStep !== 2) {
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
                    placeholder="Email address" />
            </View>
            <View>
                <TextInput style={styles.input}
                    placeholder="Alternate email" />
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
export default Step2