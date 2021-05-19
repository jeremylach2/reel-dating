import React, { useState } from "react";
import { Text, ImageBackground, View, Image, TextInput, TouchableOpacity } from "react-native";

import auth from "@react-native-firebase/auth";
import styles from "../../assets/styles.js";

const LoginUserInput = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logError, setLogError] = useState();

    return (
        <View style={styles.userUnloggedStack.userUnloggedStack.formContent}>
            <TextInput
                style={styles.userUnloggedStack.userUnloggedStack.userInput}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Email"
                placeholderTextColor="black"
            />
            <TextInput
                style={styles.userUnloggedStack.userUnloggedStack.userInput}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder="Password"
                placeholderTextColor="black"
                secureTextEntry={true}
            />

            <TouchableOpacity
                onPress={() => {
                    auth()
                        .signInWithEmailAndPassword(email, password)
                        .catch(error => {
                            setLogError(error);
                        });
                }}>
                <View style={styles.userUnloggedStack.userUnloggedStack.loginButton}>
                    <Text style={styles.userUnloggedStack.userUnloggedStack.loginText}>Login</Text>
                </View>
            </TouchableOpacity>

            {logError && (
                <Text style={styles.userUnloggedStack.userUnloggedStack.loginErrorText}>
                    Invalid email or password.
                </Text>
            )}
        </View>
    );
};

const Login = ({ navigation }) => {
    return (
        <View style={styles.userUnloggedStack.userUnloggedStack.container}>
            <ImageBackground
                source={require("../../assets/images/background-login.jpg")}
                style={styles.userUnloggedStack.userUnloggedStack.background}>
                <Image
                    style={styles.userUnloggedStack.userUnloggedStack.logo}
                    source={require("../../assets/images/logo.png")}
                />
                <View style={styles.userUnloggedStack.userUnloggedStack.utilityBox}>
                    <View style={styles.userUnloggedStack.userUnloggedStack.form}>
                        <LoginUserInput />
                        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                            <View style={styles.userUnloggedStack.userUnloggedStack.forgotButton}>
                                <Text
                                    style={styles.userUnloggedStack.userUnloggedStack.forgotButton}>
                                    Forgot my Password
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                            <View style={styles.userUnloggedStack.userUnloggedStack.forgotButton}>
                                <Text
                                    style={styles.userUnloggedStack.userUnloggedStack.forgotButton}>
                                    <View
                                        style={
                                            styles.userUnloggedStack.userUnloggedStack.forgotButton
                                        }>
                                        <Text
                                            style={
                                                styles.userUnloggedStack.userUnloggedStack
                                                    .forgotButton
                                            }>
                                            Create an Account
                                        </Text>
                                    </View>
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Login;
