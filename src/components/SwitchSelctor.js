import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import SwitchSelector from "react-native-switch-selector";
import { COLORS, PADDINGS, RADIUS } from '../constants/Constants';

function SwitchSelectorComponent(props) {
    const { options, headerText, onPress, ...rest } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.headerStyle}>{headerText}</Text>
            <View style={styles.switchContainer}>
                <SwitchSelector
                    options={options}
                    initial={0}
                    onPress={onPress}
                    borderColor={COLORS.gray}
                    selectedColor={COLORS.white}
                    buttonColor={COLORS.green}
                    borderRadius={0}
                    {...rest}

                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    switchContainer: {
        borderColor: COLORS.gray,
        borderWidth: RFValue(1),
        elevation:1,
        borderRadius:RADIUS.xsRadius,


    },
    headerStyle: {
        paddingBottom: PADDINGS.smPadding
    }
});
export default SwitchSelectorComponent;
