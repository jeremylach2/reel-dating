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

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/Ionicons'
import Icon5 from 'react-native-vector-icons/Feather';
import Icon6 from 'react-native-vector-icons/MaterialCommunityIcons';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const Account = ({ navigation }) => {
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
                source={require("../../../assets/images/background-settings.png")}
                style={page.background}
                resizeMode="cover">
                <ScrollView>
                    <View style={page.box}>
                        <Image
                            source={require("../../../assets/images/profile-picture-example.png")}
                            style={page.profile_pic}
                        />
                        <View style={page.box_container}>
                            <View style={page.header_content}>
                                <Icon2
                                    name="account"
                                    size={25}
                                    color="white"
                                />
                                <Text style={page.header}>ACCOUNT</Text>
                                <Icon2
                                    name="account"
                                    size={25}
                                    color="white"
                                />
                            </View>

                            <View style={page.box_content}>
                                <Text style={page.text}>First Name: </Text>
                                <TextInput
                                    color="white"
                                    onChangeText={text => set_firstName(text)}
                                    value={first_name}
                                    placeholder="First Name Sample"
                                    placeholderTextColor="white"
                                />
                            </View>

                            <View style={page.box_content}>
                                <Text style={page.text}>Last Name: </Text>
                                <TextInput

                                    color="white"
                                    onChangeText={text => set_lastName(text)}
                                    value={last_name}
                                    placeholder="Last Name Sample"
                                    placeholderTextColor="white"
                                />
                            </View>

                            <View style={page.box_content}>
                                <Text style={page.text}>Email: </Text>
                                <TextInput
                                    color="white"
                                    onChangeText={text => set_email(text)}
                                    value={email}
                                    placeholder="Email Sample"
                                    placeholderTextColor="white"
                                />
                            </View>
                        </View>
                    </View>
                    <View style={page.button}>
                        <TouchableNativeFeedback onPress>
                            <View>
                                <Icon6
                                    name="update"
                                    size={25}
                                    color="white"
                                />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
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
        width: '100%',
        height: '100%',
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
    header_content: {
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
    box_container: {
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
    button_container: {
        alignItems: "center",
        backgroundColor: "rgba(32, 32, 32, 0.3)",
        width: 200,
        height: 25,
    },
    button: {
        overflow: "hidden",
        marginRight: 100,
        marginLeft: 100,
        marginBottom: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 15,
    },
});
export default Account;