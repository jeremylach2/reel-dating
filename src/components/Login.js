import React, { Component } from "react";

import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

const Login = props => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const forgot = () => { };

    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../assets/images/background-login.jpg")}
                style={page.background}>
                <Image
                    style={page.logo}
                    source={require("../assets/images/logo.png")}
                />
                <View style={page.utilityBox}>
                    <View style={page.form}>
                        <Text style={page.title}>Login</Text>
                        <View style={page.formContent}>
                            <TextInput
                                style={page.userInput}
                                onChangeText={text => setUsername(text)}
                                value={username}
                                placeholder="Username..."
                                placeholderTextColor="black"
                            />
                            <TextInput
                                style={page.userInput}
                                onChangeText={text => setPassword(text)}
                                value={password}
                                placeholder="Password..."
                                placeholderTextColor="black"
                            />
                            <TouchableOpacity>
                                <View style={page.loginButton}>
                                    <Text style={page.loginText}>Login</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => forgot}>
                            <View style={page.forgotButton}>
                                <Text style={page.forgotButton}>Forgot My Password </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const page = StyleSheet.create({
    background: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    logo: {
        resizeMode: "contain",
        height: 150,
        width: "100%",
    },
    container: {
        flex: 1,
        flexDirection: "row",
    },
    utilityBox: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",

    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        fontSize: 25,
    },
    form: {
        backgroundColor: "transparent",
        borderColor: "white",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 8,
        padding: "5%",
        paddingBottom: "1%",
        marginTop: "1%",
        width: "70%",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "center",
    },
    formContent: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        width: "100%",
    },
    userInput: {
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        backgroundColor: "#B0C4DE",
        borderRadius: 4,
        padding: "3%",
        marginBottom: "2%",
    },
    loginButton: {
        backgroundColor: "#FFFFFF",
        borderRadius: 4,
        padding: "4%",
        marginBottom: "4%",
        width: "100%",
    },
    loginText: {
        color: "black",
        textAlign: "center",
    },
    forgotButton: {
        alignItems: "center",
        color: "black",
        opacity: 0.6,
        textDecorationLine: "underline",
    },
});

export default Login;