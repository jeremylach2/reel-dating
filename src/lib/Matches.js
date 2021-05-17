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

    static async create(id, data) {
        return fb
            .ref(`/matches/${id}`)
            .set(data)
            .then(() => {
                return this.get(id);
            });
    }

    static async createRandomID(initialUser, matchedUser) {
        return fb
            .ref("/matches")
            .push()
            .set({
                initial_user: initialUser,
                matched_user: matchedUser,
                date: Date.now(),
                messages: [],
            })
            .then(snapshot => {
                return this.get(snapshot.key);
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
