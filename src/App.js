import React, { useState, useEffect, useRef } from "react";
import { AppState } from "react-native";

import auth from "@react-native-firebase/auth";

import Users from "./lib/Users";
import UserContext from "./lib/UserContext";

import SplashScreen from "react-native-splash-screen";

import UserUnloggedStack from "./components/UserUnloggedStack/UserUnloggedStack.js";
import UserLoggedStack from "./components/UserLoggedStack/UserLoggedStack.js";
import AccountDetails from "./components/UserUnloggedStack/AccountDetails.js";

const App = props => {
    const appState = useRef(AppState.currentState);
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [authUser, setAuthUser] = useState();
    const [dbUserInitializing, setDBUserInitializing] = useState(true);
    const [user, setUser] = useState();
    const [userActive, setUserActive] = useState(false);
    const [appStatus, setAppStatus] = useState(appState.current);

    // Handle user state changes
    function onAuthStateChanged(fbUser) {
        setAuthUser(fbUser);
        if (initializing) setInitializing(false);
    }

    const handleAppStateChange = nextAppState => {
        appState.current = nextAppState;
        setAppStatus(appState.current);
    };

    const changeUserActive = (active, uid = authUser.uid) => {
        setUserActive(active);

        Users.updateUserByUID(uid, {
            active,
        });
    };

    function onUserCreate() {
        Users.getUserByUID(authUser.uid).then(dbUser => {
            setUser(dbUser);
            if (dbUserInitializing) setDBUserInitializing(false);
        });
    }

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => auth().onAuthStateChanged(onAuthStateChanged), []);

    useEffect(() => {
        AppState.addEventListener("change", handleAppStateChange);
        console.log("effect thing", authUser ? authUser.uid : "none!");

        return () => AppState.removeEventListener("change", handleAppStateChange);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (appStatus !== "active") if (userActive) changeUserActive(false);

    if (initializing) return null;

    if (!authUser) return <UserUnloggedStack />;

    if (authUser && !user)
        Users.getUserByUID(authUser.uid).then(dbUser => {
            setUser(dbUser);
            if (dbUserInitializing) setDBUserInitializing(false);
        });

    if (dbUserInitializing) return null;
    else if (!dbUserInitializing && !user)
        return <AccountDetails uid={authUser.uid} onUserCreate={onUserCreate} />;

    return (
        <UserContext.Provider value={{ user, changeUserActive, userActive }}>
            <UserLoggedStack />
        </UserContext.Provider>
    );
};

export default App;
