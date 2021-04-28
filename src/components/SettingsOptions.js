import React from "react";
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    Image,
    TouchableNativeFeedback,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const SettingsOptions = ({ navigation }) => {
    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../assets/images/background-settings.png")}
                style={page.background}
                resizeMode="cover">
                <View style={page.utilityBox}>
                    <Image
                        source={require("../assets/images/profile-picture-example.png")}
                        style={page.profilePic}
                    />
                    <View style={page.buttonContainer}>
                        <TouchableNativeFeedback onPress={() => navigation.navigate("account")}>
                            <View style={page.button}>
                                <MaterialCommunityIcons
                                    name="account"
                                    size={25}
                                    color="white"
                                />
                                <Text style={page.buttonText}>Account</Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => navigation.navigate("notifications")}>
                            <View style={page.button}>
                                <MaterialIcons
                                    name="notifications"
                                    size={25}
                                    color="white"
                                />
                                <Text style={page.buttonText}>Notifications</Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => navigation.navigate("questionnaire")}>
                            <View style={page.button}>
                                <AntDesign
                                    name="questioncircle"
                                    size={25}
                                    color="white"
                                />
                                <Text style={page.buttonText}>Change Questionnaire</Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => navigation.navigate("privacy")}>
                            <View style={page.button}>
                                <MaterialIcons
                                    name="security"
                                    size={25}
                                    color="white"
                                />
                                <Text style={page.buttonText}>Privacy & Security</Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => navigation.navigate("help")}>
                            <View style={page.button}>
                                <Ionicons
                                    name="help-buoy"
                                    size={25}
                                    color="white"
                                />
                                <Text style={page.buttonText}>Help & Support</Text>
                                <AntDesign name="right" size={25} color="white" />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
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
    buttonContainer: {
        backgroundColor: "rgba(32, 32, 32, 0.3)",
        width: "70%",
    },
    button: {
        margin: 24,
        borderBottomWidth: 1,
        borderColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    buttonText: {
        color: "white",
    },
});
export default SettingsOptions;