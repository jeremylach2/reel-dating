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

const Register = ({ navigation }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [logError, setLogError] = React.useState();

    const forgot = () => { };

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
                        <Text style={styles.userUnloggedStack.userUnloggedStack.title}>Create Account</Text>
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
                                onPress={() => { //Add RegisterQuestionnaire somewhere right here.
                                    auth()
                                        .createUserWithEmailAndPassword(
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
                                <View style={styles.userUnloggedStack.userUnloggedStack.loginButton}>
                                    <Text style={styles.userUnloggedStack.userUnloggedStack.loginText}>
                                        Join Reel
                                    </Text>
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
                            {logError && (
                                <Text style={styles.userUnloggedStack.userUnloggedStack.loginErrorText}>
                                    {logError}
                                </Text>
                            )}
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Register;
