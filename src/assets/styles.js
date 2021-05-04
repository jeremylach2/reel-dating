import { StyleSheet } from "react-native";

export default {
    userLoggedStack: {
        userLoggedStack: StyleSheet.create({
            active: {
                alignItems: "center",
                marginTop: "10%",
            },
            background: {
                width: "100%",
                height: "100%",
                flex: 1,
            },
            buttonsContainer: {
                flex: 1,
                backgroundColor: "transparent",
                height: "10%",
                maxHeight: "10%",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                zIndex: 2,
            },
            container: {
                flex: 1,
            },
            header: {
                color: "white",
                fontSize: 20,
            },
            headerContent: {
                borderBottomWidth: 1,
                borderColor: "white",
                margin: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            },
            logo: {
                resizeMode: "contain",
                height: 150,
                width: "100%",
            },

            menuBackground: {
                flex: 1,
            },
            powerContainer: {
                justifyContent: "center",
                alignItems: "center",
                width: 220,
                height: 220,
                borderRadius: 110,
                borderColor: "black",
                backgroundColor: "rgba(32, 32, 32, 0.3)",
            },
            powerStatus: {
                overflow: "hidden",
            },
            profilePic: {
                width: 75,
                height: 75,
                marginTop: "15%",
                marginBottom: "5%",
            },
            quote: {
                fontSize: 20,
                color: "rgba(255, 255, 255, 0.85)",
                textAlign: "center",
                fontStyle: "italic",
                fontFamily: "sans-serif-light",
                textShadowColor: "rgba(0, 0, 0, 0.75)",
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10,
            },
            searchStatus: {
                alignSelf: "center",
                color: "white",
                fontFamily: "sans-serif-light",
                fontSize: 30,
                marginBottom: "6%",
                textShadowColor: "rgba(0, 0, 0, 0.75)",
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10,
            },
            text: {
                color: "white",
                fontSize: 15,
            },
            textContainer: {
                backgroundColor: "rgba(25, 22, 22, 0.2)",
                height: "8%",
                justifyContent: "center",
            },
            utilityBox: {
                alignContent: "center",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
            },
            utilityBoxContainer: {
                alignItems: "center",
                backgroundColor: "rgba(32, 32, 32, 0.3)",
                width: "90%",
                justifyContent: "space-between",
            },
            utilityBoxContent: {
                width: "80%",
                margin: 5,
                borderBottomWidth: 1,
                borderColor: "white",
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "space-between",
                maxWidth: "80%",
                overflow: "hidden",
            },
            videoContainer: {
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                maxHeight: "82%",
                backgroundColor: "white",
                zIndex: 1,
            },
            videoText: {
                alignSelf: "center",
                color: "white",
                fontFamily: "sans-serif-light",
                textShadowColor: "rgba(0, 0, 0, 0.75)",
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10,
                fontSize: 25,
            },
            videoUtilityBox: {
                flex: 1,
                backgroundColor: "rgba(22, 22, 22, 0.8)",
                width: "100%",
                height: "100%",
            },
            chat: StyleSheet.create({
                
            }),
        }),
        settings: {
            settings: StyleSheet.create({
                //styles.userLoggedStack.settings.settings
                accountText: {
                    color: "white",
                    fontSize: 15,
                },
                background: {
                    width: "100%",
                    height: "100%",
                    flex: 1,
                },
                button: {
                    overflow: "hidden",
                    marginRight: 100,
                    marginLeft: 100,
                    marginBottom: 10,
                    paddingTop: 20,
                    paddingBottom: 20,
                    backgroundColor: "#68a0cf",
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "#fff",
                    alignItems: "center",
                },
                buttonContainer: {
                    flex: 1,
                    justifyContent: "space-evenly",
                    alignItems: "center",
                },
                buttonText: {
                    fontSize: 20,
                    textAlign: "center",
                    margin: 10,
                    color: "#ffffff",
                    backgroundColor: "transparent",
                },
                container: {
                    flex: 1,
                },
                header: {
                    color: "white",
                    fontSize: 20,
                },
                headerContent: {
                    /* Notifications issue here, Reece can explain.
                    borderColor: "white",
                    margin: 10,
                    alignItems: "center",
                    */

                    borderBottomWidth: 1,
                    borderColor: "white",
                    margin: 10,
                    alignItems: "center",
                },
                itemContainer: {
                    backgroundColor: "rgba(32, 32, 32, 0.3)",
                    width: "70%",
                },
                itemContent: {
                    margin: 16,
                    borderBottomWidth: 1,
                    borderColor: "white",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                },
                linearGradient: {
                    marginTop: "15%",
                    width: 220,
                    height: 50,
                    borderRadius: 110,
                },
                notificationText: {
                    color: "white",
                    fontSize: 23,
                },
                optionsButton: {
                    margin: 24,
                    borderBottomWidth: 1,
                    borderColor: "white",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                },
                optionsButtonContainer: {
                    backgroundColor: "rgba(32, 32, 32, 0.3)",
                    width: "70%",
                },
                optionsText: {
                    color: "white",
                },
                profilePicture: {
                    width: 75,
                    height: 75,
                    marginTop: "15%",
                    marginBottom: "5%",
                },
                securityText: {
                    color: "white",
                    fontSize: 20,
                },
                textBox: {
                    height: 300,
                    width: "95%",
                    borderColor: "white",
                    borderWidth: 1,
                    marginBottom: 20,
                    color: "white",
                    textAlignVertical: "top",
                },
                textInputBox: {
                    marginTop: "5%",
                    flexDirection: "row",
                    alignSelf: "center",
                    width: "96%",
                    marginLeft: 2,
                    marginRight: 2,
                    marginBottom: 10,
                    minHeight: 150,
                    maxWidth: "90%",
                    minWidth: "90%",
                    backgroundColor: "transparent",
                    borderWidth: 1,
                    borderColor: "gray",
                    paddingLeft: 10,
                    paddingTop: 10,
                    paddingBottom: 10,
                },
                textInputContainer: {
                    marginTop: "40%",
                    alignItems: "center",
                    width: "70%",
                },
                title: {
                    color: "white",
                    fontSize: 20,
                },
                titleBox: {
                    alignItems: "center",
                    backgroundColor: "rgba(32, 32, 32, 0.3)",
                    width: "70%",
                },
                utilityBox: {
                    /* this was the code for account.js in settings, but it doesn't change with help.js style
                    alignContent: "center",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    */
                    // display: "flex",
                    flex: 1,
                    alignContent: "center",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                },
                utilityBoxContainer: {
                    alignItems: "center",
                    backgroundColor: "rgba(32, 32, 32, 0.3)",
                    width: "70%",
                },
                utilityBoxContent: {
                    width: "80%",
                    margin: 5,
                    borderBottomWidth: 1,
                    borderColor: "white",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    maxWidth: "80%",
                    overflow: "hidden",
                },
                questionnaireButtonBox: {
                    backgroundColor: "rgba(22, 22, 22, 0.8)",
                    alignContent: "center",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                },
                questionnaireUtilityBox: {
                    flex: 1,
                    backgroundColor: "rgba(22, 22, 22, 0.8)",
                    width: "140%",
                    height: "140%",
                },
            }),
        },
    },
    userUnloggedStack: {
        userUnloggedStack: StyleSheet.create({
            background: {
                flex: 1,
            },
            container: {
                flex: 1,
                flexDirection: "row",
            },
            forgotButton: {
                alignItems: "center",
                color: "black",
                opacity: 0.6,
                textDecorationLine: "underline",
            },
            form: {
                backgroundColor: "transparent",
                borderColor: "white",
                borderStyle: "solid",
                borderWidth: 2,
                borderRadius: 8,
                padding: "5%",
                paddingBottom: "1%",
                marginTop: "1%",
                width: "70%",
                flexWrap: "wrap",
                flexDirection: "column",
                justifyContent: "center",
            },
            formContent: {
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                width: "100%",
            },
            image: {
                flex: 1,
                resizeMode: "cover",
                justifyContent: "center",
            },
            loginButton: {
                backgroundColor: "#FFFFFF",
                borderRadius: 4,
                padding: "4%",
                marginBottom: "4%",
                width: "100%",
            },
            loginErrorText: {
                color: "red",
                textAlign: "center",
            },
            loginText: {
                color: "black",
                textAlign: "center",
            },
            logo: {
                resizeMode: "contain",
                height: 150,
                width: "100%",
            },
            resetButton: {
                backgroundColor: "#FFFFFF",
                borderRadius: 4,
                padding: "4%",
                marginBottom: "4%",
                width: "100%",
            },
            resetText: {
                color: "black",
                textAlign: "center",
            },
            title: {
                fontWeight: "bold",
                textAlign: "center",
                color: "white",
                fontSize: 25,
            },
            utilityBox: {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignContent: "center",
            },
            userInput: {
                width: "100%",
                maxWidth: "100%",
                overflow: "hidden",
                backgroundColor: "#B0C4DE",
                borderRadius: 4,
                padding: "3%",
                marginBottom: "2%",
            },
        }),
    },
};
