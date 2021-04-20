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
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/Ionicons'

const SettingsOptions = ({ navigation }) => {
    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../assets/images/background-settings.png")}
                style={page.background}
                resizeMode="cover">
                <View style={page.box}>
                    <Image
                        source={require("../assets/images/profile-picture-example.png")}
                        style={page.profile_pic} />
                    <View style={page.buttonContainer}>
                        <TouchableNativeFeedback onPress={() => navigation.navigate("account")}>
                            <View style={page.button}>
                                <Icon2 name="account" size={25} color="white" />
                                <Text style={page.button_text}>Account</Text>
                                <Icon name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => navigation.navigate("notifications")}>
                            <View style={page.button}>
                                <Icon3 name="notifications" size={25} color="white" />
                                <Text style={page.button_text}>Notifications</Text>
                                <Icon name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => navigation.navigate("questionnaire")}>
                            <View style={page.button}>
                                <Icon name="questioncircle" size={25} color="white" />
                                <Text style={page.button_text}>Change Questionnaire</Text>
                                <Icon name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => navigation.navigate("privacy")}>
                            <View style={page.button}>
                                <Icon3 name="security" size={25} color="white" />
                                <Text style={page.button_text}>Privacy & Security</Text>
                                <Icon name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => navigation.navigate("help")}>
                            <View style={page.button}>
                                <Icon4 name="help-buoy" size={25} color="white" />
                                <Text style={page.button_text}>Help & Support</Text>
                                <Icon name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
};

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
        display: "flex",
        alignContent: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    profile_pic: {
        width: 75,
        height: 75,
        marginTop: "15%",
    },
    buttonContainer: {
        backgroundColor: "rgba(32, 32, 32, 0.3)",
        width: "70%",
    },
    button: {
        margin: 24,
        borderBottomWidth: 1,
        borderColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    button_text: {
        color: "white",
    }
});
export default SettingsOptions;