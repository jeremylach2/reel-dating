import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MuteButton from "react-native-vector-icons/Octicons";
import EndCall from "react-native-vector-icons/AntDesign";
import FlipCam from "react-native-vector-icons/MaterialIcons";
import styles from "../../assets/styles.js";

const VideoCall = () => {
    const [muted, setMuted] = useState(false);
    return (
        <View style={styles.userLoggedStack.userLoggedStack.videoUtilityBox}>
            <View style={styles.userLoggedStack.userLoggedStack.textContainer}>
                <Text style={styles.userLoggedStack.userLoggedStack.videoText}>
                    You're Talking With Emma
                </Text>
            </View>
            <View style={styles.userLoggedStack.userLoggedStack.videoContainer}>
                <Text>Video call will go here</Text>
            </View>
            <View style={styles.userLoggedStack.userLoggedStack.buttonsContainer}>
                <TouchableOpacity onPress={() => setMuted(!muted)}>
                    <MuteButton name={muted ? "mute" : "unmute"} size={40} color={"white"} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <EndCall name={"closecircle"} size={40} color={"red"} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FlipCam name={"flip-camera-ios"} size={40} color={"white"} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

/* wasn't able to test, but assuming that this works.
commented out just in case we need backup, even though clean code says not to do this...

const page = StyleSheet.create({
    videoUtilityBox: {
        flex: 1,
        backgroundColor: "rgba(22, 22, 22, 0.8)",
        width: "100%",
        height: "100%",
    },
    textContainer: {
        backgroundColor: "rgba(25, 22, 22, 0.2)",
        height: "8%",
        justifyContent: "center",
    },
    videoText: {
        alignSelf: "center",
        color: "white",
        fontFamily: "sans-serif-light",
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        fontSize: 25,
    },
    videoContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        maxHeight: "82%",
        backgroundColor: "white",
        zIndex: 1,
    },
    buttonsContainer: {
        flex: 1,
        backgroundColor: "transparent",
        height: "10%",
        maxHeight: "10%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        zIndex: 2,
    },
});
*/

export default VideoCall;
