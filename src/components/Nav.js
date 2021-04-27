import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuScreen from "./MenuScreen";
import SettingsOptions from "./SettingsOptions";
import SettingsAccount from "./SettingsAccount";
import SettingsNotifications from "./SettingsNotifications";
import SettingsHelp from "./SettingsHelp";
import SettingsPrivacySecurity from "./SettingsPrivacySecurity";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Matches from "./Matches";

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator
            initialRouteName="options"
            screenOptions={{
                headerTitleStyle: {
                    alignSelf: "center",
                    color: "white",
                    fontFamily: "sans-serif-light",
                    fontSize: 30,
                },
                headerShown: true,
                headerTransparent: true,
            }}>
            <SettingsStack.Screen
                name="options"
                component={SettingsOptions}
                options={{ title: "SETTINGS" }}
            />
            <SettingsStack.Screen
                name="account"
                component={SettingsAccount}
                options={{ title: "ACCOUNT" }}
            />
            <SettingsStack.Screen
                name="notifications"
                component={SettingsNotifications}
                options={{ title: "NOTIFICATIONS" }}
            />
            <SettingsStack.Screen
                name="privacy"
                component={SettingsPrivacySecurity}
                options={{ title: "PRIVACY & SECURITY" }}
            />
            <SettingsStack.Screen
                name="help"
                component={SettingsHelp}
                options={{ title: "HELP & SUPPORT" }}
            />
        </SettingsStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

const Nav = props => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === "Home") {
                            iconName = focused ? "home" : "home-outline";
                        } else if (route.name === "Settings") {
                            iconName = focused
                                ? "settings"
                                : "settings-outline";
                        } else if (route.name === "Matches") {
                            iconName = focused
                                ? "heart"
                                : "heart-outline";
                        }
                        return (
                            <Ionicons name={iconName} size={size} color={color} />
                        );
                    },
                })}
                tabBarOptions={{
                    activeTintColor: "gray",
                    inactiveTintColor: "black",
                }}>
                <Tab.Screen name="Matches" component={Matches} />
                <Tab.Screen name="Home" component={MenuScreen} />
                <Tab.Screen name="Settings" component={SettingsStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Nav;