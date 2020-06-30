import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

// Local imports
import { white, black, darkOrange, darkBlue } from '../../constants/Colors';
import { RoundedButton } from '../buttons/Buttons';

const LandingContent = () => {

    return (
        <View style={landingContentStyle.container}>
            <RoundedButton bgColor={white} title={'Get Started'} titleColor={darkBlue} />
            <RoundedButton bgColor={darkOrange} title={'Login'} titleColor={white} />
        </View>
    )
};

const landingContentStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        // alignItems: 'center',
        marginHorizontal: 30,
        marginBottom: 100
    },
    titleText: {
        fontSize: RFValue(60, 812),
        color: white
    }
});

export default LandingContent;