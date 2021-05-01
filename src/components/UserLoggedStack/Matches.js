import React, { Component } from "react";
import "react-native-gesture-handler";
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    Image,
    TextInput,
    TouchableNativeFeedback,
    ScrollView,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from "../../assets/styles.js";

const MatchNotContacted = props => {
    return (
        <TouchableNativeFeedback>
            <View style={styles.userLoggedStack.userLoggedStack.utilityBox}>
                <Image
                    source={require("../../assets/images/profile-picture-example.png")}
                    style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                />
                <Text style={styles.userLoggedStack.userLoggedStack.text}>Name</Text>
            </View>
        </TouchableNativeFeedback>
    );
}

const MatchContacted = props => {
    return (
        <TouchableNativeFeedback onPress>
            <View style={styles.userLoggedStack.userLoggedStack.utilityBoxContent}>
                <View style={styles.userLoggedStack.userLoggedStack.utilityBox}>
                    <Image
                        source={require("../../assets/images/profile-picture-example.png")}
                        style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                    />
                    <Text style={styles.userLoggedStack.userLoggedStack.text}>Name</Text>
                </View>
                <Text style={styles.userLoggedStack.userLoggedStack.text}>Last Text Message Here...</Text>
                <AntDesign name="right" size={25} color="white" />
            </View>
        </TouchableNativeFeedback>
    );
}

const Matches = props => {
    return (
        <View style={styles.userLoggedStack.userLoggedStack.container}>
            <ImageBackground
                source={require("../../assets/images/background-matches.png")} //change the background at some point
                style={styles.userLoggedStack.userLoggedStack.background}
                resizeMode="cover">
                <ScrollView>
                    <View style={styles.userLoggedStack.userLoggedStack.utilityBox}>
                        <View style={styles.userLoggedStack.userLoggedStack.utilityBoxContent}>
                            <MatchNotContacted />
                            <MatchNotContacted />
                            <MatchNotContacted />
                            <MatchNotContacted />
                            <MatchNotContacted />
                        </View>

                        <View style={styles.userLoggedStack.userLoggedStack.utilityBoxContainer}>
                            <View style={styles.userLoggedStack.userLoggedStack.headerContent}>
                                <Text style={styles.userLoggedStack.userLoggedStack.header}>YOUR MATCHES</Text>
                            </View>
                            <MatchContacted />
                            <MatchContacted />
                            <MatchContacted />
                            <MatchContacted />
                            <MatchContacted />
                            <MatchContacted />
                        </View>


                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
};

export default Matches;