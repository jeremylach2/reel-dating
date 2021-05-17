/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useContext } from "react";
import { Text, ImageBackground, View, Image, Animated, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Pulse from "react-native-pulse";
import quotes from "../../assets/quotes.js";
import styles from "../../assets/styles.js";
import UserContext from "../../lib/UserContext.js";
import Users from "../../lib/Users.js";
import userMatching from "../../lib/UserMatching.js";
import PendingMatches from "../../lib/PendingMatches.js";

const quotePicker = () => {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
};

const MenuScreen = ({ navigation }) => {
    const { user, changeUserActive, userActive } = useContext(UserContext);
    const [dot, setDot] = useState(1);
    const [quote, setQuote] = useState(quotePicker());

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const AnimOpacity = new Animated.Value(0.5);
    const maxDots = 5;

    // Gives pulsating opacity effect to button
    useEffect(() => {
        Animated.timing(AnimOpacity, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start();
    }, [AnimOpacity]);

    // Adds trailing dot effect to searching
    useEffect(() => {
        let dots = dot === maxDots ? 0 : dot + 1;
        const interval = setInterval(() => {
            setDot(dots);
        }, 1000);
        return () => clearInterval(interval);
    }, [dot]);

    // Timer to change quotes every 30s
    useEffect(() => {
        const interval = setInterval(() => setQuote(quotePicker()), 30000);
        return () => clearInterval(interval);
    }, [quote]);

    useEffect(() => {
        if (!userActive) return;

        const interval = setInterval(async () => {
            const currUserMatch = await PendingMatches.get(user.id);

            if (currUserMatch)
                navigation.navigate("matchmade", {
                    match: await Users.get(currUserMatch.initial_user_id),
                });
            else
                userMatching(user)
                    .then(match => {
                        if (!match) return;

                        changeUserActive(false);
                        navigation.navigate("matchmade", { match });
                    })
                    .catch(console.error);
        }, 1000);

        return () => clearInterval(interval);
    }, [changeUserActive, navigation, user, userActive]);

    let currStatus = userActive ? "Searching" : "Not Searching";
    let searching = dot === 0 ? "" : ".".repeat(dot);

    if (!user.questionnaire)
        navigation.navigate("Settings", {
            screen: "questionnaire",
        });

    return (
        <View style={styles.userLoggedStack.userLoggedStack.container}>
            <ImageBackground
                source={require("../../assets/images/background-menu.png")}
                style={styles.userLoggedStack.userLoggedStack.menuBackground}>
                <Image
                    style={styles.userLoggedStack.userLoggedStack.logo}
                    source={require("../../assets/images/logo.png")}
                />
                <Text style={styles.userLoggedStack.userLoggedStack.quote}>{quote}</Text>
                <View style={styles.userLoggedStack.userLoggedStack.active}>
                    <Text style={styles.userLoggedStack.userLoggedStack.searchStatus}>
                        {currStatus}
                        {userActive ? searching : ""}
                    </Text>
                    <PowerButton
                        userActive={userActive}
                        AnimOpacity={AnimOpacity}
                        changeUserActive={changeUserActive}
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

const PowerButton = props => {
    return (
        <TouchableOpacity onPress={() => props.changeUserActive(!props.userActive)}>
            {props.userActive && (
                <Pulse color={"orange"} numPulses={4} diameter={400} speed={20} duration={2000} />
            )}
            <Animated.View
                style={[
                    styles.userLoggedStack.userLoggedStack.powerContainer,
                    props.userActive
                        ? { opacity: props.AnimOpacity, backgroundColor: "rgb(240, 196, 77)" }
                        : { opacity: 1, backgroundColor: "rgba(32, 32, 32, 0.3)" },
                ]}
                onPress={{ opacity: props.AnimOpacity }}>
                <FontAwesome5
                    name="power-off"
                    size={60}
                    style={styles.userLoggedStack.userLoggedStack.powerStatus}
                    color={props.userActive ? "rgb(251, 255, 0)" : "black"}
                />
            </Animated.View>
        </TouchableOpacity>
    );
};

export default MenuScreen;
