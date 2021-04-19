import React, { Component } from "react";

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    ImageBackground,
    View,
    Image,
    TextInput,
    AppRegistry,
    TouchableHighlight,
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
    const [user, setUser] = React.useState("");
    const [pass, setPass] = React.useState("");
    const forgot = () => {};

    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../assets/images/background-login.jpg")}
                style={page.background}>
                <Image
                    style={page.logo}
                    source={require("../assets/images/logo.png")}
                />
                <View style={page.box}>
                    <View style={page.form}>
                        <Text style={page.title}>Login</Text>
                        <View style={page.form_content}>
                            <TextInput
                                style={page.login}
                                onChangeText={text => setUser(text)}
                                value={user}
                                placeholder="Username..."
                                placeholderTextColor="black"
                            />
                            <TextInput
                                style={page.login}
                                onChangeText={text => setPass(text)}
                                value={pass}
                                placeholder="Password..."
                                placeholderTextColor="black"
                            />
                            <TouchableOpacity>
                                <View style={page.login_button}>
                                    <Text style={page.login_text}>Login</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => forgot}>
                            <Text style={page.forgot}>Forgot My Password </Text>
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
    box: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",

    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        color: "black",
        fontSize: 25,
    },
    form: {
        backgroundColor: "white",
        padding: "5%",
        paddingBottom: "1%",
        marginTop: "1%",
        borderRadius: 8,
        width: "70%",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "center",
    },
    form_content: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        width: "100%",
    },
    login: {
        backgroundColor: "gray",
        borderRadius: 4,
        padding: "3%",
        marginBottom: "2%",
        width: "100%",
    },
    login_button: {
        backgroundColor: "#268CCB",
        borderRadius: 4,
        padding: "4%",
        marginBottom: "4%",
        width: "100%",
    },
    login_text: {
        color: "white",
        textAlign: "center",
    },
    forgot: {
        color: "black",
        opacity: 0.6,
    },
});

export default Login;
