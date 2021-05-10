import React, { useState } from "react";
import {
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import styles from "../../assets/styles.js";

const MatchMade = () => {
    const [muted, setMuted] = useState(false);
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
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

export default MatchMade;