import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuScreen from "./MenuScreen";
import Account from "./Login";
import SettingsOptions from "./SettingsOptions";
import SettingsAccount from "./SettingsAccount";
import SettingsNotifications from "./SettingsNotifications";
import SettingsHelp from "./SettingsHelp";
import SettingsPrivacySecurity from "./SettingsPrivacySecurity";
import Icon from "react-native-vector-icons/Ionicons";

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
                        }
                        // You can return any component that you like here!
                        return (
                            <Icon name={iconName} size={size} color={color} />
                        );
                    },
                })}
                tabBarOptions={{
                    activeTintColor: "gray",
                    inactiveTintColor: "black",
                }}>
                <Tab.Screen name="Home" component={MenuScreen} />
                <Tab.Screen name="Settings" component={SettingsStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Nav;
