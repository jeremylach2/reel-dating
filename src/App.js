import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import database from "@react-native-firebase/database";
import auth from "@react-native-firebase/auth";

import Users from "./lib/Users";

const fb = database();

import UserUnloggedStack from "./components/UserUnloggedStack/UserUnloggedStack.js";
import UserLoggedStack from "./components/UserLoggedStack/UserLoggedStack.js";
import AccountDetails from "./components/UserUnloggedStack/AccountDetails.js";

const App = props => {
    // Set an initializing state whilst Firebase connects
    //return <UserLoggedStack />
    
    return <UserLoggedStack/>

    /*
    const [initializing, setInitializing] = useState(true);
    const [authUser, setAuthUser] = useState();

    const [dbUserInitializing, setDBUserInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(fbUser) {
        setAuthUser(fbUser);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;

    if (!authUser) return <UserUnloggedStack />;

    Users.getUserByUID(authUser.uid).then(dbUser => {
        setUser(dbUser);
        if (dbUserInitializing) setDBUserInitializing(false);
    });

    function onUserCreate(fbUser) {
        Users.getUserByUID(authUser.uid).then(dbUser => {
            setUser(dbUser);
            if (dbUserInitializing) setDBUserInitializing(false);
        });
    }

    if (dbUserInitializing) return null;
    else if (!dbUserInitializing && !user) {
        //Users.createUserWithUID(authUser.uid);
        return (
            <AccountDetails uid={authUser.uid} onUserCreate={onUserCreate} />
        );
    }

    return <UserLoggedStack user={user} />;
};

export default App;
