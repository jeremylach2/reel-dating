import React, { Component } from "react";
import "react-native-gesture-handler";
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ToggleSwitch from 'toggle-switch-react-native';

//Preferences --> to these three:
//Push notifications
//SMS notifications
//Email notifications

//Types of notifications app will send:
//New matches, new messages, likes, superlikes

const SettingsNotifications = ({ navigation }) => {
    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../../../assets/images/background-settings.png")}
                style={page.background}
                resizeMode="cover">
                <View style={page.utilityBox}>
                    <View style={page.itemContainer}>
                        <View style={page.headerContent}>
                            <MaterialIcons name="notifications" size={40} color="white" />
                        </View>

                        <View style={page.itemContent}>
                            <Text style={page.text}>ON/OFF</Text>
                            <ToggleSwitch
                                onColor="blue"
                                offColor="grey"
                            />
                        </View>

                        <View style={page.itemContent}>
                            <Text style={page.text}>Messages</Text>
                            <ToggleSwitch
                                onColor="blue"
                                offColor="grey"
                            />
                        </View>

                        <View style={page.itemContent}>
                            <Text style={page.text}>New Matches</Text>
                            <ToggleSwitch
                                onColor="blue"
                                offColor="grey"
                            />
                        </View>

                        <View style={page.itemContent}>
                            <Text style={page.text}>New Likes</Text>
                            <ToggleSwitch
                                onColor="blue"
                                offColor="grey"
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const page = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    utilityBox: {
        flex: 2,
        display: "flex",
        alignContent: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    itemContainer: {
        backgroundColor: "rgba(32, 32, 32, 0.3)",
        width: "70%",
    },
    itemContent: {
        margin: 24,
        borderBottomWidth: 1,
        borderColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerContent: {
        margin: 10,
        alignItems: "center",
    },
    header: {
        color: "white",
        fontSize: 20,
    },
    text: {
        color: "white",
        fontSize: 20,
    },
});

export default SettingsNotifications;