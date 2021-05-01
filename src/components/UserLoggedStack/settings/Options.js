import React from "react";
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    Image,
    TouchableNativeFeedback,
    ScrollView,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import AccountIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "../../../assets/styles.js";

import auth from "@react-native-firebase/auth";

const Options = ({ navigation }) => {
    return (
        <View style={styles.userLoggedStack.settings.settings.container}>
            <ImageBackground
                source={require("../../../assets/images/background-settings.png")}
                style={styles.userLoggedStack.settings.settings.background}
                resizeMode="cover">
                <View style={styles.userLoggedStack.settings.settings.utilityBox}>
                    <Image
                        source={require("../../../assets/images/profile-picture-example.png")}
                        style={styles.userLoggedStack.settings.settings.profilePicture}
                    />
                    <View style={styles.userLoggedStack.settings.settings.optionsButtonContainer}>
                        <TouchableNativeFeedback
                            onPress={() => navigation.navigate("account")}>
                            <View style={styles.userLoggedStack.settings.settings.optionsButton}>
                                <AccountIcon name="account" size={25} color="white" />
                                <Text style={styles.userLoggedStack.settings.settings.optionsText}>Account</Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                            onPress={() =>
                                navigation.navigate("notifications")
                            }>
                            <View style={styles.userLoggedStack.settings.settings.optionsButton}>
                                <MaterialIcons
                                    name="notifications"
                                    size={25}
                                    color="white"
                                />
                                <Text style={styles.userLoggedStack.settings.settings.optionsText}>
                                    Notifications
                                </Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                            onPress={() =>
                                navigation.navigate("questionnaire")
                            }>
                            <View style={styles.userLoggedStack.settings.settings.optionsButton}>
                                <AntDesign
                                    name="questioncircle"
                                    size={25}
                                    color="white"
                                />
                                <Text style={styles.userLoggedStack.settings.settings.optionsText}>
                                    Change Questionnaire
                                </Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                            onPress={() => navigation.navigate("privacy")}>
                            <View style={styles.userLoggedStack.settings.settings.optionsButton}>
                                <MaterialIcons
                                    name="security"
                                    size={25}
                                    color="white"
                                />
                                <Text style={styles.userLoggedStack.settings.settings.optionsText}>
                                    Privacy & Security
                                </Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                            onPress={() => navigation.navigate("help")}>
                            <View style={styles.userLoggedStack.settings.settings.optionsButton}>
                                <Ionicons
                                    name="help-buoy"
                                    size={25}
                                    color="white"
                                />
                                <Text style={styles.userLoggedStack.settings.settings.optionsText}>
                                    Help & Support
                                </Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                            onPress={() => auth().signOut()}>
                            <View style={styles.userLoggedStack.settings.settings.optionsButton}>
                                <FontAwesome
                                    name="sign-out"
                                    size={25}
                                    color="white"
                                />
                                <Text style={styles.userLoggedStack.settings.settings.optionsText}>Sign Out</Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const page = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        width: "100%",
        height: "100%",
    },
    utilityBox: {
        alignContent: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    profilePicture: {
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
    buttonText: {
        color: "white",
    },
});

export default Options;
