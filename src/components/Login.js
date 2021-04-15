import React, { Component } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TextInput,
} from 'react-native';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Login = props => {
    const [text, onChangeText] = React.useState("");
    return(
        <View style={page.background}>
            <View style={page.top_background}>
                <Image style={page.logo} source={require('../assets/images/logo.png')} />
            </View>
            <View style={page.container}>
                <Text style={page.text}>Username: </Text>
                <TextInput 
                    style={page.textIn}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Username..."
                    placeholderTextColor= 'white'
                />
            </View>
        </View>
    );
};

const page = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#000000',
    },
    top_background: {
        backgroundColor: '#343635',
    },
    logo: {
        resizeMode: 'contain',
        height: 120,
        width: '100%',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    text: {
        flex: 2,
        padding: 10,
        marginTop: 15,
        marginLeft: 70,
        color: 'white',
    },
    textIn: {
        flex: 2,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 20,
        marginRight: 160,
        height: 30,
        width: "100%",
        fontSize: 10,
    }
});

export default Login;
