import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Local imports
import { white } from '../../constants/Colors';

const LandingHeader = () => {

    return (
        <View style={landingHeaderStyle.container}>
            <MaterialCommunityIcons name={'waves'} size={50} color={white} />
            <Text style={landingHeaderStyle.titleText}>Jom Lepak</Text>
        </View>
    )
};

const landingHeaderStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        marginLeft: 10,
        fontFamily: 'Raleway-Regular',
        fontSize: RFValue(60, 812),
        color: white
    }
});

export default LandingHeader;