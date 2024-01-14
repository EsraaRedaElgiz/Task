import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { COLORS, FONTS, ICONS, PADDINGS } from '../constants/Constants';
import AntDesign from 'react-native-vector-icons/AntDesign'
function Header(props) {
    const { headerText } = props;
    return (
        <View style={styles.container}>
            <AntDesign name="left" size={ICONS.mdIcon} color={COLORS.black} />
            <Text style={styles.headerStyle}>{headerText}</Text>
            <View></View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: PADDINGS.mdPadding
    },

    headerStyle: {
        fontSize: FONTS.h5,
        color: COLORS.black
    }
});
export default Header;
