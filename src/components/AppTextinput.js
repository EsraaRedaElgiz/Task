import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import { COLORS, FONTS, PADDINGS, RADIUS } from '../constants/Constants';

function Reusabletextinput(props) {
  const {style, placeholder,headerText,...rest} = props;
  return (
    <View style={styles.container}>
    <Text style={styles.headerStyle}>{headerText}</Text>
      <TextInput
        {...rest}
        style={[styles.textInputStyle, style]}
        placeholder={placeholder}
        keyboardType="numeric"
        placeholderTextColor={COLORS.black}
        
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textInputStyle: {
    fontSize: FONTS.h5,
    backgroundColor: COLORS.white,
    height: RFValue(50),
    width: '100%',
    borderColor:COLORS.gray,
    borderWidth:RFValue(1),
    borderRadius:RADIUS.xsRadius,
    paddingHorizontal:PADDINGS.smPadding,
    color:COLORS.black
    
  },
  headerStyle:{
    marginBottom:RFValue(10)
  }
});
export default Reusabletextinput;
