import Users from "./Users";

let usersOptions = [
    {
        active: true,
        id: "hM8XqIwgPPeps9XAzQLKZGvoQZR2",
        personal: {
            age: 22,
            gender: "man",
        },
        name: {
            first: "Bryan",
            last: "Pikaard",
        },
        questionnaire: {
            interests: ["Coding", "Dogs"],
            lifestyle: ["Lazy"],
            agePreference: 22,
            genderPreference: "women",
        },
    },
    {
        active: true,
        id: "AXQ4u7My3UcfdvmN0RMApfV8o453",
        personal: {
            age: 22,
            gender: "man",
        },
        name: {
            first: "Reece",
            last: "Reynolds",
        },
        questionnaire: {
            interests: ["Coding", "Dogs", "Running"],
            lifestyle: ["Lazy", "Lazier"],
            agePreference: 35,
            genderPreference: "women",
        },
    },
];

let userCurrent = [
    {
        active: true,
        id: "njkghgghjf76ghkjGHJFJG",
        name: {
            first: "Bryan's",
            last: "Girlfriend",
        },
        personal: {
            age: 22,
            gender: "women",
        },
        questionnaire: {
            interests: ["Coding", "Dogs"],
            lifestyle: ["NotLazy", "Lazy"],
            agePreference: 19,
            genderPreference: "man",
        },
    },
];

// This function contains the matchmaking algorithm using the
// Tanimoto Distance forumla and our own specifications.
export default async function (currentUser) {
    const minThres = 0.6;
    let interestScore = 0;
    let lifestyleScore = 0;
    let otherScore = true;

    /*
    const users = await Users.getAll();
    const otherActiveUsers = users.filter(u => u.id !== currentUser.id && u.active);

    console.log(
        "\n<== Current User ==>\n",
        currentUser,
        "\n<== Other Active Users ==>\n",
        otherActiveUsers
    );
    
*/

    // loops through all potential matches
    usersOptions.forEach(otherUser => {
        driverCompare(otherUser, userCurrent);
        console.log(otherUser.personal.gender);
        console.log(otherUser.questionnaire.genderPreference);
        console.log(userCurrent[0].personal.gender);
        console.log(userCurrent[0].questionnaire.genderPreference);
    });

    // splits up lists into specific categories to test
    function driverCompare(otherUser, currUser) {
        compareInterests(currUser[0].questionnaire.interests, otherUser.questionnaire.interests);
        compareLifestyle(currUser[0].questionnaire.lifestyle, otherUser.questionnaire.lifestyle);
        compareOther(currUser[0], otherUser);
        combineScores();
    }

    function compareInterests(A, B) {
        interestScore = tanimotoDistance(commonElementCount(A, B), A.length, B.length);
    }

    function compareLifestyle(A, B) {
        lifestyleScore = tanimotoDistance(commonElementCount(A, B), A.length, B.length);
    }

    function commonElementCount(A, B) {
        return A.reduce((count, element) => count + B.includes(element), 0);
    }

    //Comparing Age and Gender Preferences
    function compareOther(A, B) {
        otherScore = true;
        let ageCuttoff;
        if (A.personal.age > 50 || B.personal.age > 50) {
            ageCuttoff = 20;
        } else {
            ageCuttoff = 10;
        }
        if (
            !ageMatches(
                A.questionnaire.agePreference,
                B.questionnaire.agePreference,
                A.personal.age,
                B.personal.age,
                ageCuttoff
            )
        ) {
            otherScore = false;
        }
        if (
            !genderMatches(
                A.questionnaire.genderPreference,
                B.questionnaire.genderPreference,
                A.personal.gender,
                B.personal.gender
            )
        ) {
            otherScore = false;
        }
    }

    function ageMatches(AprefAge, BprefAge, AgeA, AgeB, ageCuttoff) {
        return !(
            AprefAge + ageCuttoff >= AgeB &&
            AprefAge - ageCuttoff <= AgeB &&
            BprefAge + ageCuttoff >= AgeA &&
            BprefAge - ageCuttoff <= AgeA
        );
    }

    function genderMatches(AprefGender, Bprefgender, Agender, Bgender) {
        return Agender === Bprefgender && Bgender === AprefGender;
    }

    // Tanimoto Distance formula
    function tanimotoDistance(C, A, B) {
        if (A.length <= 0 || B.length <= 0 || C <= 0) return 0;
        return C / (A + B - C);
    }

    function combineScores() {
        console.log("I-Score", interestScore);
        console.log("L-Score", lifestyleScore);
        console.log("O-Score", otherScore);

        let totalScore = interestScore + lifestyleScore / 2;
        if (totalScore > minThres && otherScore) {
            //It's a match
            console.log("match");
        } else {
            //Not a match
            console.log("Not match");
        }
    }

    return false;
}
