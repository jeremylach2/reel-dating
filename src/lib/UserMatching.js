import Users from "./Users";

export default async function (currentUser) {
    const users = await Users.getAll();
    const otherActiveUsers = users.filter(u => u.id !== currentUser.id && u.active);

    console.log("\n<== Current User ==>\n", currentUser, "\n<== Other Active Users ==>\n", otherActiveUsers);

    return false;
}
