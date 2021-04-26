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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Matches = ({ navigation }) => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");

    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../assets/images/background-settings.png")}
                style={page.background}
                resizeMode="cover">
                <ScrollView>
                    <View style={page.utilityBox}>
                        <Image
                            source={require("../assets/images/profile-picture-example.png")}
                            style={page.profilePic}
                        />
                        <View style={page.utilityBoxContainer}>
                            <View style={page.headerContent}>
                                <Text style={page.header}>Matches</Text>
                            </View>
                        </View>
                    </View>
                    <View style={page.button}>
                        <TouchableNativeFeedback onPress>
                            <View>
                                <MaterialCommunityIcons
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
        width: "70%",
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
export default Matches;