import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import database from "@react-native-firebase/database";
import auth from "@react-native-firebase/auth";

import UserUnloggedStack from "./components/UserUnloggedStack/UserUnloggedStack.js";
import UserLoggedStack from "./components/UserLoggedStack/UserLoggedStack.js";

const fb = database();

const App = props => {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    if (!user) {
        return <UserUnloggedStack />;
    }

    return <UserLoggedStack />;
};

export default App;
