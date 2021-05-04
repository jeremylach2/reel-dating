import React, { useState, useEffect, useCallback } from "react";
import {
    Text,
    ImageBackground,
    View,
    Image,
    FlatList,
    TouchableNativeFeedback,
} from "react-native";
import styles from "../../assets/styles.js";
import { GiftedChat } from 'react-native-gifted-chat';
import { Dimensions } from 'react-native';
let chat = [
    {
        from: "123",
        msg: "ajkdhfal",
        date: 1620087330249,
    },
    {
        from: "321",
        msg: "asdfasdf",
        date: 1620087330250,
    },
];

const MatchesText = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'MAGA',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'Reece',
                    avatar: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/05/12/104466932-PE_Color.530x298.jpg?v=1591298823',
                },
            },
            {
                _id: 2,
                text: 'Whats Good',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'Jackson',
                },
            },
        ]);
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, []);

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
    );
};


export default MatchesText;