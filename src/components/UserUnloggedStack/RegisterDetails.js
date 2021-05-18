import React, { useState } from "react";
import { Text, ImageBackground, View, Image, TextInput, TouchableOpacity } from "react-native";
import RadioButton from "radio-buttons-react-native";

import Users from "../../lib/Users";
import styles from "../../assets/styles.js";

const genderOptions = [
    {
        label: "Male",
        value: 1,
    },
    {
        label: "Female",
        value: 2,
    },
];

const RegisterDetailsUserInput = ({ uid, onUserCreate }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState();
    const [logError, setLogError] = useState();

    return (
        <View style={styles.userUnloggedStack.userUnloggedStack.formContent}>
            <TextInput
                style={styles.userUnloggedStack.userUnloggedStack.userInput}
                onChangeText={text => setFirstName(text)}
                placeholder="First Name"
                placeholderTextColor="black"
            />
            <TextInput
                style={styles.userUnloggedStack.userUnloggedStack.userInput}
                onChangeText={text => setLastName(text)}
                placeholder="Last Name"
                placeholderTextColor="black"
            />
            <TextInput
                style={styles.userUnloggedStack.userUnloggedStack.userInput}
                onChangeText={num => setAge(num)}
                placeholder="Your Age"
                placeholderTextColor="black"
                keyboardType="numeric"
            />
            <View style={styles.userUnloggedStack.userUnloggedStack.utilityBox}>
                <View
                    style={styles.userUnloggedStack.userUnloggedStack.questionnaireRadioContainer}>
                    <RadioButton
                        data={genderOptions}
                        deactiveColor="white"
                        activeColor="white"
                        boxDeactiveBgColor="transparent"
                        boxActiveBgColor="rgba(22, 22, 22, 0.2)"
                        textColor="white"
                        initial={gender}
                        selectedBtn={e => setGender(e.value)}
                    />
                </View>
            </View>

            <TouchableOpacity
                style={styles.userUnloggedStack.userUnloggedStack.joinButton}
                onPress={() => {
                    Users.create(uid, {
                        name: {
                            first: firstName,
                            last: lastName,
                        },
                        age: +age,
                        gender,
                    }).then(onUserCreate);
                }}>
                <View style={styles.userUnloggedStack.userUnloggedStack.loginButton}>
                    <Text style={styles.userUnloggedStack.userUnloggedStack.loginText}>
                        Join Reel
                    </Text>
                </View>
            </TouchableOpacity>

            {logError && (
                <Text style={styles.userUnloggedStack.userUnloggedStack.loginErrorText}>
                    {logError}
                </Text>
            )}
        </View>
    );
};

const RegisterQuestionnaire = ({ navigation, uid, onUserCreate }) => {
    return (
        <View style={styles.userUnloggedStack.userUnloggedStack.container}>
            <ImageBackground
                source={require("../../assets/images/background-login.jpg")}
                style={styles.userUnloggedStack.userUnloggedStack.background}>
                <Image
                    style={styles.userUnloggedStack.userUnloggedStack.logo}
                    source={require("../../assets/images/logo.png")}
                />
                <View style={styles.userUnloggedStack.userUnloggedStack.utilityBox}>
                    <View style={styles.userUnloggedStack.userUnloggedStack.form}>
                        <Text style={styles.userUnloggedStack.userUnloggedStack.title}>
                            Your Information
                        </Text>
                        <RegisterDetailsUserInput uid={uid} onUserCreate={onUserCreate} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default RegisterQuestionnaire;
