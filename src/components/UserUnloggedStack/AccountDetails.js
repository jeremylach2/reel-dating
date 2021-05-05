import React from "react";
import "react-native-gesture-handler";
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";

import Users from "../../lib/Users";

const AccountDetails = ({ uid, onUserCreate }) => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");

    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../../assets/images/background-login.jpg")}
                style={page.background}>
                <View style={page.longUtilityBox}>
                    <View style={page.form}>
                        <Text style={page.title}>Details</Text>
                        <View style={page.formContent}>
                            <TextInput
                                style={page.userInput}
                                onChangeText={text => setFirstName(text)}
                                value={firstName}
                                placeholder="First Name"
                                placeholderTextColor="black"
                            />
                            <TextInput
                                style={page.userInput}
                                onChangeText={text => setLastName(text)}
                                value={lastName}
                                placeholder="Last Name"
                                placeholderTextColor="black"
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    Users.createUserWithUID(uid, {
                                        name: {
                                            first: firstName,
                                            last: lastName,
                                        },
                                    }).then(() => onUserCreate());
                                }}>
                                <View style={page.loginButton}>
                                    <Text style={page.loginText}>
                                        Join Reel
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
    longUtilityBox: {
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
    returnButton: {
        textAlign: "center",
        color: "white",
        opacity: 0.6,
        textDecorationLine: "underline",
    },
});

export default AccountDetails;
