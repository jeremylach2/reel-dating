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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackNavigator } from "@react-navigation/stack";
import SettingsOptions from "./SettingsOptions";
import SettingsAccount from "./SettingsAccount";
import SettingsNotifications from "./SettingsNotifications";

const Stack = createStackNavigator();

const Settings = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="options">
                <Stack.Screen
                    name="options"
                    component={SettingsOptions}
                    options={{
                        title: "SETTINGS",
                        //headerTitleStyle: { alignSelf: "center", color: "white", fontFamily: "sans-serif-light", fontSize: 30 },
                        //headerShown: true,
                        //headerTransparent: true,
                    }}
                />
                <Stack.Screen
                    name="account"
                    component={SettingsAccount}
                    options={{
                        title: "Account",
                        headerTitleStyle: { alignSelf: "center", color: "white", fontFamily: "sans-serif-light", fontSize: 30 },
                        headerShown: true,
                        headerTransparent: true,
                    }}
                />
                <Stack.Screen
                    name="notifications"
                    component={SettingsNotifications}
                    options={{
                        title: "Notifications",
                        headerTitleStyle: { alignSelf: "center", color: "white", fontFamily: "sans-serif-light", fontSize: 30 },
                        headerShown: true,
                        headerTransparent: true,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};



export default Settings;
