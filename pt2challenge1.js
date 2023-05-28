//arrow function to calculate the average of three scores
const calcAverage = (score1, score2, score3) => {
    const result = (score1 + score2 + score3)/3;
    return result;
}

const scoreDolphins = calcAverage(44, 23, 71);

const scoreKoala = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoala);


//Function checkerWinner to determine who wins
function checkWinner(avgDolphins, avgKoala) {
    if (avgDolphins >= 2 * avgKoala) {
        return `Dolphins win ${avgDolphins} vs ${avgKoala}`;
    }

    else if(avgKoala >= 2 * avgDolphins) {
        return `Koala wins ${avgKoala} vs ${avgDolphins}`;
    }

    else{
        return `There is no winner`;
    }

}

const winner = checkWinner(4, 9);
console.log (winner);