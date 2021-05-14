import React, { useState, useEffect, useRef } from "react";
import { AppState } from "react-native";

import auth from "@react-native-firebase/auth";

import Users from "./lib/Users";
import UserContext from "./lib/UserContext";

import SplashScreen from "react-native-splash-screen";

import UserUnloggedStack from "./components/UserUnloggedStack/UserUnloggedStack.js";
import UserLoggedStack from "./components/UserLoggedStack/UserLoggedStack.js";
import AccountDetails from "./components/UserUnloggedStack/AccountDetails.js";
import MatchMade from "./components/UserLoggedStack/MatchMade.js";

const App = props => {


    const appState = useRef(AppState.currentState);
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [authUser, setAuthUser] = useState();

    const applicationState = useRef(AppState.currentState);
    const [appState, setAppState] = useState(applicationState.current);

    const [firebaseInitializing, setFirebaseInitializing] = useState(true);

    const [dbUserInitializing, setDBUserInitializing] = useState(true);

    const [firebaseUser, setFirebaseUser] = useState();
    const [user, setUser] = useState();

    const [userActive, setUserActive] = useState(false);

    function onAuthStateChanged(fbUser) {
        setFirebaseUser(fbUser);
        if (firebaseInitializing) setFirebaseInitializing(false);
    }

    function onAppStateChange(nextAppState) {
        applicationState.current = nextAppState;
        setAppState(applicationState.current);
    }

    function onUserCreate() {
        Users.getUserByUID(firebaseUser.uid).then(dbUser => {
            setUser(dbUser);
            if (dbUserInitializing) setDBUserInitializing(false);
        });
    }

    function changeUserActive(active, uid = firebaseUser.uid) {
        setUserActive(active);

        Users.updateUserByUID(uid, {
            active,
        });
    }

    useEffect(() => SplashScreen.hide(), []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => auth().onAuthStateChanged(onAuthStateChanged), []);

    useEffect(() => {
        AppState.addEventListener("change", onAppStateChange);

        return () => AppState.removeEventListener("change", onAppStateChange);
    }, []);

    if (appState !== "active" && userActive) changeUserActive(false);

    if (firebaseInitializing) return null;
    if (!firebaseUser) return <UserUnloggedStack />;
    if (firebaseUser && !user)
        Users.getUserByUID(firebaseUser.uid).then(dbUser => {
            setUser(dbUser);
            if (dbUserInitializing) setDBUserInitializing(false);
        });

    if (dbUserInitializing) return null;
    else if (!dbUserInitializing && !user)
        return <AccountDetails uid={firebaseUser.uid} onUserCreate={onUserCreate} />;

    return (
        <UserContext.Provider value={{ user, changeUserActive, userActive }}>
            <UserLoggedStack />
        </UserContext.Provider>
    );
};

export default App;
