/* eslint-disable prettier/prettier */
import database from "@react-native-firebase/database";

const fb = database();

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
        const id = `${initialUser}-${matchedUser}-${Date.now()}`;
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
