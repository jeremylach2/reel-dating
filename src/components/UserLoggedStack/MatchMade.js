import React, { useRef, useEffect, useContext, useState } from "react";
import "react-native-gesture-handler";
import { Text, ImageBackground, View, TouchableOpacity, Animated } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCIcons from "react-native-vector-icons/MaterialCommunityIcons";

import UserContext from "../../lib/UserContext.js";
import Users from "../../lib/Users";
import PendingMatches from "../../lib/PendingMatches";
import styles from "../../assets/styles.js";
import Matches from "../../lib/Matches.js";

// Screen when a match is found.
const MatchMade = ({
    navigation,
    route: {
        params: { match },
    },
}) => {
    const { user, refetchUser } = useContext(UserContext);
    const [awaitingResponsePendingMatch, setAwaitingResponsePendingMatch] = useState();
    const [hadAwaiting, setHadAwaiting] = useState(false);
    const [myPendingMatch, setMyPendingMatch] = useState();
    const [dot, setDot] = useState(1);
    const maxDots = 5;

    async function createMatch() {
        PendingMatches.delete(user.id);

        const newMatch = await Matches.create(match.id, user.id);

        const userMatches = {
            [match.id]: newMatch.id,
            ...[user.matches || {}],
        };

        await Users.update(user.id, { matches: userMatches });
        await refetchUser();

        navigation.navigate("Matches");
    }

    async function declineMatch() {
        PendingMatches.delete(user.id);

        const userMatches = {
            [match.id]: false,
            ...[user.matches || {}],
        };

        await Users.update(user.id, { matches: userMatches });
        await refetchUser();

        navigation.navigate("menu");
    }

    // Looks for a response from match.
    async function checkMatch() {
        const matchUser = await Users.get(match.id);

        if (matchUser.matches && matchUser.matches[user.id] !== null)
            if (matchUser.matches[user.id] === false) {
                const userMatches = {
                    [match.id]: false,
                    ...[user.matches || {}],
                };

                await Users.update(user.id, { matches: userMatches });
                await refetchUser();

                setHadAwaiting(false);

                navigation.navigate("menu");
            } else {
                const userMatches = {
                    [match.id]: matchUser.matches[user.id],
                    ...[user.matches || {}],
                };

                await Users.update(user.id, { matches: userMatches });
                await refetchUser();

                setHadAwaiting(false);

                navigation.navigate("Matches");
            }
    }

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
        PendingMatches.get(user.id).then(setMyPendingMatch);
    }, []);

    PendingMatches.get(match.id).then(setAwaitingResponsePendingMatch);

    if (hadAwaiting && !awaitingResponsePendingMatch) checkMatch();

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
                        <Text style={styles.userLoggedStack.userLoggedStack.matchMadeText}>
                            Awaiting response{awaiting}
                        </Text>
                    </View>
                ) : (
                    <View style={styles.userLoggedStack.userLoggedStack.matchMadeButtonContainer}>
                        <TouchableOpacity onPress={declineMatch}>
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
                                if (myPendingMatch) createMatch();
                                else
                                    PendingMatches.create(match.id, user.id).then(pend => {
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
