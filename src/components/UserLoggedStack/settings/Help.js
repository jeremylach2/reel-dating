import React, { Component } from "react";
import "react-native-gesture-handler";
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    TextInput,
    TouchableNativeFeedback,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

const Help = ({ navigation }) => {
    const [problem, sendProblem] = React.useState("");

    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../../../assets/images/background-settings.png")}
                style={page.background}
                resizeMode="cover">
                <View style={page.box}>
                    <View style={page.titleBox}>
                        <View style={page.headerContent}>
                            <Ionicons name="help-buoy" size={25} color="white" />
                        </View>

                        <View style={page.title}>
                            <Text style={page.title}>What is your problem?</Text>
                        </View>
                    </View>
                </View>

                <View style={page.box}>
                    <TextInput
                        style={[
                            page.textBox,
                        ]}
                        size="25"
                        label="Problem"
                        placeholder="Write about your problem here..."
                        placeholderTextColor="white"
                    />
                </View>

                <View style={page.button}>
                    <TouchableNativeFeedback
                        onPress={() => navigation.navigate("help")}>
                        <View>
                            <Feather name="send" size={25} color="white" />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </ImageBackground>
        </View>
    );
};

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
        flex: 1,
        display: "flex",
        alignContent: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    titleBox: {
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
    headerContent: {
        borderColor: "white",
        margin: 10,
        alignItems: "center",
    },
    header: {
        color: "white",
        fontSize: 20,
    },
    title: {
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
        backgroundColor: "#68a0cf",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#fff",
        alignItems: "center",
    },
    textBox: {
        height: 300,
        width: "95%",
        borderColor: "white",
        borderWidth: 1,
        marginBottom: 20,
        color: "white",
        textAlignVertical: "top",
    },
});

export default Help;
