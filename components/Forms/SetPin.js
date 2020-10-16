import React from 'react';
import { Text, View } from 'react-native'
import Template from './Template'
import Button from '../Button'
const SetPin = () => {
    return (
        <View>
            <Template
                formComponents={[
                    {
                        type: "text",
                        placeholder: "PIN",
                        iconEnabled: false,
                        keyboardType: "phone-pad",
                    },
                    {
                        type: "text",
                        placeholder: "Repeat PIN",
                        iconEnabled: false,
                        keyboardType: "phone-pad",
                    }
                ]}
                title="Set PIN!"
                description={'Require information to account creation'} />
            <Button text="Continue"
                style={{ paddingLeft: ".3rem", paddingRight: ".3rem" }} />
        </View>
    )
}
export default SetPin