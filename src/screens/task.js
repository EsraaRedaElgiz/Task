import React, { useEffect, useRef, useState } from "react";
import Reusabletextinput from "../components/AppTextinput";
import { ActivityIndicator, Alert, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS, ICONS, RADIUS } from "../constants/Constants";
import DecreaseAndIncrease from "../components/AppDecreaseAndIncrease";
import SwitchSelectorComponent from "../components/SwitchSelctor";
import ProgressBar from 'react-native-progress/Bar'
import Header from "../components/Header";
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from "@lunalee/react-native-raw-bottom-sheet";
import { requestCameraPermission } from "../utils/CameraPermissin";
import GeneralButton from "../components/GeneralButton";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./taskStyles";
const Task = () => {
    useEffect(() => {
        getData().then(() => {
            setLoading(false)
        }).catch((err) => {
        })

    }, [])
    const [isLoading, setLoading] = useState(true)
    const [bedRooms, setBedRooms] = useState(0)
    const [bathRooms, setBathRooms] = useState(0)
    const [guestRooms, setGuestRooms] = useState(0)
    const [lounges, setLounges] = useState(0)
    const [unitSize, setUnitSize] = useState("")
    const [elecMeter, setElecMeter] = useState("")
    const [waterMeter, setWaterMeter] = useState("")
    const [photosArr, setPhotosArr] = useState([]);
    const [furniture, setFurniture] = useState(0)
    const [kitchen, setKitchen] = useState(0)
    const [parking, setParking] = useState(0)
    const [acType, setAcType] = useState(0)

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
    {/* image picker ,choose and capture image part  */ }
    const refRBSheet = useRef();
    const selectFromGallery = () => {
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            setPhotosArr(photosArr => [...images, ...photosArr,])
            saveData("photes", [...images, ...photosArr,])
        });
    };
    const launchCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setPhotosArr(photosArr => [image, ...photosArr])
            saveData("photes", [image, ...photosArr])

        });
    };

    const deletePhoto = (index) => {
        let arr = [...photosArr]
        arr.splice(index, 1)
        setPhotosArr(photosArr => arr)
        saveData("photes", arr)

    }
    const renderImages = () => {
        return photosArr.map((item, index) => {
            return (
                <View style={styles.eachChosenImageViewStyle} key={index}>
                    <ImageBackground style={styles.eachChosenImageStyle} source={{ uri: item.path }}>
                        <TouchableOpacity onPress={() => { deletePhoto(index) }}
                            style={styles.trashButtonStyle} >
                            <FontAwesome name="trash" color={COLORS.red} size={ICONS.smIcon} />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>)
        })
    }
    const saveData = async (switchName, value) => {
        let valueAsString = JSON.stringify(value)
        try {
            await AsyncStorage.setItem(
                switchName,
                valueAsString
            );
        } catch (error) {
            // Error saving data

        }
    }
    const getData = async () => {
        try {
            const furnitureValue = await AsyncStorage.getItem('furniture');
            const kitchenValue = await AsyncStorage.getItem("kitchen")
            const parkingValue = await AsyncStorage.getItem("parking")
            const acValue = await AsyncStorage.getItem("ac")
            const unitSizeValue = await AsyncStorage.getItem("unit-size")
            const elecMeterValue = await AsyncStorage.getItem("elec-meter")
            const waterMeterValue = await AsyncStorage.getItem("water-meter")
            const bedRoomsValue = await AsyncStorage.getItem("bed-rooms")
            const bathRoomsValue = await AsyncStorage.getItem("bath-rooms")
            const guestRoomsValue = await AsyncStorage.getItem("guest-rooms")
            const loungeRoomsValue = await AsyncStorage.getItem("lounge-rooms")
            const photesArrValue = await AsyncStorage.getItem("photes")
            if (furnitureValue !== null) {
                // value previously stored
                let furnInitialValue = furnishedOptions.findIndex((item) => item.value === JSON.parse(furnitureValue))
                setFurniture(furnInitialValue)
            }
            if (kitchenValue !== null) {
                // value previously stored
                let kitchenInitialValue = kitchenOptions.findIndex((item) => item.value === JSON.parse(kitchenValue))
                setKitchen(kitchenInitialValue)
            }
            if (parkingValue !== null) {
                // value previously stored
                let parkingInitialValue = parkingOptions.findIndex((item) => item.value === JSON.parse(parkingValue))
                setParking(parkingInitialValue)
            }
            if (acValue !== null) {
                // value previously stored
                let acInitialValue = acOptions.findIndex((item) => item.value === JSON.parse(acValue))
                setAcType(acInitialValue)
            }
            if (unitSizeValue !== null) {
                // value previously stored
                setUnitSize(JSON.parse(unitSizeValue))
            }
            if (elecMeterValue !== null) {
                // value previously stored
                setElecMeter(JSON.parse(elecMeterValue))
            }
            if (waterMeterValue !== null) {
                // value previously stored
                setWaterMeter(JSON.parse(waterMeterValue))
            }
            if (bedRoomsValue !== null) {
                // value previously stored
                setBedRooms(JSON.parse(bedRoomsValue))
            }
            if (bathRoomsValue !== null) {
                // value previously stored
                setBathRooms(JSON.parse(bathRoomsValue))
            }
            if (guestRoomsValue !== null) {
                // value previously stored
                setGuestRooms(JSON.parse(guestRoomsValue))
            }
            if (loungeRoomsValue !== null) {
                // value previously stored
                setLounges(JSON.parse(loungeRoomsValue))
            }
            if (photesArrValue != null) {
                setPhotosArr(JSON.parse(photesArrValue))
            }

        } catch (e) {
            // error reading value
        }
    }

    return (
        <>
            {isLoading ?
                (<View style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ActivityIndicator size={ICONS.xlIcon} color={COLORS.green} />
                </View>) :
                (
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
                                    <Reusabletextinput placeholder="Enter Size" headerText="Unit Size" onChangeText={(value) => { /^[0-9]*$/.test(value) ? setUnitSize(value) : null }} value={unitSize} onEndEditing={() => { saveData("unit-size", unitSize) }} />
                                </View>
                                <View style={styles.eachGroupContainer} >
                                    <View style={[styles.cardsWidth, styles.generalPaddingVertical]}>
                                        <DecreaseAndIncrease headerText="Bedrooms"
                                            decrease={() => { bedRooms > 0 ? (setBedRooms(bedRooms => bedRooms - 1), saveData("bed-rooms", bedRooms - 1)) : null }}
                                            increase={() => { setBedRooms(bedRooms => bedRooms + 1), saveData("bed-rooms", bedRooms + 1) }}
                                            number={`${bedRooms}`} />
                                    </View>
                                    <View style={[styles.cardsWidth, styles.generalPaddingVertical]}>
                                        <DecreaseAndIncrease
                                            headerText="Bathrooms"
                                            decrease={() => { bathRooms > 0 ? (setBathRooms(bathRooms => bathRooms - 1), saveData("bath-rooms", bathRooms - 1)) : null }}
                                            increase={() => { setBathRooms(bathRooms => bathRooms + 1), saveData("bath-rooms", bathRooms + 1) }}
                                            number={`${bathRooms}`} />
                                    </View>
                                    <View style={[styles.cardsWidth, styles.generalPaddingVertical]}>
                                        <DecreaseAndIncrease headerText="Guest Rooms"
                                            decrease={() => { guestRooms > 0 ? (setGuestRooms(guestRooms => guestRooms - 1), saveData("guest-rooms", guestRooms - 1)) : null }}
                                            increase={() => { setGuestRooms(guestRooms => guestRooms + 1), saveData("guest-rooms", guestRooms + 1) }}
                                            number={`${guestRooms}`} />
                                    </View>
                                    <View style={[styles.cardsWidth, styles.generalPaddingVertical]}>
                                        <DecreaseAndIncrease headerText="Lounges"
                                            decrease={() => { lounges > 0 ? (setLounges(lounges => lounges - 1), saveData("lounge-rooms", lounges - 1)) : null }}
                                            increase={() => { setLounges(lounges => lounges + 1), saveData("lounge-rooms", lounges + 1) }}

                                            number={`${lounges}`} />
                                    </View>
                                </View>

                                <View style={styles.eachGroupContainer}>
                                    <View style={[styles.cardsWidth, styles.generalPaddingVertical]}>
                                        <SwitchSelectorComponent options={furnishedOptions} headerText="Furnished" initialRender={furniture} onPress={(value) => saveData("furniture", value)} />
                                    </View>
                                    <View style={[styles.cardsWidth, styles.generalPaddingVertical]}>
                                        <SwitchSelectorComponent options={kitchenOptions} headerText="Kitchen" initialRender={kitchen} onPress={(value) => saveData("kitchen", value)} />
                                    </View>
                                    <View style={[styles.cardsWidth, styles.generalPaddingVertical]}>
                                        <SwitchSelectorComponent options={parkingOptions} headerText="Parking" initialRender={parking} onPress={(value) => saveData("parking", value)} />
                                    </View>
                                </View>
                                <View style={styles.generalPaddingVertical}>
                                    <Reusabletextinput placeholder="Enter meter no" headerText="Electricity Meter No." onChangeText={(value) => { /^[0-9]*$/.test(value) ? setElecMeter(value) : null }} value={elecMeter} onEndEditing={() => { saveData("elec-meter", elecMeter) }} />
                                </View>
                                <View style={styles.generalPaddingVertical}>
                                    <Reusabletextinput placeholder="Enter meter no" headerText="Water Meter No." onChangeText={(value) => { /^[0-9]*$/.test(value) ? setWaterMeter(value) : null }} value={waterMeter} onEndEditing={() => { saveData("water-meter", waterMeter) }} />
                                </View>
                                <View style={styles.generalPaddingVertical}>
                                    <SwitchSelectorComponent options={acOptions} headerText="Select AC Type" initialRender={acType} onPress={(value) => saveData("ac", value)} />
                                </View>
                                <Text style={styles.generalPaddingVertical} >Upload Photo</Text>
                                <View style={styles.uploadImageContainer}>
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ width: photosArr.length === 0 ? "100%" : null }}>
                                        <View style={styles.photesContainer}>
                                            {photosArr.length > 0 ? renderImages() : null}
                                            <View style={[styles.addImageStyle, { width: photosArr.length > 0 ? RFValue(250) : "100%" }]}>
                                                <TouchableOpacity onPress={() => { refRBSheet.current.open() }}>
                                                    <FontAwesome name="image" size={ICONS.xxlIcon} />
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                    </ScrollView>

                                </View>

                                <View style={styles.eachGroupContainer}>
                                    <View style={[styles.cardsWidth, styles.generalPaddingVertical]}>
                                        <GeneralButton buttonText="Back" btnBgColor={COLORS.gray} textBgColor={COLORS.green} />

                                    </View>
                                    <View style={[styles.cardsWidth, styles.generalPaddingVertical]}>
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
                                    flexDirection: "row",
                                    justifyContent: "space-around"
                                },
                            }}>
                            <TouchableOpacity
                                onPress={() => {
                                    requestCameraPermission().then((res) => {
                                        if (res === "granted")
                                            launchCamera();
                                        else
                                            Alert.alert("", "You Don't Grant Camera")

                                    })

                                    refRBSheet.current.close();
                                }}
                                style={styles.eachOptionInBottonTab}
                            >
                                <Text style={styles.optionTextStyle}>التقاط صوره</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    refRBSheet.current.close();
                                    selectFromGallery();
                                }}
                                style={styles.eachOptionInBottonTab}
                            >
                                <Text style={styles.optionTextStyle} >اختيار صوره</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => refRBSheet.current.close()}
                                style={styles.eachOptionInBottonTab}
                            >
                                <Text style={styles.optionTextStyle} >انهاء</Text>
                            </TouchableOpacity>
                        </RBSheet>
                    </>)
            }
        </>
    )
}
export default Task;
