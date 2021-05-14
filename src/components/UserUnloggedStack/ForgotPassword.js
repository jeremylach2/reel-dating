import React, { useState } from "react";
import { Image, Text, View, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../../assets/styles.js";
import auth from "@react-native-firebase/auth";

const ForgotPasswordUserInput = () => {
    const [email, setEmail] = React.useState("");

    return (
        <View style={styles.userUnloggedStack.userUnloggedStack.formContent}>
            <TextInput
                style={styles.userUnloggedStack.userUnloggedStack.userInput}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Email"
                placeholderTextColor="black"
            />

            <TouchableOpacity
                onPress={() => {
                    auth().sendPasswordResetEmail(email);
                }}>
                <View style={styles.userUnloggedStack.userUnloggedStack.loginButton}>
                    <Text style={styles.userUnloggedStack.userUnloggedStack.loginText}>
                        Reset Password
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const ForgotPassword = ({ navigation }) => {
    return (
        <View style={styles.userUnloggedStack.userUnloggedStack.container}>
            <ImageBackground
                style={styles.userUnloggedStack.userUnloggedStack.background}
                source={require("../../assets/images/background-login.jpg")}>
                <Image
                    style={styles.userUnloggedStack.userUnloggedStack.logo}
                    source={require("../../assets/images/logo.png")}
                />
                <View style={styles.userUnloggedStack.userUnloggedStack.utilityBox}>
                    <View style={styles.userUnloggedStack.userUnloggedStack.form}>
                        <Text style={styles.userUnloggedStack.userUnloggedStack.title}>
                            Reset Password
                        </Text>
                        <ForgotPasswordUserInput />
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <View style={styles.userUnloggedStack.userUnloggedStack.forgotButton}>
                                <Text
                                    style={styles.userUnloggedStack.userUnloggedStack.forgotButton}>
                                    Login instead.
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default ForgotPassword;
