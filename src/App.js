import React, { useState, useEffect, useRef } from "react";
import { AppState } from "react-native";

import auth from "@react-native-firebase/auth";

import Users from "./lib/Users";
import UserContext from "./lib/UserContext";

import UserUnloggedStack from "./components/UserUnloggedStack/UserUnloggedStack.js";
import UserLoggedStack from "./components/UserLoggedStack/UserLoggedStack.js";
import RegisterDetails from "./components/UserUnloggedStack/RegisterDetails.js";

const App = props => {
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
        Users.get(firebaseUser.uid).then(dbUser => {
            setUser(dbUser);
            if (dbUserInitializing) setDBUserInitializing(false);
        });
    }

    function changeUserActive(active, uid = firebaseUser.uid) {
        setUserActive(active);

        Users.update(uid, {
            active,
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => auth().onAuthStateChanged(onAuthStateChanged), []);

    useEffect(() => {
        AppState.addEventListener("change", onAppStateChange);

        return () => AppState.removeEventListener("change", onAppStateChange);
    }, []);

    useEffect(() => {
        if (!firebaseUser) return;

        const ref = Users.getOn(firebaseUser.uid);

        const event = ref.on("value", async snapshot => {
            Users.formatSnapshot(firebaseUser.uid, snapshot).then(setUser);
            if (dbUserInitializing) setDBUserInitializing(false);
        });

        return () => ref.off("value", event);
    }, [dbUserInitializing, firebaseUser]);

    if (appState !== "active" && userActive) changeUserActive(false);

    if (firebaseInitializing) return null;
    if (!firebaseUser) return <UserUnloggedStack />;

    if (dbUserInitializing) return null;
    else if (!dbUserInitializing && !user)
        return <RegisterDetails uid={firebaseUser.uid} onUserCreate={onUserCreate} />;

    return (
        <UserContext.Provider
            value={{ user, changeUserActive, userActive, refetchUser: onUserCreate }}>
            <UserLoggedStack />
        </UserContext.Provider>
    );
};

export default App;
