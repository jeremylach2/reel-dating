import React from "react";
import "react-native-gesture-handler";
import { Text, ImageBackground, View, TouchableNativeFeedback } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import auth from "@react-native-firebase/auth";

import Users from "../../../lib/Users";
import styles from "../../../assets/styles.js";

const PrivacySecurity = ({ navigation }) => {
    return (
        <View style={styles.userLoggedStack.settings.settings.container}>
            <ImageBackground
                source={require("../../../assets/images/background-settings.png")}
                style={styles.userLoggedStack.settings.settings.background}
                resizeMode="cover">
                <View style={styles.userLoggedStack.settings.settings.utilityBox}>
                    <View style={styles.userLoggedStack.settings.settings.itemContainer}>
                        <View style={styles.userLoggedStack.settings.settings.headerContent}>
                            <MaterialIcons name="security" size={40} color="white" />
                        </View>

                        <TouchableNativeFeedback
                            onPress={() => navigation.navigate("resetpassword")}>
                            <View style={styles.userLoggedStack.settings.settings.itemContent}>
                                <Text style={styles.userLoggedStack.settings.settings.securityText}>
                                    Change Password
                                </Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback
                            onPress={async () => {
                                await Users.delete(auth().currentUser.uid);
                                await auth().currentUser.delete();
                            }}>
                            <View style={styles.userLoggedStack.settings.settings.itemContent}>
                                <Text style={styles.userLoggedStack.settings.settings.securityText}>
                                    Delete Account
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

export default PrivacySecurity;
