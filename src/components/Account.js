import React, { Component } from "react";
import "react-native-gesture-handler";
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
Stack.Navigator.defaultProps = {
    headerMode: "none",
};

const Account = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="pg1">
                <Stack.Screen name="pg1" component={AccountPage1} />
                <Stack.Screen name="pg2" component={AccountPage2} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const AccountPage1 = ({ navigation }) => {
    const [username, set_username] = React.useState("");
    const [password, set_password] = React.useState("");

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
                        <Text style={page.title}>Create Account</Text>
                        <View style={page.form_content}>
                            <TextInput
                                style={page.user_input}
                                onChangeText={text => set_username(text)}
                                value={username}
                                placeholder="Username..."
                                placeholderTextColor="black"
                            />
                            <TextInput
                                style={page.user_input}
                                onChangeText={text => set_password(text)}
                                value={password}
                                placeholder="Password..."
                                placeholderTextColor="black"
                            />
                            <TouchableOpacity onPress={() => navigation.navigate("pg2")}>
                                <View style={page.login_button}>
                                    <Text style={page.login_text}>Continue</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={page.return_button}>Returning User? Login Here!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const AccountPage2 = props => {
    const [phone_num, set_phoneNum] = React.useState("");
    const [first_name, set_firstName] = React.useState("");
    const [last_name, set_lastName] = React.useState("");

    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../assets/images/background-login.jpg")}
                style={page.background}>
                <View style={page.long_box}>
                    <View style={page.form}>
                        <Text style={page.title}>Create Account</Text>
                        <View style={page.form_content}>
                            <TextInput
                                style={page.user_input}
                                onChangeText={text => set_firstName(text)}
                                value={first_name}
                                placeholder="First Name"
                                placeholderTextColor="black"
                            />
                            <TextInput
                                style={page.user_input}
                                onChangeText={text => set_lastName(text)}
                                value={last_name}
                                placeholder="Last Name"
                                placeholderTextColor="black"
                            />
                            <TextInput
                                style={page.user_input}
                                onChangeText={text => set_phoneNum(text)}
                                value={phone_num}
                                placeholder="Phone Number"
                                placeholderTextColor="black"
                                keyboardType={"number-pad"}
                            />
                            <TouchableOpacity>
                                <View style={page.login_button}>
                                    <Text style={page.login_text}>Join Reel</Text>
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
    box: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
    },
    long_box: {
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
    form_content: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        width: "100%",
    },
    user_input: {
        backgroundColor: "#B0C4DE",
        borderRadius: 4,
        padding: "3%",
        marginBottom: "2%",
        width: "100%",
    },
    login_button: {
        backgroundColor: "#FFFFFF",
        borderRadius: 4,
        padding: "4%",
        marginBottom: "4%",
        width: "100%",
    },
    login_text: {
        color: "black",
        textAlign: "center",
    },
    return_button: {
        textAlign: "center",
        color: "white",
        opacity: 0.6,
        textDecorationLine: "underline",
    },
});

export default Account;
