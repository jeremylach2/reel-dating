import React, { useState } from "react";
import "react-native-gesture-handler";
import {
    Text,
    ImageBackground,
    View,
    ScrollView,
    TouchableOpacity,
    Modal,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import RadioButtonRN from "radio-buttons-react-native";
import Slider from "@react-native-community/slider";
import styles from "../../../assets/styles.js";

const agePreference = [
    {
        label: "18-25",
        accessibilityLabel: "18-25",
    },
    {
        label: "26-33",
        accessibilityLabel: "26-33",
    },
    {
        label: "34-41",
        accessibilityLabel: "34-41",
    },
    {
        label: "42-48",
        accessibilityLabel: "42-48",
    },
    {
        label: "49-56",
        accessibilityLabel: "49-56",
    },
    {
        label: "56-63",
        accessibilityLabel: "56-63",
    },
    {
        label: "64+",
        accessibilityLabel: "64+",
    },
];

const sexPreference = [
    {
        label: "Men",
        accessibilityLabel: "Men",
    },
    {
        label: "Women",
        accessibilityLabel: "Women",
    },
    {
        label: "Both",
        accessibilityLabel: "Both",
    },
];

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

const Questionnaire = ({ navigation }) => {
    const [interests, setInterests] = useState(interestsList);
    const [lifestyles, setLifestyles] = useState(lifestyleList);
    const [sliderValue, setSliderValue] = useState(18);
    const [height, setHeight] = useState("");

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
                                What Age Would You Like to See?
                            </Text>
                        </View>
                        <Slider
                            style={{ width: "80%" }}
                            initialValue={18}
                            minimumValue={18}
                            maximumValue={100}
                            minimumTrackTintColor="#FFFFFF"
                            maximumTrackTintColor="#000000"
                            onValueChange={sliderValue => setSliderValue(sliderValue)}
                            step={1}
                        />
                        <Text style={styles.userLoggedStack.settings.settings.accountText}>
                            Age : {sliderValue}
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
                            <RadioButtonRN
                                data={sexPreference}
                                deactiveColor="white"
                                activeColor="white"
                                boxDeactiveBgColor="transparent"
                                boxActiveBgColor="rgba(22, 22, 22, 0.2)"
                                textColor="white"
                                selectedBtn={e => console.log(e)}
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
                            <TouchableOpacity>
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
