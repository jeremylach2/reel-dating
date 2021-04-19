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
    Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
Stack.Navigator.defaultProps = {
    //headerMode: "none",
};

const Settings = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="options">
                <Stack.Screen
                    name="options"
                    component={Options}
                    options={{
                        title: "Profile Settings",
                        headerTitleStyle: { alignSelf: "center" },
                        headerStyle: { backgroundColor: "black" },
                    }}
                />
                <Stack.Screen name="account" component={Account_settings} />
                <Stack.Screen name="notifications" component={Notif} />
                <Stack.Screen name="questionnaire" component={Question} />
                <Stack.Screen name="privacy" component={Privacy} />
                <Stack.Screen name="help" component={Help} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const Options = ({ navigation }) => {

    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../assets/images/background-settings.png")}
                style={page.background}>
                <Image
                    source={require("../assets/images/profile-picture-example.png")}
                    style={page.profile_pic} />
                <TouchableNativeFeedback onPress={() => navigation.navigate("account")}>
                    <View style={page.button}>
                        <Text style={page.button_text}>Account</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => navigation.navigate("notifications")}>
                    <View style={page.button}>
                        <Text style={page.button_text}>Notifications</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => navigation.navigate("questionnaire")}>
                    <View style={page.button}>
                        <Text style={page.button_text}>Change Questionnaire</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => navigation.navigate("privacy")}>
                    <View style={page.button}>
                        <Text style={page.button_text}>Privacy & Security</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => navigation.navigate("help")}>
                    <View style={page.button}>
                        <Text style={page.button_text}>Help & Support</Text>
                    </View>
                </TouchableNativeFeedback>
            </ImageBackground>
        </View>
    )

};

const Account_settings = ({ navigation }) => {
    return (
        <Text>hi</Text>
    );
};

const Notif = ({ navigation }) => {
    return (
        <Text>hi</Text>
    );
};

const Question = ({ navigation }) => {
    return (
        <Text>hi</Text>
    );
};

const Privacy = ({ navigation }) => {
    return (
        <Text>hi</Text>
    );
};

const Help = ({ navigation }) => {
    return (
        <Text>hi</Text>
    );
};

const page = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    background: {
        flex: 1,
    },
    profile_pic: {
        width: 75,
        height: 75,
    },
});

export default Settings;
