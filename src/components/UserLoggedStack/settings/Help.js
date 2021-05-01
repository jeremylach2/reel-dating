import React from "react";
import "react-native-gesture-handler";
import {
    Text,
    ImageBackground,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "../../../assets/styles.js";

const Help = ({ navigation }) => {
    const [problem, sendProblem] = React.useState("");

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
                                .textInputContainer
                        }>
                        <TextInput
                            style={
                                styles.userLoggedStack.settings.settings
                                    .textInputBox
                            }
                            color="white"
                            placeholder="Type Your Problem Here..."
                            placeholderTextColor="white"
                            multiline={true}
                            numberOfLines={5}
                        />
                    </View>
                </View>

                <View
                    style={
                        styles.userLoggedStack.settings.settings.buttonContainer
                    }>
                    <TouchableOpacity>
                        <LinearGradient
                            colors={["#ff79cd", "#aa2ee6"]}
                            style={
                                styles.userLoggedStack.settings.settings
                                    .linearGradient
                            }
                            start={{ x: 0.7, y: 0 }}>
                            <Text
                                style={
                                    styles.userLoggedStack.settings.settings
                                        .buttonText
                                }>
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
