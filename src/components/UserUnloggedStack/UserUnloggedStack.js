import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import RegisterQuestionnaire from "./RegisterQuestionnaire";

const Stack = createStackNavigator();

const UserUnloggedStack = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="RegisterQuestionnaire" component={RegisterQuestionnaire} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default UserUnloggedStack;
