import database from "@react-native-firebase/database";

const fb = database();

class Users {
    static async getUserByUID(uid) {
        return fb
            .ref(`/users/${uid}`)
            .once("value")
            .then(snapshot => {
                return snapshot.val();
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
}

export default Users;
