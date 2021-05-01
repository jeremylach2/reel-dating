import React, { Component } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, ImageBackground, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ToggleSwitch from "toggle-switch-react-native";
import styles from "../../../assets/styles.js";

//Preferences --> to these three:
//Push notifications
//SMS notifications
//Email notifications

//Types of notifications app will send:
//New matches, new messages, likes, superlikes

const SettingsNotifications = ({ navigation }) => {
    return (
        <View style={styles.userLoggedStack.settings.settings.container}>
            <ImageBackground
                source={require("../../../assets/images/background-settings.png")}
                style={styles.userLoggedStack.settings.settings.background}
                resizeMode="cover">
                <View
                    style={styles.userLoggedStack.settings.settings.utilityBox}>
                    <View
                        style={
                            styles.userLoggedStack.settings.settings
                                .itemContainer
                        }>
                        <View
                            style={
                                styles.userLoggedStack.settings.settings
                                    .headerContent
                            }>
                            <MaterialIcons
                                name="notifications"
                                size={40}
                                color="white"
                            />
                        </View>

                        <View
                            style={
                                styles.userLoggedStack.settings.settings
                                    .itemContent
                            }>
                            <Text
                                style={
                                    styles.userLoggedStack.settings.settings
                                        .notificationText
                                }>
                                ON/OFF
                            </Text>
                            <ToggleSwitch onColor="blue" offColor="grey" />
                        </View>

                        <View
                            style={
                                styles.userLoggedStack.settings.settings
                                    .itemContent
                            }>
                            <Text
                                style={
                                    styles.userLoggedStack.settings.settings
                                        .notificationText
                                }>
                                Messages
                            </Text>
                            <ToggleSwitch onColor="blue" offColor="grey" />
                        </View>

                        <View
                            style={
                                styles.userLoggedStack.settings.settings
                                    .itemContent
                            }>
                            <Text
                                style={
                                    styles.userLoggedStack.settings.settings
                                        .notificationText
                                }>
                                New Matches
                            </Text>
                            <ToggleSwitch onColor="blue" offColor="grey" />
                        </View>

                        <View
                            style={
                                styles.userLoggedStack.settings.settings
                                    .itemContent
                            }>
                            <Text
                                style={
                                    styles.userLoggedStack.settings.settings
                                        .notificationText
                                }>
                                New Likes
                            </Text>
                            <ToggleSwitch onColor="blue" offColor="grey" />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default SettingsNotifications;
