import React from 'react';
import { View, Text,TextInput, StyleSheet } from 'react-native'
import Button from '../Button'

const Login = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text>"Save with MyKolo"</Text>
                <Text>"Please sign in to continue app"</Text>
            </View>
            <View>
                <TextInput placeholder="Email address"/>
                <TextInput placeholder="Password"/>
            </View>
            <Text style={styles.forgot}>Forgot password?</Text>
            <Button text="Continue" />
            <View style={styles.info}>
                <Text>
                    Don't have an account?
                </Text>
                <Text style={styles.action}>register</Text>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        paddingLeft: "2rem",
        paddingRight: "2rem"
    },
    info: {
        marginTop: "1rem"
    },
    text: {
        color: "#000"
    },
    action: {
        paddingTop: ".5rem",
        textTransform: "uppercase",
        color: "red"
    },
    forgot: {
        color: "red",
        textAlign: "right"
    }
})
export default Login