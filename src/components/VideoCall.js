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

const VideoCall = () => {
    const [muted, setMuted] = useState(false);
    return (
        <View style={page.container}>
            <View style={page.textContainer}>
                <Text style={page.text}>
                    You're Talking With Emma
                </Text>
            </View>
            <View style={page.videoContainer}>
                <Text>Video call will go here</Text>
            </View>
            <View style={page.buttonsContainer}>
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

const page = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(22, 22, 22, 0.8)",
    },
    textContainer: {
        backgroundColor: "rgba(25, 22, 22, 0.2)",
        height: "8%",
        justifyContent: "center",
    },
    text: {
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
    },
    buttonsContainer: {
        backgroundColor: "rgba(25, 22, 22, 0.2)",
        height: "10%",
        maxHeight: "10%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
});
export default VideoCall;