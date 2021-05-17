import React, { useState, useContext, useCallback, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import Matches from "../../lib/Matches.js";
import UserContext from "../../lib/UserContext.js";

const iniMes = [
    {
        _id: 1,
        text: "MAGA",
        createdAt: new Date(),
        user: {
            _id: 2,
            name: "Reece",
            avatar: "https://i.pinimg.com/originals/36/ed/9d/36ed9d8b150a182a6e7b6d1a81a0f1b9.jpg",
        },
    },
    {
        _id: 2,
        text: "Whats Good",
        createdAt: new Date(),
        user: {
            _id: 1,
            name: "Jackson",
        },
    },
];

const MatchesText = ({
    navigation,
    route: {
        params: { match: matchItem },
    },
}) => {
    const { user } = useContext(UserContext);

    const [match, setMatch] = useState(matchItem);
    const [messages, setMessages] = useState(match.messages || []);
    const [giftedMessages, setGiftedMessages] = useState([]);

    function newMessage(newMessages) {
        const messagesToPush = newMessages.map(m => {
            return {
                ...m,
                createdAt: Date.now(),
                user: m.user.id,
            };
        });

        Matches.appendMessages(match.id, messages, messagesToPush).then(m =>
            setMessages(m.messages.sort((a, b) => a.createdAt <= b.createdAt))
        );
    }

    useEffect(() => {
        const parent = navigation.dangerouslyGetParent();

        parent.setOptions({
            tabBarVisible: false,
        });

        return () =>
            parent.setOptions({
                tabBarVisible: true,
            });
    }, []);

    useEffect(() => {
        Matches.getGiftedMessages(
            match,
            messages.sort((a, b) => a.createdAt <= b.createdAt)
        )
            .then(setGiftedMessages)
            .catch(console.error);
    }, [match, messages]);

    useEffect(() => {
        setMessages(match.messages);
    }, [match]);

    useEffect(() => {
        const ref = Matches.getOn(matchItem.id);

        const event = ref.on("value", async snapshot => {
            Matches.formatSnapshot(matchItem.id, snapshot).then(setMatch);
        });

        return () => ref.off("value", event);
    }, []);

    return <GiftedChat messages={giftedMessages} onSend={newMessage} user={user} />;
};

export default MatchesText;
