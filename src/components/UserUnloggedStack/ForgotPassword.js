import React, { useState } from "react";
import { Image, Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../../assets/styles.js";

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = React.useState("");
    const [firstPassword, setFirstPassword] = React.useState("");
    const [secondPassword, setSecondPassword] = React.useState("");

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
                        <Text style={styles.userUnloggedStack.userUnloggedStack.title}>Reset Password</Text>
                        <View style={styles.userUnloggedStack.userUnloggedStack.formContent}>
                            <TextInput
                                style={styles.userUnloggedStack.userUnloggedStack.userInput}
                                onChangeText={text => setEmail(text)}
                                value={email}
                                placeholder="Email Address"
                                placeholderTextColor="black"
                            />
                            <TextInput
                                style={styles.userUnloggedStack.userUnloggedStack.userInput}
                                onChangeText={text => setFirstPassword(text)}
                                value={firstPassword}
                                placeholder="New Password"
                                placeholderTextColor="black"
                            />
                            <TextInput
                                style={styles.userUnloggedStack.userUnloggedStack.userInput}
                                onChangeText={text => setSecondPassword(text)}
                                value={secondPassword}
                                placeholder="Retype Password"
                                placeholderTextColor="black"
                            />
                            <TouchableOpacity onPress>
                                <View style={styles.userUnloggedStack.userUnloggedStack.resetButton}>
                                    <Text style={styles.userUnloggedStack.userUnloggedStack.resetText}>RESET</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Login")}>
                                <View style={styles.userUnloggedStack.userUnloggedStack.forgotButton}>
                                    <Text style={styles.userUnloggedStack.userUnloggedStack.forgotButton}>
                                        Returning User?
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default ForgotPassword;