import React, { useEffect, useRef, useState } from "react";
import Reusabletextinput from "../components/AppTextinput";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS, FONTS, PADDINGS, RADIUS } from "../constants/Constants";
import DecreaseAndIncrease from "../components/AppDecreaseAndIncrease";
import SwitchSelectorComponent from "../components/SwitchSelctor";
import ProgressBar from 'react-native-progress/Bar'
import Header from "../components/Header";
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from "@lunalee/react-native-raw-bottom-sheet";
import { requestCameraPermission } from "../utils/CameraPermissin";
import GeneralButton from "../components/GeneralButton";
const Task = () => {
    useEffect(() => {
        requestCameraPermission()

    }, [])
    const [bedRooms, setBedRooms] = useState(0)
    const [bathRooms, setBathRooms] = useState(0)
    const [guestRooms, setGuestRooms] = useState(0)
    const [lounges, setLounges] = useState(0)
    const [unitSize, setUnitSize] = useState("")
    const [elecMeter, setElecMeter] = useState("")
    const [waterMeter, setWaterMeter] = useState("")
    const furnishedOptions = [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" }
    ]
    const kitchenOptions = [
        { label: "Closed", value: "Closed" },
        { label: "Open", value: "Open" }
    ]
    const parkingOptions = [
        { label: "Split", value: "Split" },
        { label: "Central", value: "Central" },
    ]
    const acOptions = [
        { label: "Split", value: "Split" },
        { label: "Central", value: "Central" },
        { label: "Window", value: "Window" },
        { label: "Not Installed", value: "Not Installed" }
    ]
    const [photosArr, setPhotosArr] = useState([]);

    const refRBSheet = useRef();
    const selectFromGallery = () => {
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            console.log(images);
        });
    };
    const launchCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
        });
    };

    return (
        <>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Header headerText="Property Details" />
                    <View style={{ width: "100%" }}>
                        <ProgressBar progress={0.3} width={null} color={COLORS.green} borderColor={COLORS.white} unfilledColor={COLORS.gray} />
                    </View>
                    <Text style={styles.headerStyle}>Step 1 - Unit Details</Text>
                    <Text style={{ color: COLORS.green }}>please enter the unit information below</Text>
                    <View style={styles.generalPaddingVertical}>
                        <Reusabletextinput placeholder="Enter Size" headerText="Unit Size" onChangeText={(value) => { /^[0-9]*$/.test(value) ? setUnitSize(value) : null }} value={unitSize} />
                    </View>
                    <View style={styles.eachGroupContainer} >
                        <View style={[styles.cardsWidth, styles.generalPaddingVertical]}>
                            <DecreaseAndIncrease headerText="Bedrooms"
                                decrease={() => { bedRooms > 0 ? setBedRooms(bedRooms => bedRooms - 1) : null }}
                                increase={() => { setBedRooms(bedRooms => bedRooms + 1) }}
                                number={`${bedRooms}`} />
                        </View>
                        <View style={[styles.cardsWidth, styles.generalPaddingVertical]}>
                            <DecreaseAndIncrease
                                headerText="Bathrooms"
                                decrease={() => { bathRooms > 0 ? setBathRooms(bathRooms => bathRooms - 1) : null }}
                                increase={() => { setBathRooms(bathRooms => bathRooms + 1) }}
                                number={`${bathRooms}`} />
                        </View>
                        <View style={[styles.cardsWidth, styles.generalPaddingVertical]}>
                            <DecreaseAndIncrease headerText="Guest Rooms"
                                decrease={() => { guestRooms > 0 ? setGuestRooms(guestRooms => guestRooms - 1) : null }}
                                increase={() => { setGuestRooms(guestRooms => guestRooms + 1) }}
                                number={`${guestRooms}`} />
                        </View>
                        <View style={[styles.cardsWidth, styles.generalPaddingVertical]}>
                            <DecreaseAndIncrease headerText="Lounges"
                                decrease={() => { lounges > 0 ? setLounges(lounges => lounges - 1) : null }}
                                increase={() => { setLounges(lounges => lounges + 1) }}

                                number={`${lounges}`} />
                        </View>
                    </View>

                    <View style={styles.eachGroupContainer}>
                        <View style={[styles.cardsWidth, styles.generalPaddingVertical]}>
                            <SwitchSelectorComponent options={furnishedOptions} headerText="Furnished" />
                        </View>
                        <View style={[styles.cardsWidth, styles.generalPaddingVertical]}>
                            <SwitchSelectorComponent options={kitchenOptions} headerText="Kitchen" />
                        </View>
                        <View style={[styles.cardsWidth, styles.generalPaddingVertical]}>
                            <SwitchSelectorComponent options={parkingOptions} headerText="Parking" />
                        </View>
                    </View>
                    <View style={styles.generalPaddingVertical}>
                        <Reusabletextinput placeholder="Enter meter no" headerText="Electricity Meter No." onChangeText={(value) => { /^[0-9]*$/.test(value) ? setElecMeter(value) : null }} value={elecMeter} />
                    </View>
                    <View style={styles.generalPaddingVertical}>
                        <Reusabletextinput placeholder="Enter meter no" headerText="Water Meter No." onChangeText={(value) => { /^[0-9]*$/.test(value) ? setWaterMeter(value) : null }} value={waterMeter} />
                    </View>
                    <View style={styles.generalPaddingVertical}>
                        <SwitchSelectorComponent options={acOptions} headerText="Select AC Type" onPress={value => console.log(`Call onPress with value: ${value}`)} />
                    </View>
                    <Text style={styles.generalPaddingVertical} >Upload Photo</Text>
                    {/* photo part  */}
                    <View style={styles.uploadImageContainer}>

                    </View>
                    <View style={styles.eachGroupContainer}>
                        <View style={styles.cardsWidth}>
                            <GeneralButton buttonText="Back" btnBgColor={COLORS.white} textBgColor={COLORS.green} />

                        </View>
                        <View style={styles.cardsWidth}>
                            <GeneralButton buttonText="Next" btnBgColor={COLORS.green} textBgColor={COLORS.white} />

                        </View>
                    </View>


                </ScrollView>

            </View>
            <RBSheet
                ref={refRBSheet}
                height={RFValue(150)}
                openDuration={250}
                customStyles={{
                    container: {
                        alignItems: 'center',
                        borderTopLeftRadius: RADIUS.xlRadius,
                        borderTopRightRadius: RADIUS.xlRadius,
                    },
                }}>
                <TouchableOpacity
                    onPress={() => {
                        launchCamera();
                        refRBSheet.current.close();
                    }}
                    style={styles.eachOptionInBottonTab}
                >
                    <Text style={styles.optionTextStyle}>التقاط صوره</Text>
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity
                    onPress={() => {
                        refRBSheet.current.close();
                        selectFromGallery();
                    }}
                    style={styles.eachOptionInBottonTab}
                >
                    <Text style={styles.optionTextStyle} >اختيار صوره</Text>
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity
                    onPress={() => refRBSheet.current.close()}
                    style={styles.eachOptionInBottonTab}
                >
                    <Text style={styles.optionTextStyle} >انهاء</Text>
                </TouchableOpacity>
            </RBSheet>
        </>
    )
}
export default Task;
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
        width: '100%',
        height: RFValue(50),
        alignItems: 'center',
        justifyContent: 'center',
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
        marginBottom: 15
    }
})