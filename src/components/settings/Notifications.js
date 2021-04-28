import React, { Component } from "react";
import "react-native-gesture-handler";
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    Image,
    TextInput,
    Platform,
    TouchableNativeFeedback,
    StatusBar,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/Ionicons';
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
                source={require("../../assets/images/background-settings.png")}
                style={page.background}
                resizeMode="cover">
                <View style={page.box}>
                    <View style={page.item_container}>
                        <View style={page.header_content}>
                            <Icon3 name="notifications" size={40} color="white" />
                            <Text style={page.header}>NOTIFICATIONS</Text>
                            <Icon3 name="notifications" size={40} color="white" />
                        </View>

                        <View style={page.item_content}>
                            <Text style={page.text}>ON/OFF</Text>
                            <ToggleSwitch
                                onColor="blue"
                                offColor="grey"
                            />
                        </View>

                        <View style={page.item_content}>
                            <Text style={page.text}>Messages</Text>
                            <ToggleSwitch
                                onColor="blue"
                                offColor="grey"
                            />
                        </View>

                        <View style={page.item_content}>
                            <Text style={page.text}>New Matches</Text>
                            <ToggleSwitch
                                onColor="blue"
                                offColor="grey"
                            />
                        </View>

                        <View style={page.item_content}>
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
    box: {
        flex: 2,
        display: "flex",
        alignContent: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    item_container: {
        backgroundColor: "rgba(32, 32, 32, 0.3)",
        width: "70%",
    },
    item_content: {
        margin: 24,
        borderBottomWidth: 1,
        borderColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    header_content: {
        borderBottomWidth: 1,
        borderColor: "white",
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
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