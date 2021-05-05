import React, { useState } from "react";
import "react-native-gesture-handler";
import {
    Text,
    ImageBackground,
    View,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import RadioButtonRN from "radio-buttons-react-native";
import styles from "../../../assets/styles.js";

const agePreference = [
    {
        label: '18-25',
        accessibilityLabel: '18-25'
    },
    {
        label: '26-33',
        accessibilityLabel: '26-33'
    },
    {
        label: '34-41',
        accessibilityLabel: '34-41'
    },
    {
        label: '42-48',
        accessibilityLabel: '42-48'
    },
    {
        label: '49-56',
        accessibilityLabel: '49-56'
    },
    {
        label: '56-63',
        accessibilityLabel: '56-63'
    },
    {
        label: '64+',
        accessibilityLabel: '64+'
    },
];

const sexPreference = [
    {
        label: 'Men',
        accessibilityLabel: 'Men'
    },
    {
        label: 'Women',
        accessibilityLabel: 'Women'
    },
    {
        label: 'Both',
        accessibilityLabel: 'Both'
    },
];

function Interest(props) {
    return (
        <TouchableOpacity onPress={() => setInterestSelected(!interestSelected)}>
            <LinearGradient
                colors={["#46a0db", "#e00ba0"]}
                style={styles.userLoggedStack.settings.settings.questionnaireButton}
                start={{ x: 0.7, y: 0 }}>
                <Text style={styles.userLoggedStack.settings.settings.questionnaireButtonText}>
                    {" "}
                    {props.interest}{" "}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const interestsList = [
    "Sports", "Fishing", "Climbing",
];

const Questionaire = ({ navigation }) => {
    const [interests, setInterests] = useState(interestsList);


    return (
        <View style={styles.userLoggedStack.settings.settings.container}>
            <ImageBackground
                source={require("../../../assets/images/background-question.png")}
                style={styles.userLoggedStack.settings.settings.background}
                resizeMode="cover"
            >
                <ScrollView>

                    <View style={styles.userLoggedStack.settings.settings.utilityBox}>
                        <View style={styles.userLoggedStack.settings.settings.headerContent}>
                            <Text style={styles.userLoggedStack.settings.settings.header}>QUESTIONNAIRE</Text>
                        </View>

                        <View style={styles.userLoggedStack.settings.settings.headerContent}>
                            <Text style={styles.userLoggedStack.settings.settings.accountText}>What is your age preference?</Text>
                        </View>
                        <View style={styles.userLoggedStack.settings.settings.questionnaireRadioContainer}>
                            <RadioButtonRN
                                data={agePreference}
                                deactiveColor="white"
                                activeColor="white"
                                boxDeactiveBgColor="transparent"
                                boxActiveBgColor="rgba(22, 22, 22, 0.2)"
                                textColor="white"
                                selectedBtn={(e) => console.log(e)}
                            />
                        </View>
                        <View style={styles.userLoggedStack.settings.settings.headerContent}>
                            <Text style={styles.userLoggedStack.settings.settings.accountText}>Who would you like to see?</Text>
                        </View>
                        <View style={styles.userLoggedStack.settings.settings.questionnaireRadioContainer}>
                            <RadioButtonRN
                                data={sexPreference}
                                deactiveColor="white"
                                activeColor="white"
                                boxDeactiveBgColor="transparent"
                                boxActiveBgColor="rgba(22, 22, 22, 0.2)"
                                textColor="white"
                                selectedBtn={(e) => console.log(e)}
                            />
                        </View>
                        <View style={styles.userLoggedStack.settings.settings.headerContent}>
                            <Text style={styles.userLoggedStack.settings.settings.accountText}>Select all that interest you.</Text>
                        </View>
                        <View style={styles.userLoggedStack.settings.settings.questionnaireButtonContainer}>
                            
                            <Interest interest="Sports" />
                            <Interest interest="Working Out" />
                            <Interest interest="Fishing" />
                            <Interest interest="Climbing" />
                            <Interest interest="Volunteering" />
                            <Interest interest="Dog Lover" />
                            <Interest interest="Cooking" />
                            <Interest interest="Coffee" />
                            <Interest interest="Movies" />
                            <Interest interest="Grab a Drink" />
                            <Interest interest="Music" />
                            <Interest interest="Netflix" />
                            <Interest interest="Travel" />
                            <Interest interest="Politics" />
                            <Interest interest="Movies" />
                            <Interest interest="Photography" />
                            <Interest interest="Hiking" />
                            <Interest interest="Reading" />
                            <Interest interest="Fashion" />
                            <Interest interest="Cycling" />
                            <Interest interest="Religion" />
                            
                        </View>
                    </View>

                    <View style={styles.userLoggedStack.settings.settings.questionnaireButtonBox}>
                        <View style={styles.userLoggedStack.settings.settings.questionnaireButtonContainer}>
                            <TouchableOpacity>
                                <LinearGradient
                                    colors={["#46a0db", "#e00ba0"]}
                                    style={styles.userLoggedStack.settings.settings.linearGradient}
                                    start={{ x: 0.7, y: 0 }}>
                                    <Text style={styles.userLoggedStack.settings.settings.buttonText}>
                                        {" "}
                                    Update{" "}
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View >
    );
};


export default Questionaire;