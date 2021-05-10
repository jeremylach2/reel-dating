import React, { useState } from "react";
import "react-native-gesture-handler";
import {
    Text,
    ImageBackground,
    View,
    TouchableOpacity,
    Modal,
    Image,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "../../assets/styles.js";

const MatchMade = () => {
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
                        Match Name Here, Their Age
                            </Text>
                </View>
                <View style={styles.userLoggedStack.userLoggedStack.matchMadeSecondaryContainer}>
                    <Image
                        source={require("../../assets/images/profile-picture-example.png")} //this would be the person's photo, not the user's.
                        style={styles.userLoggedStack.userLoggedStack.matchMadeProfilePicture} //Check this with another emulator to make sure it isn't off centered.
                    />
                    <View
                        style={
                            styles.userLoggedStack.userLoggedStack
                                .matchMadeButtonContainer
                        }>
                        <TouchableOpacity onPress>
                            <LinearGradient
                                colors={["#46a0db", "#e00ba0"]}
                                style={styles.userLoggedStack.userLoggedStack.matchMadeButton}
                                start={{ x: 0.7, y: 0 }}>
                                <Text style={styles.userLoggedStack.userLoggedStack.matchMadeButtonText}>
                                    Decline.
                                    </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress>
                            <LinearGradient
                                colors={["#46a0db", "#e00ba0"]}
                                style={styles.userLoggedStack.userLoggedStack.matchMadeButton}
                                start={{ x: 0.7, y: 0 }}>
                                <Text style={styles.userLoggedStack.userLoggedStack.matchMadeButtonText}>
                                    Call!
                                    </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default MatchMade;