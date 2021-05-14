import database from "@react-native-firebase/database";

const fb = database();

class Users {
    static async getUserByUID(uid) {
        return fb
            .ref(`/users/${uid}`)
            .once("value")
            .then(snapshot => {
                return {
                    id: uid,
                    ...snapshot.val(),
                };
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
}

export default Users;
