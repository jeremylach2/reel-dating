/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useRef } from "react";
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    Image,
    Animated,
    TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Pulse from "react-native-pulse";
import quotes from "../assets/quotes.js";

const quotePicker = () => {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
};

const MenuScreen = props => {
    const [status, set_status] = useState(false);
    const [dot, set_dot] = useState(1);
    const [quote, set_quote] = useState(quotePicker());
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
            set_dot(dots);
        }, 1000);
        return () => clearInterval(interval);
    }, [dot]);

    useEffect(() => {
        const interval = setInterval(() => set_quote(quotePicker()), 5000);
        return () => clearInterval(interval);
    }, [quote]);


    let currStatus = status ? "Searching" : "Not Searching";
    let searching = dot === 0 ? "" : ".".repeat(dot);
    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../assets/images/background-menu.png")}
                style={page.background}>
                <Image
                    style={page.logo}
                    source={require("../assets/images/logo.png")}
                />
                <Text style={page.quote}>{quote}</Text>
                <View style={page.active}>
                    <Text style={page.search_status}>
                        {currStatus}
                        {status ? searching : ""}
                    </Text>
                    <TouchableOpacity onPress={() => set_status(!status)}>
                        {status && (
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
                                page.power_container,
                                status
                                    ? {
                                        opacity: AnimOpacity,
                                        backgroundColor: "rgb(240, 196, 77)",
                                    }
                                    : {
                                        opacity: 1,
                                        backgroundColor: "rgba(32, 32, 32, 0.3)",
                                    },
                            ]}
                            onPress={{ opacity: AnimOpacity }}>
                            <Icon
                                name="power-off"
                                size={60}
                                style={page.power_status}
                                color={status ? "rgb(251, 255, 0)" : "black"}
                            />
                        </Animated.View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const page = StyleSheet.create({
    background: {
        flex: 1,
    },
    logo: {
        resizeMode: "contain",
        height: 150,
        width: "100%",
    },
    container: {
        flex: 1,
    },
    active: {
        alignItems: "center",
        marginTop: "10%",
    },
    search_status: {
        alignSelf: "center",
        color: "white",
        fontFamily: "sans-serif-light",
        fontSize: 30,
        marginBottom: "6%",
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    },
    power_status: {
        overflow: "hidden",
    },
    power_container: {
        justifyContent: "center",
        alignItems: "center",
        width: 220,
        height: 220,
        borderRadius: 110,
        borderColor: "black",
        backgroundColor: "rgba(32, 32, 32, 0.3)",
    },
    quote: {
        fontSize: 20,
        color: "rgba(255, 255, 255, 0.85)",
        textAlign: "center",
        fontStyle: "italic",
        fontFamily: "sans-serif-light",
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    },
});

export default MenuScreen;
