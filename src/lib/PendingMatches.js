/* eslint-disable prettier/prettier */
import database from "@react-native-firebase/database";

const fb = database();

class PendingMatches {
    static async get(id) {
        return fb
            .ref(`/pending_matches/${id}`)
            .once("value")
            .then(snapshot => {
                const match = snapshot.val();

                if (match && Date.now() - match.timestamp > 30 * 1000) {
                    this.delete(id);

                    return null;
                }

                return match
                    ? {
                        user_id: id,
                        ...snapshot.val(),
                    }
                    : null;
            });
    }

    static async create(id, creatorID) {
        return fb
            .ref(`/pending_matches/${id}`)
            .set({
                initial_user_id: creatorID,
                timestamp: Date.now() + 30 * 1000,
            })
            .then(() => this.get(id));
    }

    static async update(id, data) {
        return fb
            .ref(`/pending_matches/${id}`)
            .update(data)
            .then(() => {
                return this.get(id);
            });
    }

    static async delete(id) {
        return fb
            .ref(`/pending_matches/${id}`)
            .remove();
    }
}

export default PendingMatches;
