import React, { useState } from "react";
import "react-native-gesture-handler";
import { Text, ImageBackground, View, TextInput, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import auth from "@react-native-firebase/auth";

import styles from "../../../assets/styles.js";
import SupportRequests from "../../../lib/SupportRequests";

const Help = () => {
    const [problem, setProblem] = useState("");

    return (
        <View style={styles.userLoggedStack.settings.settings.container}>
            <ImageBackground
                source={require("../../../assets/images/background-settings.png")}
                style={styles.userLoggedStack.settings.settings.background}
                resizeMode="cover">
                <View style={styles.userLoggedStack.settings.settings.utilityBox}>
                    <View style={styles.userLoggedStack.settings.settings.textInputContainer}>
                        <TextInput
                            style={styles.userLoggedStack.settings.settings.textInputBox}
                            color="white"
                            onChangeText={text => setProblem(text)}
                            value={problem}
                            placeholder="Type Your Problem Here..."
                            placeholderTextColor="white"
                            multiline={true}
                            numberOfLines={5}
                        />
                    </View>
                </View>

                <View style={styles.userLoggedStack.settings.settings.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            SupportRequests.create({
                                message: problem,
                                uid: auth().currentUser.uid,
                            });
                        }}>
                        <LinearGradient
                            colors={["#ff79cd", "#aa2ee6"]}
                            style={styles.userLoggedStack.settings.settings.linearGradient}
                            start={{ x: 0.7, y: 0 }}>
                            <Text style={styles.userLoggedStack.settings.settings.buttonText}>
                                Send Problem
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Help;
