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
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/Ionicons'

const SettingsAccount = ({ navigation }) => {
    const [first_name, set_firstName] = React.useState("");
    const [last_name, set_lastName] = React.useState("");
    const [username, set_username] = React.useState("");
    const [password, set_password] = React.useState("");
    const [email, set_email] = React.useState("");


    //Still need to add blocked accounts and profile picture change buttons - had issue with them before removing for overall well being.
    //Also change the button color for the update buttons.
    //Also, why would you have change password here? shouldn't it be it's own thing or redirect somewhere else?

    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../assets/images/background-settings.png")}
                style={page.background}
                resizeMode="cover">
                <View style={page.box}>
                    <Image
                        source={require("../assets/images/profile-picture-example.png")}
                        style={page.profile_pic}
                    />
                    <View style={page.box_container}>

                        <View style={page.box_content}>
                            <Text style={page.text}>First Name: </Text>
                            <TextInput
                                onChangeText={text => set_firstName(text)}
                                value={first_name}
                                placeholder="First Name Sample"
                                placeholderTextColor="white"
                            />
                        </View>

                        <View style={page.box_content}>
                            <Text style={page.text}>Last Name: </Text>
                            <TextInput
                                onChangeText={text => set_lastName(text)}
                                value={last_name}
                                placeholder="Last Name Sample"
                                placeholderTextColor="white"
                            />
                        </View>

                        <View style={page.box_content}>
                            <Text style={page.text}>Email: </Text>
                            <TextInput
                                onChangeText={text => set_email(text)}
                                value={email}
                                placeholder="Email Sample"
                                placeholderTextColor="white"
                            />
                        </View>
                    </View>
                </View>
                <View style={page.button_box}>
                    <TouchableNativeFeedback onPress>
                        <View style={page.button_container}>
                            <Text style={page.text}>UPDATE</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </ImageBackground>
        </View>
    )
};

//Removed username and password because why should they have the option to change username in the first place
//Second, why is change password in account? Should be in Privacy/Security.

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
        width: '100%',
        height: '100%',
        flex: 1,
    },
    box: {
        alignContent: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        height: 600,
    },
    profile_pic: {
        width: 75,
        height: 75,
        marginTop: "15%",
        marginBottom: "5%",
    },
    box_container: {
        alignItems: "center",
        backgroundColor: "rgba(32, 32, 32, 0.3)",
        width: "70%",
    },
    box_content: {
        margin: 5,
        borderBottomWidth: 1,
        borderColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    button_box: {
        display: "flex",
        alignContent: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    button_container: {
        alignItems: "center",
        backgroundColor: "rgba(32, 32, 32, 0.3)",
        width: 200,
        height: 25,
    },
    text: {
        color: "white",
        fontSize: 15,
    },
});
export default SettingsAccount;