import React from 'react';
import { Text, View } from 'react-native'
import Button from '../Button'
const ConfirmOTP = ({ phoneNumber, sendLink }) => {
    return (
        <View>
            <View>
                <View>
                    <Text>OTP Sent</Text>
                    <Text>Enter the 4-digit code sent to you at {phoneNumber}. Did you enter the curreny number?</Text>
                </View>
                <View>
                    <TextInput placeholder="5 4 5 2" />
                </View>
            </View>
            <Button text="Send Link"
                onClickFunction={sendLink} />
        </View>
    )
}
export default ConfirmOTP