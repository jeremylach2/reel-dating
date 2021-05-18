/* eslint-disable prettier/prettier */
import database from "@react-native-firebase/database";
import Matches from "./Matches";

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
                        _id: uid,
                        ...snapshot.val(),
                    }
                    : null;
            });
    }

    static getOn(id) {
        return fb
            .ref(`/users/${id}`);
    }

    static async formatSnapshot(id, snapshot) {
        const user = snapshot.val();

        return user
            ? {
                id,
                _id: id,
                ...snapshot.val(),
            }
            : null;
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

    static async getMatches(user) {
        const matches = user.matches ? Object.keys(user.matches) : [];

        const matchArray = Promise.all(matches.filter(m => user.matches[m] !== false).map(m => Matches.get(user.matches[m])));

        return Promise.all((await matchArray).map(async m => {
            return {
                ...m,
                initialUser: await this.get(m.initial_user),
                matchedUser: await this.get(m.matched_user),
            };
        }));
    }
}

export default Users;
