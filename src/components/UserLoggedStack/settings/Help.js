import React, { Component } from "react";
import "react-native-gesture-handler";
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    TextInput,
    TouchableNativeFeedback,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import styles from "../../../assets/styles.js";

const Help = ({ navigation }) => {
    const [problem, sendProblem] = React.useState("");

    return (
        <View style={styles.userLoggedStack.settings.settings.container}>
            <ImageBackground
                source={require("../../../assets/images/background-settings.png")}
                style={styles.userLoggedStack.settings.settings.background}
                resizeMode="cover">
                <View style={styles.userLoggedStack.settings.settings.utilityBox}>
                    <View style={styles.userLoggedStack.settings.settings.titleBox}>
                        <View style={styles.userLoggedStack.settings.settings.headerContent}>
                            <Ionicons name="help-buoy" size={25} color="white" />
                        </View>

                        <View style={styles.userLoggedStack.settings.settings.title}>
                            <Text style={styles.userLoggedStack.settings.settings.title}>What is your problem?</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.userLoggedStack.settings.settings.utilityBox}>
                    <TextInput
                        style={[
                            styles.userLoggedStack.settings.settings.textBox,
                        ]}
                        size="25"
                        label="Problem"
                        placeholder="Write about your problem here..."
                        placeholderTextColor="white"
                    />
                </View>

                <View style={styles.userLoggedStack.settings.settings.button}>
                    <TouchableNativeFeedback
                        onPress={() => navigation.navigate("help")}>
                        <View>
                            <Feather name="send" size={25} color="white" />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Help;
