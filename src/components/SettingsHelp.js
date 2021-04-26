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
    ScrollView,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/Ionicons';

const SettingsHelp = ({ navigation }) => {
    const [problem, send_problem] = React.useState("");

    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../assets/images/background-settings.png")}
                style={page.background}
                resizeMode="cover">
                <View style={page.box}>
                    <View style={page.item_container}>
                        <View style={page.header_content}>
                            <Icon4
                                name="help-buoy"
                                size={25}
                                color="white"
                            />
                            <Text style={page.header}>HELP & SUPPORT</Text>
                            <Icon4
                                name="help-buoy"
                                size={25}
                                color="white"
                            />
                        </View>

                        <View style={page.text}>
                            <Text style={page.text}>What is your problem?</Text>
                        </View>
                    </View>
                </View>

                <View style={page.box}>
                    <TextInput
                        color="white"
                        placeholder="Write about your problem here..."
                        placeholderTextColor="white"
                        size={25}
                    />
                </View>

                <View style={page.box}>
                    <TouchableNativeFeedback onPress={() => navigation.navigate("help")}>
                        <View style={page.item_container}>
                            <Text style={page.text}>Press to Send</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>

            </ImageBackground>
        </View>
    );
}

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
        flex: 2,
        display: "flex",
        alignContent: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    item_container: {
        alignItems: "center",
        backgroundColor: "rgba(32, 32, 32, 0.3)",
        width: "70%",
    },
    item_content: {
        margin: 24,
        borderBottomWidth: 1,
        borderColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
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
    text: {
        color: "white",
        fontSize: 20,
    },
    button: {
        margin: 24,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});

export default SettingsHelp;