import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import Button from '../Button'
const Template = ({ formComponents, title, description }) => {

    const generateView = (component) => {
        let formComponents = component.list
        const componentList = [];
        for (let [id, component] of formComponents.entries()) {
            let newComponent = generateComponent(component, id)
            componentList.push(newComponent)
        }
        return <View style={{
            flexDirection: `${component.flexDirection}`
        }}>{componentList}</View>
    }

    const generateComponents = (formComponents) => {
        const componentList = [];
        for (let [id, component] of formComponents.entries()) {
            if (component.type == "view") {
                let newComponent = generateView(component)
                componentList.push(newComponent)
            }

            let newComponent = generateComponent(component, id)
            componentList.push(newComponent)
        }
        return componentList
    }
    const generateComponent = (component, id) => {
        switch (component.type) {
            case "text":
                return <TextInput
                    key={id}
                    placeholder={component.placeholder}
                    style={styles.input}
                    keyboardType={component.keyboardType}
                />

            case "button":
                return <Button imageUri={component.imageUri} text={component.text} />
        }
    }
    return (
        <View>
            <View style={styles.heading} >
                <Text style={styles.title}>{title}</Text>
                <Text>{description}</Text>
                
            </View>
            <View>
                {generateComponents(formComponents)}
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    input: {
        marginLeft:"",
        marginRight:"",
        marginBottom: ".3rem",
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "#C0C0C0",
        paddingTop: ".6rem",
        paddingBottom: ".6rem",
        paddingLeft: "1rem",
    },
    image: {
        width: 50,
        height: 50
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
export default Template