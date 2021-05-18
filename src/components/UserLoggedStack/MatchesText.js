import React, { useState, useContext, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

import Matches from "../../lib/Matches.js";
import UserContext from "../../lib/UserContext.js";

// Text screen chat between user and match.
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

    // Disables tab bar in this screen.
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
        setMessages(match.messages || []);
    }, [match]);

    // Dynamically updates match, including messages.
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
