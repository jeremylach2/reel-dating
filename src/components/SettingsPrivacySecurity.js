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

const SettingsPrivacySecurity = ({ navigation }) => {
    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../assets/images/background-settings.png")}
                style={page.background}
                resizeMode="cover">
                <View style={page.box}>
                    <View style={page.item_container}>
                        <View style={page.header_content}>
                            <Icon3 name="security" size={25} color="white" />
                            <Text style={page.header}>Privacy and Security</Text>
                            <Icon3 name="security" size={25} color="white" />
                        </View>

                        <TouchableNativeFeedback onPress>
                            <View style={page.item_content}>
                                <Text style={page.text}>Change Password</Text>
                                <Icon name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback onPress>
                            <View style={page.item_content}>
                                <Text style={page.text}>Blocked Accounts</Text>
                                <Icon name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback onPress>
                            <View style={page.item_content}>
                                <Text style={page.text}>Delete Acccount</Text>
                                <Icon name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>

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

export default SettingsPrivacySecurity;