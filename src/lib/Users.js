/* eslint-disable prettier/prettier */
import database from "@react-native-firebase/database";

const fb = database();

class Users {
    static async get(uid) {
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

    static async create(uid, data) {
        return fb
            .ref(`/users/${uid}`)
            .set(data)
            .then(() => {
                return this.get(uid);
            });
    }

    static async update(uid, data) {
        return fb
            .ref(`/users/${uid}`)
            .update(data)
            .then(() => {
                return this.get(uid);
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
}

export default Users;
