import React, { Component } from "react";
import "react-native-gesture-handler";
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    Image,
    TextInput,
    TouchableNativeFeedback,
    ScrollView,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Matches = props => {
    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../assets/images/background-settings.png")} //change the background at some point
                style={page.background}
                resizeMode="cover">
                <ScrollView>
                    <View style={page.utilityBox}>
                        <View style={page.utilityBoxContent}>
                            <Image
                                source={require("../assets/images/profile-picture-example.png")}
                                style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                            />
                            <Image
                                source={require("../assets/images/profile-picture-example.png")}
                                style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                            />
                            <Image
                                source={require("../assets/images/profile-picture-example.png")}
                                style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                            />
                            <Image
                                source={require("../assets/images/profile-picture-example.png")}
                                style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                            />
                            <Image
                                source={require("../assets/images/profile-picture-example.png")}
                                style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                            />
                        </View>

                        <View style={page.utilityBoxContainer}>
                            <View style={page.headerContent}>
                                <Text style={page.header}>YOUR MATCHES</Text>
                            </View>

                            <View style={page.utilityBoxContent}>
                                <Image
                                    source={require("../assets/images/profile-picture-example.png")}
                                    style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                                />
                                <Text style={page.text}>Last Text Message Here...</Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>

                            <View style={page.utilityBoxContent}>
                                <Image
                                    source={require("../assets/images/profile-picture-example.png")}
                                    style={{ width: 50, height: 50, borderRadius: 7505 / 2 }}
                                />
                                <Text style={page.text}>Last Text Message Here...</Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>

                            <View style={page.utilityBoxContent}>
                                <Image
                                    source={require("../assets/images/profile-picture-example.png")}
                                    style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                                />
                                <Text style={page.text}>Last Text Message Here...</Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>

                            <View style={page.utilityBoxContent}>
                                <Image
                                    source={require("../assets/images/profile-picture-example.png")}
                                    style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                                />
                                <Text style={page.text}>Last Text Message Here...</Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>

                            <View style={page.utilityBoxContent}>
                                <Image
                                    source={require("../assets/images/profile-picture-example.png")}
                                    style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                                />
                                <Text style={page.text}>Last Text Message Here...</Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>

                            <View style={page.utilityBoxContent}>
                                <Image
                                    source={require("../assets/images/profile-picture-example.png")}
                                    style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                                />
                                <Text style={page.text}>Last Text Message Here...</Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>
                        </View>


                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
};

const page = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    utilityBox: {
        alignContent: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    profilePic: {
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
    utilityBoxContainer: {
        alignItems: "center",
        backgroundColor: "rgba(32, 32, 32, 0.3)",
        width: "90%",
        justifyContent: "space-between",
    },
    utilityBoxContent: {
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
    text: {
        color: "white",
        fontSize: 15,
    },
    testfornow: {
        overflow: "hidden",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
});

export default Matches;