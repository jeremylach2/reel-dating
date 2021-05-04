/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useContext } from "react";
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    Image,
    Animated,
    TouchableOpacity,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Pulse from "react-native-pulse";
import quotes from "../../assets/quotes.js";
import styles from "../../assets/styles.js";
import UserContext from "../../lib/UserContext.js";

const quotePicker = () => {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
};

const MenuScreen = () => {
    const { user, changeUserActive, userActive } = useContext(UserContext);
    const [dot, setDot] = useState(1);
    const [quote, setQuote] = useState(quotePicker());
    const AnimOpacity = new Animated.Value(0.5);

    useEffect(() => {
        Animated.timing(AnimOpacity, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start();
    }, [AnimOpacity]);

    useEffect(() => {
        let dots = dot === 5 ? 0 : dot + 1;
        const interval = setInterval(() => {
            setDot(dots);
        }, 1000);
        return () => clearInterval(interval);
    }, [dot]);

    useEffect(() => {
        const interval = setInterval(() => setQuote(quotePicker()), 5000);
        return () => clearInterval(interval);
    }, [quote]);

    let currStatus = userActive ? "Searching" : "Not Searching";
    let searching = dot === 0 ? "" : ".".repeat(dot);

    return (
        <View style={styles.userLoggedStack.userLoggedStack.container}>
            <ImageBackground
                source={require("../../assets/images/background-menu.png")}
                style={styles.userLoggedStack.userLoggedStack.menuBackground}>
                <Image
                    style={styles.userLoggedStack.userLoggedStack.logo}
                    source={require("../../assets/images/logo.png")}
                />
                <Text style={styles.userLoggedStack.userLoggedStack.quote}>
                    {quote}
                </Text>
                <View style={styles.userLoggedStack.userLoggedStack.active}>
                    <Text
                        style={
                            styles.userLoggedStack.userLoggedStack.searchStatus
                        }>
                        {currStatus}
                        {userActive ? searching : ""}
                    </Text>
                    <TouchableOpacity
                        onPress={() => changeUserActive(!userActive)}>
                        {userActive && (
                            <Pulse
                                color={"orange"}
                                numPulses={4}
                                diameter={400}
                                speed={20}
                                duration={2000}
                            />
                        )}
                        <Animated.View
                            style={[
                                styles.userLoggedStack.userLoggedStack
                                    .powerContainer,
                                userActive
                                    ? {
                                        opacity: AnimOpacity,
                                        backgroundColor: "rgb(240, 196, 77)",
                                    }
                                    : {
                                        opacity: 1,
                                        backgroundColor:
                                            "rgba(32, 32, 32, 0.3)",
                                    },
                            ]}
                            onPress={{ opacity: AnimOpacity }}>
                            <FontAwesome5
                                name="power-off"
                                size={60}
                                style={
                                    styles.userLoggedStack.userLoggedStack
                                        .powerStatus
                                }
                                color={
                                    userActive ? "rgb(251, 255, 0)" : "black"
                                }
                            />
                        </Animated.View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

export default MenuScreen;
