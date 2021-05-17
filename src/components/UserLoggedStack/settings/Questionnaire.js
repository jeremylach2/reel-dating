import React, { useState, useContext } from "react";
import "react-native-gesture-handler";
import { Text, ImageBackground, View, ScrollView, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import RadioButton from "radio-buttons-react-native";
import Slider from "@react-native-community/slider";
import styles from "../../../assets/styles.js";

import Users from "../../../lib/Users";
import UserContext from "../../../lib/UserContext";

const QuestionnaireItem = ({ item, value, updateItem }) => {
    return (
        <TouchableOpacity onPress={() => updateItem(item, !value)}>
            <LinearGradient
                colors={value ? ["#46a0db", "#e00ba0"] : ["transparent", "transparent"]}
                style={styles.userLoggedStack.settings.settings.questionnaireButton}
                start={{ x: 0.7, y: 0 }}>
                <Text style={styles.userLoggedStack.settings.settings.questionnaireButtonText}>
                    {" "}
                    {item}{" "}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const QuestionnaireList = ({ items, updateItem }) => {
    const itemList = Object.keys(items);
    return itemList.map(item => (
        <QuestionnaireItem item={item} value={items[item]} updateItem={updateItem} key={item} />
    ));
};

const interestsList = {
    Sports: false,
    Fishing: false,
    Lifting: false,
    Climbing: false,
    Volunteering: false,
    Dogs: false,
    Cats: false,
    Cooking: false,
    Coffee: false,
    Movies: false,
    Netflix: false,
    Traveling: false,
    Music: false,
    Photography: false,
    Hiking: false,
    Reading: false,
    Fashion: false,
    Cycling: false,
};

const lifestyleList = {
    Democrat: false,
    Republican: false,
    Christian: false,
    Buddhist: false,
    Hindu: false,
    Jewish: false,
    Muslim: false,
    Spritual: false,
    Agnostic: false,
    Athiest: false,
    Smoker: false,
    Drinker: false,
};

const genderPreferenceOptions = [
    {
        label: "Men",
        value: 1,
    },
    {
        label: "Women",
        value: 2,
    },
    {
        label: "Both",
        value: 3,
    },
];

const Questionnaire = ({ navigation }) => {
    const { user, refetchUser } = useContext(UserContext);
    const [interests, setInterests] = useState(
        user.questionnaire && user.questionnaire.interests
            ? user.questionnaire.interests
            : interestsList
    );
    const [lifestyles, setLifestyles] = useState(
        user.questionnaire && user.questionnaire.lifestyle
            ? user.questionnaire.lifestyle
            : lifestyleList
    );
    const [genderPreference, setGenderPreference] = useState(
        user.questionnaire && user.questionnaire.genderPreference
            ? user.questionnaire.genderPreference
            : null
    );
    const [sliderValue, setSliderValue] = useState(
        user.questionnaire && user.questionnaire.agePreference
            ? user.questionnaire.agePreference
            : 18
    );

    function updateInterest(interest, value) {
        const newList = { ...interests };

        newList[interest] = value;
        setInterests(newList);
    }

    function updateLifestyle(lifestyle, value) {
        const newList = { ...lifestyles };

        newList[lifestyle] = value;
        setLifestyles(newList);
    }

    function updateUser() {
        Users.update(user.id, {
            questionnaire: {
                interests,
                lifestyle: lifestyles,
                agePreference: sliderValue,
                genderPreference,
            },
        }).then(refetchUser);
    }

    return (
        <View style={styles.userLoggedStack.settings.settings.container}>
            <ImageBackground
                source={require("../../../assets/images/background-question.png")}
                style={styles.userLoggedStack.settings.settings.background}
                resizeMode="cover">
                <ScrollView>
                    <View style={styles.userLoggedStack.settings.settings.utilityBox}>
                        <View style={styles.userLoggedStack.settings.settings.headerContent}>
                            <Text style={styles.userLoggedStack.settings.settings.header}>
                                QUESTIONNAIRE
                            </Text>
                        </View>
                        <View style={styles.userLoggedStack.settings.settings.headerContent}>
                            <Text style={styles.userLoggedStack.settings.settings.accountText}>
                                What age would you like to see?
                            </Text>
                        </View>
                        <Slider
                            style={{ width: "80%" }}
                            initialValue={18}
                            minimumValue={18}
                            maximumValue={100}
                            minimumTrackTintColor="#FFFFFF"
                            maximumTrackTintColor="#000000"
                            onValueChange={newSliderValue => setSliderValue(newSliderValue)}
                            step={1}
                        />
                        <Text style={styles.userLoggedStack.settings.settings.accountText}>
                            Age: {sliderValue}
                        </Text>
                        <View style={styles.userLoggedStack.settings.settings.headerContent}>
                            <Text style={styles.userLoggedStack.settings.settings.accountText}>
                                Who would you like to see?
                            </Text>
                        </View>
                        <View
                            style={
                                styles.userLoggedStack.settings.settings.questionnaireRadioContainer
                            }>
                            <RadioButton
                                data={genderPreferenceOptions}
                                deactiveColor="white"
                                activeColor="white"
                                boxDeactiveBgColor="transparent"
                                boxActiveBgColor="rgba(22, 22, 22, 0.2)"
                                textColor="white"
                                initial={genderPreference}
                                selectedBtn={e => setGenderPreference(e.value)}
                            />
                        </View>
                        <View style={styles.userLoggedStack.settings.settings.headerContent}>
                            <Text style={styles.userLoggedStack.settings.settings.accountText}>
                                Select all that interest you.
                            </Text>
                        </View>
                        <View
                            style={
                                styles.userLoggedStack.settings.settings
                                    .questionnaireButtonContainer
                            }>
                            <QuestionnaireList items={interests} updateItem={updateInterest} />
                        </View>

                        <View style={styles.userLoggedStack.settings.settings.headerContent}>
                            <Text style={styles.userLoggedStack.settings.settings.accountText}>
                                Select what describes your lifestyle.
                            </Text>
                        </View>
                    </View>
                    <View
                        style={
                            styles.userLoggedStack.settings.settings.questionnaireButtonContainer
                        }>
                        <QuestionnaireList items={lifestyles} updateItem={updateLifestyle} />
                    </View>
                    <View style={styles.userLoggedStack.settings.settings.questionnaireButtonBox}>
                        <View
                            style={
                                styles.userLoggedStack.settings.settings
                                    .questionnaireButtonContainer
                            }>
                            <TouchableOpacity onPress={updateUser}>
                                <LinearGradient
                                    colors={["#e00ba0", "#46a0db"]}
                                    style={styles.userLoggedStack.settings.settings.linearGradient}
                                    start={{ x: 0.7, y: 0 }}>
                                    <Text
                                        style={styles.userLoggedStack.settings.settings.buttonText}>
                                        {" "}
                                        Update{" "}
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

export default Questionnaire;
