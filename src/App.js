import React, { useState } from "react";
import { Text } from "react-native";

import { firebase } from '@react-native-firebase/database';

const fb = firebase
    .app()
    .database("https://reel-dating-default-rtdb.firebaseio.com");

const App = props => {
    const [user, setUser] = useState({});

    fb.ref("/users/1")
        .once("value")
        .then(v => setUser(v.val()));

    return (
        <Text>
            {user && user.name
                ? `${user.name.first} ${user.name.last}`
                : "No user."}
        </Text>
    );
};

export default App;
