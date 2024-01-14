import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONTS, RADIUS } from '../constants/Constants';

function GeneralButton(props) {
    const {
        buttonText,
        btnBgColor,
        textBgColor,
        ...rest
    } = props;

    return (
        <TouchableOpacity
            {...rest}
            style={[styles.buttonStyle,{backgroundColor:btnBgColor,borderColor: btnBgColor,
            }]}>

            <Text style={[styles.textStyle,{color:textBgColor}]}>{buttonText}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: COLORS.green,
        borderRadius: RADIUS.xsRadius,
        borderWidth: RFValue(1),
        justifyContent: 'center',
        alignItems: 'center',
        height: RFValue(40),
        width: '100%',
    },
    textStyle: {
        color: COLORS.white,
        fontSize: FONTS.h5,
    },
    disabledButtonStyle: {
        opacity: 0.8,
    },
});
export default GeneralButton;
