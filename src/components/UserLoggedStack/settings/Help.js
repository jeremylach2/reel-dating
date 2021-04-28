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
import Icon5 from 'react-native-vector-icons/Feather';

const Help = ({ navigation }) => {
    const [problem, send_problem] = React.useState("");

    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../../../assets/images/background-settings.png")}
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
                        style={{
                            height: 300, width: "95%", borderColor: 'white', borderWidth: 1,
                            marginBottom: 20, color: "white", placeholder: "Write about your problem here...",
                            placeholderTextColor: "white", size: 25, textAlignVertical: "top"
                        }}
                    />
                </View>

                <View style={page.button}>
                    <TouchableNativeFeedback onPress={() => navigation.navigate("help")}>
                        <View>
                            <Icon5
                                name="send"
                                size={25}
                                color="white"
                            />
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
});

export default Help;