/* eslint-disable prettier/prettier */
import database from "@react-native-firebase/database";

const fb = database();

function generateHash(string) {
    var hash = 0;
    if (string.length == 0) return hash;
    for (let i = 0; i < string.length; i++) {
        var charCode = string.charCodeAt(i);
        // eslint-disable-next-line no-bitwise
        hash = (hash << 7) - hash + charCode;
        // eslint-disable-next-line no-bitwise
        hash = hash & hash;
    }
    return hash;
}

class Matches {
    static async get(id) {
        return fb
            .ref(`/matches/${id}`)
            .once("value")
            .then(snapshot => {
                const user = snapshot.val();

                return user
                    ? {
                        id,
                        ...snapshot.val(),
                    }
                    : null;
            });
    }

    static async create(initialUser, matchedUser) {
        const id = generateHash(`${initialUser}-${matchedUser}-${Date.now()}`);
        return fb
            .ref(`/matches/${id}`)
            .set({
                initial_user: initialUser,
                matched_user: matchedUser,
                date: Date.now(),
                messages: [],
            })
            .then(() => {
                return this.get(id);
            });
    }

    static async update(id, data) {
        return fb
            .ref(`/matches/${id}`)
            .update(data)
            .then(() => {
                return this.get(id);
            });
    }
}

export default Matches;
