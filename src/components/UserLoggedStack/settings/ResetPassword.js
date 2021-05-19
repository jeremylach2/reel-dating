import React, { useContext, useState } from "react";
import {
    Image,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import auth from "@react-native-firebase/auth";

import styles from "../../../assets/styles.js";
import UserContext from "../../../lib/UserContext.js";

const ForgotPassword = ({ navigation }) => {
    const { user } = useContext(UserContext);
    const [logError, setLogError] = useState(" ");

    return (
        <View style={styles.userLoggedStack.settings.settings.container}>
            <ImageBackground
                source={require("../../../assets/images/background-settings.png")}
                style={styles.userLoggedStack.settings.settings.background}
                resizeMode="cover">
                <ScrollView>
                    <View style={styles.userLoggedStack.settings.settings.utilityBox}>
                        <Image
                            source={require("../../../assets/images/profile-picture-example.png")}
                            style={styles.userLoggedStack.settings.settings.profilePicture}
                        />
                        <View style={styles.userLoggedStack.settings.settings.itemContainer}>
                            <View style={styles.userLoggedStack.settings.settings.itemContent}>
                                <Text style={styles.userLoggedStack.settings.settings.accountText}>
                                    Reset by Email
                                </Text>
                            </View>
                        </View>
                        {logError && (
                            <Text style={styles.userUnloggedStack.userUnloggedStack.loginErrorText}>
                                {logError}
                            </Text>
                        )}
                    </View>
                    <View style={styles.userLoggedStack.settings.settings.buttonContainer}>
                        <TouchableOpacity
                            onPress={() => {
                                auth().sendPasswordResetEmail(auth().currentUser.email);
                                setLogError("You should receive an email shortly.");
                            }}>
                            <LinearGradient
                                colors={["#ff79cd", "#aa2ee6"]}
                                style={styles.userLoggedStack.settings.settings.linearGradient}
                                start={{ x: 0.7, y: 0 }}>
                                <Text style={styles.userLoggedStack.settings.settings.buttonText}>
                                    {" "}
                                    Request Email{" "}
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

export default ForgotPassword;
