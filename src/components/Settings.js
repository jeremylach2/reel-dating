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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackNavigator } from "@react-navigation/stack";

import SettingsOptions from "./SettingsOptions";
import SettingsAccount from "./SettingsAccount";


const Stack = createStackNavigator();

const setting = <Icon4 name="settings" size={45} color="#B2B2B2" />;
const Settings = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="options">
                <Stack.Screen
                    name="options"
                    component={SettingsOptions}
                    options={{
                        title: "SETTINGS",
                        headerTitleStyle: { alignSelf: "center", color: "white", fontFamily: "sans-serif-light", fontSize: 30},
                        headerShown: true,
                        headerTransparent: true,
                    }}
                />
                <Stack.Screen
                    name="account"
                    component={SettingsAccount}
                    options={{
                        title: "Account",
                        headerTitleStyle: {  color: "white" },
                        headerShown: true,
                        headerTransparent: true,
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};



export default Settings;
