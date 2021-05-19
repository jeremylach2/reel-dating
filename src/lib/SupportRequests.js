/* eslint-disable prettier/prettier */
import database from "@react-native-firebase/database";
import auth from "@react-native-firebase/auth";

const fb = database();

class SupportRequests {
    static async create(data) {
        return fb
            .ref(`/support_requests/${auth().currentUser.uid}-${Date.now()}`)
            .set(data);
    }
}

export default SupportRequests;
