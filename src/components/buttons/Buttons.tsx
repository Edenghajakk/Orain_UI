import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const RoundedButton = (props: { bgColor: string; title: string; titleColor: string; }) => {
    return (
        <TouchableOpacity style={{
            ...roundedButtonStyle.buttonContainer,
            backgroundColor: props.bgColor
        }}>
            <Text style={{
                ...roundedButtonStyle.buttonText,
                color: props.titleColor
            }}>{props.title}</Text>
        </TouchableOpacity>
    )
};

const roundedButtonStyle = StyleSheet.create({
    buttonContainer: {
        // flex: 1,
        padding: 20,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    buttonText: {
        fontFamily: 'Raleway-Regular',
        fontSize: RFValue(18, 812)
    }
});