import React, { Component } from "react";
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

const maxNameLength = 9;
const maxMessageLength = 20;

let notMatchList = [
    {
        id: "1",
        name: {
            first: "Jeremy",
        },
    },
    {
        id: "2",
        name: {
            first: "Jack",
        },
    },
    {
        id: "3",
        name: {
            first: "Jimmy",
        },
    },
    {
        id: "4",
        name: {
            first: "Jude",
        },
    },
    {
        id: "5",
        name: {
            first: "Jayden",
        },
    },
    {
        id: "6",
        name: {
            first: "Jamie",
        },
    },
    {
        id: "7",
        name: {
            first: "Joshua",
        },
    },
    {
        id: "8",
        name: {
            first: "Jake",
        },
    },
    {
        id: "9",
        name: {
            first: "Jaleen",
        },
    },
    {
        id: "10",
        name: {
            first: "James",
        },
    },
];

let bothMatchedList = [
    {
        id: "1",
        name: {
            first: "Jackson",
            last: "Ulmer",
        },
        text: "I want you.",
    },
    {
        id: "2",
        name: {
            first: "Reece",
            last: "Person B Last",
        },
        text: "U up?",
    },
];

function MatchNotContacted({ item }) {
    return (
        <TouchableNativeFeedback>
            <View style={styles.userLoggedStack.userLoggedStack.utilityBox}>
                <Image
                    source={require("../../assets/images/profile-picture-example.png")}
                    style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                />
                <Text style={styles.userLoggedStack.userLoggedStack.text}>
                    {item.name.first.substring(0, maxNameLength)}
                </Text>
            </View>
        </TouchableNativeFeedback>
    );
};

function MatchContacted({ item, navigation }) {
    return (
        <TouchableNativeFeedback
            onPress={() => navigation.navigate("matchesText")}>
            <View
                style={
                    styles.userLoggedStack.userLoggedStack.utilityBoxContent
                }>
                <View style={styles.userLoggedStack.userLoggedStack.utilityBox}>
                    <Image
                        source={require("../../assets/images/profile-picture-example.png")}
                        style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                    />
                    <Text style={styles.userLoggedStack.userLoggedStack.text}>
                        {item.name.first.substring(0, maxNameLength)}
                    </Text>
                </View>
                <Text style={styles.userLoggedStack.userLoggedStack.text}>
                    {item.text.substring(0, maxMessageLength)}
                </Text>
                <AntDesign name="right" size={25} color="white" />
            </View>
        </TouchableNativeFeedback>
    );
}

const Matches = ({ navigation }) => {
    return (
        <View style={styles.userLoggedStack.userLoggedStack.container}>
            <ImageBackground
                source={require("../../assets/images/background-matches.png")}
                style={styles.userLoggedStack.userLoggedStack.background}
                resizeMode="cover">
                <View style={styles.userLoggedStack.userLoggedStack.utilityBox}>
                    <View
                        style={
                            styles.userLoggedStack.userLoggedStack
                                .utilityBoxContent
                        }>
                        <FlatList
                            data={notMatchList}
                            renderItem={MatchNotContacted}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            ItemSeparatorComponent={() => (
                                <View style={{ width: 16 }} />
                            )}
                        />
                    </View>

                    <View
                        style={
                            styles.userLoggedStack.userLoggedStack
                                .utilityBoxContainer
                        }>
                        <View
                            style={
                                styles.userLoggedStack.userLoggedStack
                                    .headerContent
                            }>
                            <Text
                                style={
                                    styles.userLoggedStack.userLoggedStack
                                        .header
                                }>
                                YOUR MATCHES
                            </Text>
                        </View>
                        <FlatList
                            style={{ width: "100%", alignContent: "center" }}
                            data={bothMatchedList}
                            renderItem={({item}) => <MatchContacted navigation={navigation} item={item}/>}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Matches;
