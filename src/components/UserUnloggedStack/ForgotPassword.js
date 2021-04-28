import React, { useState } from "react";
import { Image, Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from "react-native";
//https://codepen.io/tnmaysharma/pen/KzLGOw

const ForgotPassword = props => {
    const [email, setEmail] = React.useState("");
    const [firstPassword, setFirstPassword] = React.useState("");
    const [secondPassword, setSecondPassword] = React.useState("");

    return (
        <View style={page.container}>
            <ImageBackground
                style={page.background}
                source={require("../../assets/images/background-login.jpg")}>
                <Image
                    style={page.logo}
                    source={require("../../assets/images/logo.png")}
                />
                <View style={page.utilityBox}>
                    <View style={page.form}>
                        <Text style={page.title}>Reset Password</Text>
                        <View style={page.formContent}>
                            <TextInput
                                style={page.userInput}
                                onChangeText={text => setEmail(text)}
                                value={email}
                                placeholder="Email Address"
                                placeholderTextColor="black"
                            />
                            <TextInput
                                style={page.userInput}
                                onChangeText={text => setFirstPassword(text)}
                                value={firstPassword}
                                placeholder="New Password"
                                placeholderTextColor="black"
                            />
                            <TextInput
                                style={page.userInput}
                                onChangeText={text => setSecondPassword(text)}
                                value={secondPassword}
                                placeholder="Retype Password"
                                placeholderTextColor="black"
                            />
                            <TouchableOpacity onPress>
                                <View style={page.resetButton}>
                                    <Text style={page.resetText}>RESET</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
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
        height: 400,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        fontSize: 22,
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
    resetButton: {
        backgroundColor: "#FFFFFF",
        borderRadius: 4,
        padding: "4%",
        marginBottom: "4%",
        width: "100%",
    },
    resetText: {
        color: "black",
        textAlign: "center",
    },
});

export default ForgotPassword;