import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuScreen from "./MenuScreen";
import Options from "./settings/Options";
import Account from "./settings/Account";
import Notifications from "./settings/Notifications";
import Help from "./settings/Help";
import PrivacySecurity from "./settings/PrivacySecurity";
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
                options={{ title: "PRIVACY & SECURITY" }}
            />
            <SettingsStack.Screen
                name="help"
                component={Help}
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
