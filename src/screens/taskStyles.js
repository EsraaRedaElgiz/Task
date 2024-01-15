import { RFValue } from "react-native-responsive-fontsize";
import { COLORS, FONTS, MARGIN, RADIUS } from "../constants/Constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        height: "100%",
        paddingHorizontal: '4%',
        width: "100%"
    },
    headerStyle: {
        fontWeight: 'bold',
        color: "#000",
        fontSize: RFValue(20),
        paddingTop: RFValue(10)
    },
    eachGroupContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },
    generalPaddingVertical: {
        paddingVertical: RFValue(10)
    },
    cardsWidth: {
        width: "45%"
    },
    line: {
        height: RFValue(1),
        backgroundColor: COLORS.gray,
        width: '90%',
    },
    eachOptionInBottonTab: {
       
    },
    optionTextStyle: {
        fontSize: FONTS.h5,
        color: COLORS.green,
        fontWeight: '600',
    }, uploadImageContainer: {
        width: "100%",
        height: RFValue(150),
        borderWidth: RFValue(1),
        borderColor: COLORS.gray,
        borderRadius: RADIUS.xsRadius,
        marginBottom: MARGIN.smMargin,
    }, photesContainer: {
        display: "flex", flexDirection: "row"
    }, addImageStyle: {
        height: "100%",
        backgroundColor: COLORS.gray,
        alignItems: "center",
        justifyContent: "center",
        display: "flex"
    }, eachChosenImageViewStyle: {
        height: "100%",
        width: RFValue(170)
    }, eachChosenImageStyle: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"

    }, trashButtonStyle: {
        width: RFValue(20),
        height: RFValue(20),
        borderRadius: RADIUS.smRadius,
        backgroundColor: COLORS.white,
        margin: MARGIN.smMargin,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})
export default styles;