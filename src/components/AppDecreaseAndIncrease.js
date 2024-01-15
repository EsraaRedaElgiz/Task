import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS, PADDINGS, RADIUS } from '../constants/Constants';
import FontAwesome from "react-native-vector-icons/FontAwesome"

function DecreaseAndIncrease(props) {
    const { headerText, number, decrease, increase } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.headerStyle}>{headerText}</Text>
            <View style={styles.coniatnerStyle}>
                <TouchableOpacity style={styles.buttonStyle} onPress={decrease}>
                    <FontAwesome name="minus" color={COLORS.black} />
                </TouchableOpacity>
                <Text style={styles.textStyle}>{number}</Text>
                <TouchableOpacity style={styles.buttonStyle} onPress={increase}>
                    <FontAwesome name="plus" color={COLORS.black} />
                </TouchableOpacity>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    headerStyle: {
        paddingBottom: PADDINGS.smPadding,
        color:COLORS.gray,
        fontWeight:"bold"
    },
    coniatnerStyle: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: RFValue(30),
        backgroundColor: COLORS.white,
        elevation: 1,
        borderWidth: RFValue(1),
        borderRadius: RADIUS.xsRadius,
        borderColor: COLORS.gray
    },
    buttonStyle: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        backgroundColor: COLORS.gray,
        width: "20%",
        height: "100%"
    },textStyle:{
        color:COLORS.black
    }
});
export default DecreaseAndIncrease;
