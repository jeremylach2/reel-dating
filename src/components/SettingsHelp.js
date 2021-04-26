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
                        <View style={page.box}>
                            <Text style={page.text}>Enter your Problem: </Text>
                            <TextInput
                                onChangeText={text => send_problem(text)}
                                value={problem}
                                placeholder="Type here..."
                                placeholderTextColor="white"
                            />
                        </View>
                    </View>
                    <TouchableNativeFeedback onPress>
                                <Text style={page.text}>Send</Text>
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
    text: {
        color: "white",
        fontSize: 20,
    },
});

export default SettingsHelp;