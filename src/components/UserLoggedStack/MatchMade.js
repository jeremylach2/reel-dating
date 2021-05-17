import React, { useRef, useEffect, useContext, useState } from "react";
import "react-native-gesture-handler";
import { Text, ImageBackground, View, TouchableOpacity, Animated } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCIcons from "react-native-vector-icons/MaterialCommunityIcons";
import UserContext from "../../lib/UserContext.js";
import Users from "../../lib/Users";
import styles from "../../assets/styles.js";

const MatchMade = ({
    navigation,
    route: {
        params: { match },
    },
}) => {
    const { user } = useContext(UserContext);
    const [awaitingResponsePendingMatch, setAwaitingResponsePendingMatch] = useState();
    const [hadAwaiting, setHadAwaiting] = useState(false);
    const [myPendingMatch, setMyPendingMatch] = useState();
    const [dot, setDot] = useState(1);
    const maxDots = 5;

    // Adds trailing dot effect to searching
    useEffect(() => {
        let dots = dot === maxDots ? 0 : dot + 1;
        const interval = setInterval(() => {
            setDot(dots);
        }, 1000);
        return () => clearInterval(interval);
    }, [dot]);

    let awaiting = dot === 0 ? "" : ".".repeat(dot);

    useEffect(() => {
        Users.getPendingMatch(user.id).then(setMyPendingMatch);
    }, []);

    Users.getPendingMatch(match.id).then(setAwaitingResponsePendingMatch);

    if (hadAwaiting && !awaitingResponsePendingMatch) console.log("they accepted!");

    return (
        <View style={styles.userLoggedStack.userLoggedStack.container}>
            <ImageBackground
                source={require("../../assets/images/background-menu.png")}
                style={styles.userLoggedStack.userLoggedStack.menuBackground}
                resizeMode="cover">
                <View style={styles.userLoggedStack.userLoggedStack.matchMadeHeaderContent}>
                    <Text style={styles.userLoggedStack.userLoggedStack.matchMadeHeader}>
                        Match Made!
                    </Text>
                </View>
                <View style={styles.userLoggedStack.userLoggedStack.matchMadeHeaderContent}>
                    <Text style={styles.userLoggedStack.userLoggedStack.matchMadeText}>
                        {match.name.first}, {match.age}
                    </Text>
                </View>
                <View style={styles.userLoggedStack.userLoggedStack.matchMadeHeart}>
                    <HeartAnim />
                </View>
                {awaitingResponsePendingMatch ? (
                    <View style={styles.userLoggedStack.userLoggedStack.matchMadeContainer}>
                        <Text style={styles.userLoggedStack.userLoggedStack.matchMadeText}>Awaiting response{awaiting}</Text>
                    </View>
                ) : (
                    <View style={styles.userLoggedStack.userLoggedStack.matchMadeButtonContainer}>
                        <TouchableOpacity>
                            <View
                                style={
                                    styles.userLoggedStack.userLoggedStack.matchMadeButtonCircle
                                }>
                                <MaterialCIcons name="heart-broken" size={60} color="white" />
                                <Text style={styles.userLoggedStack.userLoggedStack.matchMadeText}>
                                    Decline
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                if (myPendingMatch) {
                                    Users.deletePendingMatch(user.id);
                                    navigation.navigate("Matches", {
                                        screen: "matchesText",
                                        id: match.id,
                                    });
                                } else
                                    Users.createPendingMatch(match, user).then(pend => {
                                        setAwaitingResponsePendingMatch(pend);
                                        setHadAwaiting(true);
                                    });
                            }}>
                            <View
                                style={
                                    styles.userLoggedStack.userLoggedStack.matchMadeButtonCircle
                                }>
                                <MaterialCIcons name="heart" size={60} color="white" />
                                <Text style={styles.userLoggedStack.userLoggedStack.matchMadeText}>
                                    Accept
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            </ImageBackground>
        </View>
    );
};

const HeartAnim = () => {
    const anim = useRef(new Animated.Value(1));

    useEffect(() => {
        // makes the sequence loop
        Animated.loop(
            // runs given animations in a sequence
            Animated.sequence([
                // increase size
                Animated.timing(anim.current, {
                    toValue: 1.3,
                    duration: 500,
                    useNativeDriver: true,
                }),
                // decrease size
                Animated.timing(anim.current, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View style={{ transform: [{ scale: anim.current }] }}>
                <Ionicons name="md-heart" size={300} color="pink" />
            </Animated.View>
        </View>
    );
};

export default MatchMade;
