import React from "react";
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
const MenuScreen = props => {
    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../assets/images/background-menu.png")}
                style={page.background}>
                <Image
                    style={page.logo}
                    source={require("../assets/images/logo.png")}
                />
            </ImageBackground>
        </View>
    )
};

const page = StyleSheet.create({
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
});

export default MenuScreen;