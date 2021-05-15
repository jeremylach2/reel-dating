/* eslint-disable prettier/prettier */
import database from "@react-native-firebase/database";

const fb = database();

class Users {
    static async getUserByUID(uid) {
        return fb
            .ref(`/users/${uid}`)
            .once("value")
            .then(snapshot => {
                const user = snapshot.val();

                return user
                    ? {
                        id: uid,
                        ...snapshot.val(),
                    }
                    : null;
            });
    }

    static async createUserWithUID(uid, data) {
        return fb
            .ref(`/users/${uid}`)
            .set(data)
            .then(() => {
                return this.getUserByUID(uid);
            });
    }

    static async updateUserByUID(uid, data) {
        return fb
            .ref(`/users/${uid}`)
            .update(data)
            .then(() => {
                return this.getUserByUID(uid);
            });
    }

    static async getAll() {
        return fb
            .ref("/users")
            .once("value")
            .then(snapshot => {
                const users = snapshot.val();

                return Object.keys(users).map(u => {
                    return {
                        id: u,
                        ...users[u],
                    };
                });
            });
    }

    static async getPendingMatch(uid) {
        return fb
            .ref(`/pending_match/${uid}`)
            .once("value")
            .then(snapshot => {
                const match = snapshot.val();

                return match
                    ? {
                        user_id: uid,
                        ...snapshot.val(),
                    }
                    : null;
            });
    }

    static async createPendingMatch(user, initialUser) {
        return fb
            .ref(`/pending_matches/${user.id}`)
            .set({
                initial_user_id: initialUser.id,
            });
    }
}

export default Users;
