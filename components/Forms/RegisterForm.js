import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Button from '../Button';
import Step1 from './RegisterSteps/Step1'
import Step2 from './RegisterSteps/Step2'
import Step3 from './RegisterSteps/Step3'
import Step4 from './RegisterSteps/Step4'
const RegisterForm = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        alternateEmail: "",
        password: "",
        age: "",
        profilePic: ""
    })
    const [currentStep, setCurrentStep] = useState(4)
    // const getPrevious = () => {
    //     const step = currentStep <= 1 ? 1 : currentStep - 1
    //     setCurrentStep(step)
    // }
    const getNext = () => {
        let currStep = currentStep
        if (currStep >=3)
            currStep = 4
        else
            currStep = currStep + 1
        setCurrentStep(currStep)
    }
    const handleClick = () => getNext()

    return (
        <View style={styles.container}>
            {/* <Step1 currentStep={currentStep} handleClick={handleClick} />
            <Step2 currentStep={currentStep} handleClick={handleClick} />
            <Step3 currentStep={currentStep} handleClick={handleClick} /> */}
            <Step4 currentStep={currentStep} handleClick={handleClick} />
            <Text>
                Already have an account?
                </Text>
            <Text style={styles.action}>Login</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        marginLeft: "2rem",
        marginRight: "2rem"
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
    }
})
export default RegisterForm