import { StyleSheet } from "react-native";


export default {
    userLoggedStack: {
        userLoggedStack: StyleSheet.create({
            //styles.userLoggedStack.userLoggedStack.
            container: {
                flex: 1,
            },
            background: {
                width: '100%',
                height: '100%',
                flex: 1,
            },
            utilityBox: {
                alignContent: "center",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
            },
            profilePic: {
                width: 75,
                height: 75,
                marginTop: "15%",
                marginBottom: "5%",
            },
            headerContent: {
                borderBottomWidth: 1,
                borderColor: "white",
                margin: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            },
            header: {
                color: "white",
                fontSize: 20,
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
                justifyContent: "space-between",
                maxWidth: "80%",
                overflow: "hidden",
            },
            text: {
                color: "white",
                fontSize: 15,
            },
            menuBackground: {
                flex: 1,
            },
            logo: {
                resizeMode: "contain",
                height: 150,
                width: "100%",
            },
            active: {
                alignItems: "center",
                marginTop: "10%",
            },
            searchStatus: {
                alignSelf: "center",
                color: "white",
                fontFamily: "sans-serif-light",
                fontSize: 30,
                marginBottom: "6%",
                textShadowColor: "rgba(0, 0, 0, 0.75)",
                textShadowOffset: {width: -1, height: 1},
                textShadowRadius: 10,
            },
            powerStatus: {
                overflow: "hidden",
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
            quote: {
                fontSize: 20,
                color: "rgba(255, 255, 255, 0.85)",
                textAlign: "center",
                fontStyle: "italic",
                fontFamily: "sans-serif-light",
                textShadowColor: "rgba(0, 0, 0, 0.75)",
                textShadowOffset: {width: -1, height: 1},
                textShadowRadius: 10,
            },
            videoContainer: {
                flex: 1,
                backgroundColor: "rgba(22, 22, 22, 0.8)",
                width: "100%",
                height: "100%",
            },
            textContainer: {
                backgroundColor: "rgba(25, 22, 22, 0.2)",
                height: "8%",
                justifyContent: "center",
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
            videoContainer: {
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                maxHeight: "82%",
                backgroundColor: "white",
                zIndex: 1,
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
        }),
        settings: {
            settings: StyleSheet.create({//I recommend in the future we alphabetize this.

                //styles.userLoggedStack.settings.settings
                container: {
                    flex: 1,
                },
                background: {
                    width: "100%",
                    height: "100%",
                    flex: 1,
                },
                utilityBox: {
                    /* this was the code for account.js in settings, but it doesn't change with help.js style
                    alignContent: "center",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    */

                    flex: 1,
                    display: "flex",
                    alignContent: "center",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                },
                profilePicture: {
                    width: 75,
                    height: 75,
                    marginTop: "15%",
                    marginBottom: "5%",
                },
                headerContent: {
                    borderBottomWidth: 1,
                    borderColor: "white",
                    margin: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                },
                header: {
                    color: "white",
                    fontSize: 20,
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
                buttonContainer: {
                    flex: 1,
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    marginVertical: 24,
                },
                optionsButtonContainer: {
                    backgroundColor: "rgba(32, 32, 32, 0.3)",
                    width: "70%",
                },
                linearGradient: {
                    marginTop: "15%",
                    width: 220,
                    height: 50,
                    borderRadius: 110,
                },
                buttonText: {
                    fontSize: 20,
                    textAlign: "center",
                    margin: 10,
                    color: "#ffffff",
                    backgroundColor: "transparent",
                },
                accountText: {
                    color: "white",
                    fontSize: 15,
                },
                securityText: {
                    color: "white",
                    fontSize: 20,
                },
                notificationText: {
                    color: "white",
                    fontSize: 23,
                },
                optionsText: {
                    color: "white",
                },
                optionsButton: {
                    margin: 24,
                    borderBottomWidth: 1,
                    borderColor: "white",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                },
                titleBox: {
                    alignItems: "center",
                    backgroundColor: "rgba(32, 32, 32, 0.3)",
                    width: "70%",
                },
                itemContent: {
                    margin: 24,
                    borderBottomWidth: 1,
                    borderColor: "white",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
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
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                },
                title: {
                    color: "white",
                    fontSize: 20,
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
                textBox: {
                    height: 300,
                    width: "95%",
                    borderColor: "white",
                    borderWidth: 1,
                    marginBottom: 20,
                    color: "white",
                    textAlignVertical: "top",
                },
                itemContainer: {
                    backgroundColor: "rgba(32, 32, 32, 0.3)",
                    width: "70%",
                },
            })
        }

    },
    userUnloggedStack: {
        userUnloggedStack: StyleSheet.create({
            background: {
                flex: 1,
            },
            image: {
                flex: 1,
                resizeMode: "cover",
                justifyContent: "center",
            },
            logo: {
                resizeMode: "contain",
                height: 150,
                width: "100%",
            },
            container: {
                flex: 1,
                flexDirection: "row",
            },
            utilityBox: {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignContent: "center",
            },
            title: {
                fontWeight: "bold",
                textAlign: "center",
                color: "white",
                fontSize: 25,
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
            userInput: {
                width: "100%",
                maxWidth: "100%",
                overflow: "hidden",
                backgroundColor: "#B0C4DE",
                borderRadius: 4,
                padding: "3%",
                marginBottom: "2%",
            },
            loginButton: {
                backgroundColor: "#FFFFFF",
                borderRadius: 4,
                padding: "4%",
                marginBottom: "4%",
                width: "100%",
            },
            loginText: {
                color: "black",
                textAlign: "center",
            },
            forgotButton: {
                alignItems: "center",
                color: "black",
                opacity: 0.6,
                textDecorationLine: "underline",
            },
            loginErrorText: {
                color: "red",
                textAlign: "center",
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
        }),
    },
};
