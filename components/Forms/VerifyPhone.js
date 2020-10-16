import React from 'react';
import {Text,View,TextInput} from 'react-native'
import Template from './Template'
import Button from '../Button'
const VerifyPhone = (props) => {
    return (
        <View>
           <View>
               <TextInput
                placeholder="Enter Phone Number"
               />
                <TextInput
                placeholder="Please add your phone to verify OTP"
               />
           </View>
            <Button text="Verify Phone Number"
                onClickFunction={props.sendLink} style={{ paddingLeft: "1rem", paddingRight:"1rem"}}/>
            <Text style={{color:"red"}}>I didn't receive a code</Text>    
        </View>
    )
}
export default VerifyPhone