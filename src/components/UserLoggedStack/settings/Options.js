import React, { useContext } from "react";
import { Text, ImageBackground, View, Image, TouchableNativeFeedback } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import AccountIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "../../../assets/styles.js";

import auth from "@react-native-firebase/auth";

import UserContext from "../../../lib/UserContext";

const Options = ({ navigation }) => {
    const { user } = useContext(UserContext);

    return (
        <View style={styles.userLoggedStack.settings.settings.container}>
            <ImageBackground
                source={require("../../../assets/images/background-settings.png")}
                style={styles.userLoggedStack.settings.settings.background}
                resizeMode="cover">
                <View style={styles.userLoggedStack.settings.settings.utilityBox}>
                    <View style={styles.userLoggedStack.settings.settings.optionsButtonContainer}>
                        <TouchableNativeFeedback onPress={() => navigation.navigate("account")}>
                            <View style={styles.userLoggedStack.settings.settings.optionsButton}>
                                <AccountIcon name="account" size={25} color="white" />
                                <Text style={styles.userLoggedStack.settings.settings.optionsText}>
                                    Account
                                </Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                            onPress={() => navigation.navigate("notifications")}>
                            <View style={styles.userLoggedStack.settings.settings.optionsButton}>
                                <MaterialIcons name="notifications" size={25} color="white" />
                                <Text style={styles.userLoggedStack.settings.settings.optionsText}>
                                    Notifications
                                </Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                            onPress={() => navigation.navigate("questionnaire")}>
                            <View style={styles.userLoggedStack.settings.settings.optionsButton}>
                                <AntDesign name="questioncircle" size={25} color="white" />
                                <Text style={styles.userLoggedStack.settings.settings.optionsText}>
                                    Change Questionnaire
                                </Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => navigation.navigate("privacy")}>
                            <View style={styles.userLoggedStack.settings.settings.optionsButton}>
                                <MaterialIcons name="security" size={25} color="white" />
                                <Text style={styles.userLoggedStack.settings.settings.optionsText}>
                                    Privacy & Security
                                </Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => navigation.navigate("help")}>
                            <View style={styles.userLoggedStack.settings.settings.optionsButton}>
                                <Ionicons name="help-buoy" size={25} color="white" />
                                <Text style={styles.userLoggedStack.settings.settings.optionsText}>
                                    Help & Support
                                </Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => auth().signOut()}>
                            <View style={styles.userLoggedStack.settings.settings.optionsButton}>
                                <FontAwesome name="sign-out" size={25} color="white" />
                                <Text style={styles.userLoggedStack.settings.settings.optionsText}>
                                    Sign Out
                                </Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Options;
