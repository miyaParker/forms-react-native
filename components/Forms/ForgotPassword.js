import React from 'react';
import { Image, View, Text } from 'react-native'
import Template from './Template'
import Button from '../Button'
import { TextInput } from 'react-native-gesture-handler';
const ForgotPassword = (props) => {
    return (
        <View>
            <View>
                <View>
                    <Text>Forgot Password</Text>
                    <Text>Require information to account creations</Text>
                </View>
                <View>
                    <TextInput placeholder="Email address" />
                </View>
            </View>
            <Button text="Send Link"
                onClickFunction={props.sendLink} />
        </View>
    )
}
export default ForgotPassword