import { StyleSheet } from "react-native";


export default {
    userLoggedStack: {
        userLoggedStack: StyleSheet.create({

        }),
        settings: {
            settings: StyleSheet.create({
                //style.userLoggedStack.settings.settings
            }),
            help: StyleSheet.create({

            }),
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
