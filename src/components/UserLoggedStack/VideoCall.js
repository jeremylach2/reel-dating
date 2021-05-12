import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
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
                    <MuteButton
                        name={muted ? "mute" : "unmute"}
                        size={40}
                        color={"white"}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <EndCall
                        name={"closecircle"}
                        size={40}
                        color={"red"}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FlipCam
                        name={"flip-camera-ios"}
                        size={40}
                        color={"white"}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default VideoCall;