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
}

export default Users;
