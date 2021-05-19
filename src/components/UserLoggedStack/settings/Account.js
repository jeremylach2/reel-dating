import React, { useContext, useState } from "react";
import "react-native-gesture-handler";
import {
    Text,
    ImageBackground,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
import auth from "@react-native-firebase/auth";

import styles from "../../../assets/styles.js";
import Users from "../../../lib/Users";
import UserContext from "../../../lib/UserContext";

// Account information of user
const Account = () => {
    const { user } = useContext(UserContext);
    const [firstName, setFirstName] = useState(user.name.first);
    const [lastName, setLastName] = useState(user.name.last);

    return (
        <View style={styles.userLoggedStack.settings.settings.container}>
            <ImageBackground
                source={require("../../../assets/images/background-settings.png")}
                style={styles.userLoggedStack.settings.settings.background}
                resizeMode="cover">
                <ScrollView>
                    <View style={styles.userLoggedStack.settings.settings.utilityBox}>
                        <Image
                            source={require("../../../assets/images/profile-picture-example.png")}
                            style={styles.userLoggedStack.settings.settings.profilePicture}
                        />
                        <View style={styles.userLoggedStack.settings.settings.itemContainer}>
                            <View style={styles.userLoggedStack.settings.settings.headerContent}>
                                <MaterialIcons name="account" size={40} color="white" />
                            </View>
                            <View style={styles.userLoggedStack.settings.settings.itemContent}>
                                <Text style={styles.userLoggedStack.settings.settings.accountText}>
                                    First Name:{" "}
                                </Text>
                                <TextInput
                                    color="white"
                                    onChangeText={text => setFirstName(text)}
                                    value={firstName}
                                    placeholder="First Name Sample"
                                    placeholderTextColor="white"
                                />
                            </View>
                            <View style={styles.userLoggedStack.settings.settings.itemContent}>
                                <Text style={styles.userLoggedStack.settings.settings.accountText}>
                                    Last Name:{" "}
                                </Text>
                                <TextInput
                                    color="white"
                                    onChangeText={text => setLastName(text)}
                                    value={lastName}
                                    placeholder="Last Name Sample"
                                    placeholderTextColor="white"
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.userLoggedStack.settings.settings.buttonContainer}>
                        <TouchableOpacity
                            onPress={() => {
                                Users.update(auth().currentUser.uid, {
                                    name: {
                                        first: firstName,
                                        last: lastName,
                                    },
                                });
                            }}>
                            <LinearGradient
                                colors={["#ff79cd", "#aa2ee6"]}
                                style={styles.userLoggedStack.settings.settings.linearGradient}
                                start={{ x: 0.7, y: 0 }}>
                                <Text style={styles.userLoggedStack.settings.settings.buttonText}>
                                    {" "}
                                    Change{" "}
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

export default Account;
