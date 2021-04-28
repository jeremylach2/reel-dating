import React from "react";
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";

import auth from "@react-native-firebase/auth";
import styles from "../../assets/styles.js";

const Login = ({ navigation }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [logError, setLogError] = React.useState();

    const forgot = () => {};

    return (
        <View style={styles.userUnloggedStack.container}>
            <ImageBackground
                source={require("../../assets/images/background-login.jpg")}
                style={styles.userUnloggedStack.background}>
                <Image
                    style={styles.userUnloggedStack.logo}
                    source={require("../../assets/images/logo.png")}
                />
                <View style={styles.userUnloggedStack.utilityBox}>
                    <View style={styles.userUnloggedStack.form}>
                        <Text style={styles.userUnloggedStack.title}>
                            Login
                        </Text>
                        <View style={styles.userUnloggedStack.formContent}>
                            <TextInput
                                style={styles.userUnloggedStack.userInput}
                                onChangeText={text => setEmail(text)}
                                value={email}
                                placeholder="Email"
                                placeholderTextColor="black"
                            />
                            <TextInput
                                style={styles.userUnloggedStack.userInput}
                                onChangeText={text => setPassword(text)}
                                value={password}
                                placeholder="Password"
                                placeholderTextColor="black"
                                secureTextEntry={true}
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    auth()
                                        .signInWithEmailAndPassword(
                                            email,
                                            password
                                        )
                                        .then(() => {
                                            console.log(
                                                "User account created & signed in!"
                                            );
                                        })
                                        .catch(error => {
                                            setLogError(error);
                                        });
                                }}>
                                <View
                                    style={
                                        styles.userUnloggedStack.loginButton
                                    }>
                                    <Text
                                        style={
                                            styles.userUnloggedStack.loginText
                                        }>
                                        Login
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            {logError && (
                                <Text
                                    style={
                                        styles.userUnloggedStack.loginErrorText
                                    }>
                                    Invalid email or password.
                                </Text>
                            )}
                        </View>
                        <TouchableOpacity onPress={() => forgot}>
                            <View style={styles.userUnloggedStack.forgotButton}>
                                <Text
                                    style={
                                        styles.userUnloggedStack.forgotButton
                                    }>
                                    Forgot My Password
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Register")}>
                            <View style={styles.userUnloggedStack.forgotButton}>
                                <Text
                                    style={
                                        styles.userUnloggedStack.forgotButton
                                    }>
                                    Create an Account
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
