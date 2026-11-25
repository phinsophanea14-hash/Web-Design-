function challenge6(votes) {
    if (votes.length === 0) {
        return "There is no vote yet";
    }
    let countA = 0;
    let countB = 0;
    let countC = 0;
    for (let i = 0; i < votes.length; i++) {

        if (votes[i] === "A") {
            countA++;
        }
        else if (votes[i] === "B") {
            countB++;
        }
        else if (votes[i] === "C") {
            countC++;
        }
    }
    let maxVote = countA;

    if (countB > maxVote) {
        maxVote = countB;
    }

    if (countC > maxVote) {
        maxVote = countC;
    }
    let winners = [];
    let index = 0;

    if (countA === maxVote) {
        winners[index] = "A";
        index++;
    }

    if (countB === maxVote) {
        winners[index] = "B";
        index++;
    }

    if (countC === maxVote) {
        winners[index] = "C";
        index++;
    }
    return winners;
}
console.log(challenge6(["A", "B", "A", "C", "A"]));
console.log(challenge6(["A", "B", "B", "C", "A"]));
console.log(challenge6([]));