import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuScreen from "./MenuScreen";
import Matches from "./Matches";
import Options from "./settings/Options";
import Account from "./settings/Account";
import Notifications from "./settings/Notifications";
import Help from "./settings/Help";
import PrivacySecurity from "./settings/PrivacySecurity";
import Ionicons from "react-native-vector-icons/Ionicons";

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator
            initialRouteName="options"
            screenOptions={{
                headerTitleStyle: {
                    color: "white",
                    fontFamily: "sans-serif-light",
                    fontSize: 30,
                },
                gestureEnabled: true,
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerShown: true,
                headerTransparent: true,
            }}>
            <SettingsStack.Screen
                name="options"
                component={Options}
                options={{ title: "SETTINGS" }}
            />
            <SettingsStack.Screen
                name="account"
                component={Account}
                options={{ title: "ACCOUNT" }}
            />
            <SettingsStack.Screen
                name="notifications"
                component={Notifications}
                options={{ title: "NOTIFICATIONS" }}
            />
            <SettingsStack.Screen
                name="privacy"
                component={PrivacySecurity}
                options={{ title: "PRIVACY" }}
            />
            <SettingsStack.Screen
                name="help"
                component={Help}
                options={{ title: "HELP" }}
            />
        </SettingsStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

const UserLoggedStack = props => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={"Home"}
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
                            iconName = focused ? "heart" : "heart-outline";
                        }
                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                })}
                tabBarOptions={{
                    activeTintColor: "white",
                    inactiveTintColor: "white",
                    style: {
                        backgroundColor: "rgba(22, 22, 22, 0.2)",
                        position: "absolute",
                        elevation: 0,
                    },
                }}>
                <Tab.Screen name="Matches" component={Matches} />
                <Tab.Screen name="Home" component={MenuScreen} />
                <Tab.Screen name="Settings" component={SettingsStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default UserLoggedStack;
