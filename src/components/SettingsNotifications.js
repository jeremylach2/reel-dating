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
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/Ionicons'

//Preferences --> to these three:
//Push notifications
//SMS notifications
//Email notifications

//Types of notifications app will send:
//New matches, new messages, likes, superlikes

const Notif = createStackNavigator();

const SettingsNotifications = ({navigation}) => {
    return(
        <NavigationContainer>
            <Notif.Navigator initialRouteName="notifications">
                <Notif.Screen
                    name="notifications"
                    component={Notifications}
                    options={{
                        title: "Notifications",
                        headerTitleStyle: { alignSelf: "center", color: "white", fontFamily: "sans-serif-light", fontSize: 30 },
                        headerShown: true,
                        headerTransparent: true,
                    }}
                />
                <Notif.Screen
                    name="preferences"
                    component={Preferences}
                    options={{
                        title: "Preferences",
                        headerTitleStyle: { alignSelf: "center", color: "white", fontFamily: "sans-serif-light", fontSize: 30 },
                        headerShown: true,
                        headerTransparent: true,
                    }}
                />
                <Notif.Screen
                    name="app_notifications"
                    component={App_Notifications}
                    options={{
                        title: "App Notifications",
                        headerTitleStyle: { alignSelf: "center", color: "white", fontFamily: "sans-serif-light", fontSize: 30 },
                        headerShown: true,
                        headerTransparent: true,
                    }}
                />
            </Notif.Navigator>
        </NavigationContainer>
    );
}

function Notifications ({ navigation }) {
    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../assets/images/background-settings.png")}
                style={page.background}
                resizeMode="cover">
                <View style={page.box}>
                    <View style={page.buttonContainer}>
                        <TouchableNativeFeedback onPress={() => navigation.navigate("preferences")}>
                            <View style={page.button}>
                                <Icon3 name="notifications" size={25} color="white" />
                                <Text style={page.button_text}>Preferences</Text>
                                <Icon name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => navigation.navigate("app_notifications")}>
                            <View style={page.button}>
                                <Icon3 name="notifications" size={25} color="white" />
                                <Text style={page.button_text}>App Notifications</Text>
                                <Icon name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
};

//These functions below are just test holders as of right now.

function Preferences ({ navigation }) {
    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../assets/images/background-settings.png")}
                style={page.background}
                resizeMode="cover">
                <View style={page.box}>
                    <View style={page.buttonContainer}>
                        <TouchableNativeFeedback onPress={() => navigation.navigate("notifications")}>
                            <View style={page.button}>
                                <Icon3 name="notifications" size={25} color="white" />
                                <Text style={page.button_text}>Notifications</Text>
                                <Icon name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
};

function App_Notifications ({ navigation }) {
    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../assets/images/background-settings.png")}
                style={page.background}
                resizeMode="cover">
                <View style={page.box}>
                    <View style={page.buttonContainer}>
                        <TouchableNativeFeedback onPress={() => navigation.navigate("notifications")}>
                            <View style={page.button}>
                                <Icon3 name="notifications" size={25} color="white" />
                                <Text style={page.button_text}>Notifications</Text>
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
        marginBottom: "5%",
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

export default SettingsNotifications;