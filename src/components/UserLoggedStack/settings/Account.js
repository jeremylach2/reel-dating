import React, { Component } from "react";
import "react-native-gesture-handler";
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    Image,
    TextInput,
    Platform,
    TouchableNativeFeedback,
    StatusBar,
    Button,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";

const Account = ({ navigation }) => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");

    //Still need to add blocked accounts and profile picture change buttons - had issue with them before removing for overall well being.
    //Also change the button color for the update buttons.
    //Also, why would you have change password here? shouldn't it be it's own thing or redirect somewhere else?

    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../../../assets/images/background-settings.png")}
                style={page.background}
                resizeMode="cover">
                <ScrollView>
                    <View style={page.box}>
                        <Image
                            source={require("../../../assets/images/profile-picture-example.png")}
                            style={page.profile_pic}
                        />
                        <View style={page.boxContainer}>
                            <MaterialIcons
                                name="account"
                                size={35}
                                color="white"
                            />
                            <View style={page.box_content}>
                                <Text style={page.text}>First Name: </Text>
                                <TextInput
                                    color="white"
                                    onChangeText={text => setFirstName(text)}
                                    value={firstName}
                                    placeholder="First Name Sample"
                                    placeholderTextColor="white"
                                />
                            </View>

                            <View style={page.box_content}>
                                <Text style={page.text}>Last Name: </Text>
                                <TextInput
                                    color="white"
                                    onChangeText={text => setLastName(text)}
                                    value={lastName}
                                    placeholder="Last Name Sample"
                                    placeholderTextColor="white"
                                />
                            </View>

                            <View style={page.box_content}>
                                <Text style={page.text}>Email: </Text>
                                <TextInput
                                    color="white"
                                    onChangeText={text => setEmail(text)}
                                    value={email}
                                    placeholder="Email Sample"
                                    placeholderTextColor="white"
                                />
                            </View>
                        </View>
                    </View>
                    <View style={page.buttonContainer}>
                        <TouchableOpacity>
                            <LinearGradient
                                colors={["#ff79cd", "#aa2ee6"]}
                                style={page.linearGradient}
                                start={{ x: 0.7, y: 0 }}>
                                <Text style={page.buttonText}> Change </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

/* 
<View style={page.box_content}>
    <Text style={page.text}>Username: </Text>
    <TextInput
        onChangeText={text => set_username(text)}
        value={username}
        placeholder="Username Sample"
        placeholderTextColor="white"
    />
</View>

<View style={page.box_content}>
    <Text style={page.text}>Password: </Text>
    <TextInput
        onChangeText={text => set_password(text)}
        value={password}
        placeholder="Password Sample?"
        placeholderTextColor="white"
    />
</View>
*/

const page = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        width: "100%",
        height: "100%",
        flex: 1,
    },
    box: {
        alignContent: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    profile_pic: {
        width: 75,
        height: 75,
        marginTop: "15%",
        marginBottom: "5%",
    },
    headerContent: {
        borderBottomWidth: 1,
        borderColor: "white",
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    header: {
        color: "white",
        fontSize: 20,
    },
    boxContainer: {
        alignItems: "center",
        backgroundColor: "rgba(32, 32, 32, 0.3)",
        width: "70%",
    },
    box_content: {
        width: "80%",
        margin: 5,
        borderBottomWidth: 1,
        borderColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "80%",
        overflow: "hidden",
    },
    button_box: {
        display: "flex",
        alignContent: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginVertical: 24,
    },
    linearGradient: {
        marginTop: "15%",
        width: 220,
        height: 50,
        borderRadius: 110,
    },
    buttonText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: "#ffffff",
        backgroundColor: "transparent",
    },
    text: {
        color: "white",
        fontSize: 15,
    },
});
export default Account;
