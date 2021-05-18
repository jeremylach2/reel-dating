import React, { useContext, useEffect, useState } from "react";
import "react-native-gesture-handler";
import {
    Text,
    ImageBackground,
    View,
    Image,
    FlatList,
    TouchableNativeFeedback,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

import styles from "../../assets/styles.js";
import Users from "../../lib/Users.js";
import UserContext from "../../lib/UserContext.js";
import MatchesLib from "../../lib/Matches.js";

const maxNameLength = 9;
const maxMessageLength = 20;

// List of user's matches but not contacted yet.
function MatchNotContacted({ navigation, item, user }) {
    const { initialUser, matchedUser } = item;
    const otherUser = initialUser.id === user.id ? matchedUser : initialUser;

    return (
        <TouchableNativeFeedback
            onPress={() => navigation.navigate("matchesText", { match: item })}>
            <View style={styles.userLoggedStack.userLoggedStack.utilityBox}>
                <Image
                    source={require("../../assets/images/profile-picture-example.png")}
                    style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                />
                <Text style={styles.userLoggedStack.userLoggedStack.text}>
                    {otherUser.name.first.substring(0, maxNameLength)}
                </Text>
            </View>
        </TouchableNativeFeedback>
    );
}

// List of user's matches that were contacted.
function MatchContacted({ navigation, item, user }) {
    const { initialUser, matchedUser } = item;
    const otherUser = initialUser.id === user.id ? matchedUser : initialUser;

    return (
        <TouchableNativeFeedback
            onPress={() => navigation.navigate("matchesText", { match: item })}>
            <View style={styles.userLoggedStack.userLoggedStack.utilityBoxContent}>
                <View style={styles.userLoggedStack.userLoggedStack.utilityBox}>
                    <Image
                        source={require("../../assets/images/profile-picture-example.png")}
                        style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                    />
                    <Text style={styles.userLoggedStack.userLoggedStack.text}>
                        {otherUser.name.first.substring(0, maxNameLength)}
                    </Text>
                </View>
                <Text style={styles.userLoggedStack.userLoggedStack.text}>
                    {item.messages[0].text.substring(0, maxMessageLength)}
                </Text>
                <AntDesign name="right" size={25} color="white" />
            </View>
        </TouchableNativeFeedback>
    );
}

// Screen that contains both uncontacted and contacted matches of the user.
const Matches = ({ navigation }) => {
    const { user } = useContext(UserContext);
    const [matches, setMatches] = useState([]);

    const notChattedMatches = matches.filter(m => !m.messages);
    const chattedMatches = matches.filter(m => !!m.messages);

    useEffect(() => {
        Users.getMatches(user).then(setMatches);
    }, [user]);

    // Event listener to dynamically update users' matches.
    useEffect(() => {
        const ref = MatchesLib.getOn();

        const event = ref.on("value", async snapshot => {
            Users.getMatches(user).then(setMatches);
        });

        return () => ref.off("value", event);
    }, []);

    return (
        <View style={styles.userLoggedStack.userLoggedStack.container}>
            <ImageBackground
                source={require("../../assets/images/background-matches.png")}
                style={styles.userLoggedStack.userLoggedStack.background}
                resizeMode="cover">
                <View style={styles.userLoggedStack.userLoggedStack.utilityBox}>
                    <View style={styles.userLoggedStack.userLoggedStack.utilityBoxContent}>
                        <FlatList
                            data={notChattedMatches}
                            renderItem={({ item }) => (
                                <MatchNotContacted
                                    navigation={navigation}
                                    item={item}
                                    user={user}
                                />
                            )}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
                        />
                    </View>

                    <View style={styles.userLoggedStack.userLoggedStack.utilityBoxContainer}>
                        <View style={styles.userLoggedStack.userLoggedStack.headerContent}>
                            <Text style={styles.userLoggedStack.userLoggedStack.header}>
                                YOUR MATCHES
                            </Text>
                        </View>
                        <FlatList
                            style={{ width: "100%", alignContent: "center" }}
                            data={chattedMatches}
                            renderItem={({ item }) => (
                                <MatchContacted navigation={navigation} item={item} user={user} />
                            )}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Matches;
