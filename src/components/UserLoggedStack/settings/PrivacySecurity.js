import React, { Component } from "react";
import "react-native-gesture-handler";
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    TouchableNativeFeedback,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PrivacySecurity = ({ navigation }) => {
    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../../../assets/images/background-settings.png")}
                style={page.background}
                resizeMode="cover">
                <View style={page.utilityBox}>
                    <View style={page.itemContainer}>
                        <View style={page.headerContent}>
                            <MaterialIcons name="security" size={25} color="white" />
                            <Text style={page.header}>Privacy and Security</Text>
                            <MaterialIcons name="security" size={25} color="white" />
                        </View>

                        <TouchableNativeFeedback onPress>
                            <View style={page.itemContent}>
                                <Text style={page.text}>Change Password</Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback onPress>
                            <View style={page.itemContent}>
                                <Text style={page.text}>Blocked Accounts</Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback onPress>
                            <View style={page.itemContent}>
                                <Text style={page.text}>Delete Account</Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
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
    utilityBox: {
        flex: 2,
        display: "flex",
        alignContent: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    itemContainer: {
        backgroundColor: "rgba(32, 32, 32, 0.3)",
        width: "70%",
    },
    itemContent: {
        margin: 24,
        borderBottomWidth: 1,
        borderColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
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
    text: {
        color: "white",
        fontSize: 20,
    },
});

export default PrivacySecurity;