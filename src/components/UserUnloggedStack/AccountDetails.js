import React from "react";
import "react-native-gesture-handler";
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";

import Slider from "@react-native-community/slider";
import Users from "../../lib/Users";
import styles from "../../assets/styles.js";


const AccountDetails = ({ uid, onUserCreate }) => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [sliderValue, setSliderValue] = React.useState(18);

    return (
        <View style={styles.userUnloggedStack.userUnloggedStack.container}>
            <ImageBackground
                source={require("../../assets/images/background-login.jpg")}
                style={styles.userUnloggedStack.userUnloggedStack.background}>
                <View style={styles.userUnloggedStack.userUnloggedStack.longUtilityBox}>
                    <View style={styles.userUnloggedStack.userUnloggedStack.form}>
                        <Text style={styles.userUnloggedStack.userUnloggedStack.title}>Details</Text>
                        <View style={styles.userUnloggedStack.userUnloggedStack.formContent}>
                            <TextInput
                                style={styles.userUnloggedStack.userUnloggedStack.userInput}
                                onChangeText={text => setFirstName(text)}
                                value={firstName}
                                placeholder="First Name"
                                placeholderTextColor="black"
                            />
                            <TextInput
                                style={styles.userUnloggedStack.userUnloggedStack.userInput}
                                onChangeText={text => setLastName(text)}
                                value={lastName}
                                placeholder="Last Name"
                                placeholderTextColor="black"
                            />
                            <Slider
                                style={{ width: "100%" }}
                                initialValue={18}
                                minimumValue={18}
                                maximumValue={100}
                                minimumTrackTintColor="#FFFFFF"
                                maximumTrackTintColor="#000000"
                                onValueChange={sliderValue => setSliderValue(sliderValue)}
                                step={1}
                            />
                            <Text style={styles.userUnloggedStack.userUnloggedStack.accountDetailsText}>
                                Age : {sliderValue}
                            </Text>
                            <TouchableOpacity
                                onPress={() => {
                                    Users.createUserWithUID(uid, {
                                        name: {
                                            first: firstName,
                                            last: lastName,
                                        },
                                    }).then(() => onUserCreate());
                                }}>
                                <View style={styles.userUnloggedStack.userUnloggedStack.loginButton}>
                                    <Text style={styles.userUnloggedStack.userUnloggedStack.loginText}>
                                        Join Reel
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default AccountDetails;
