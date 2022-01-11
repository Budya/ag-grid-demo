import { randomInt } from '../randoms/RandomInt';

function getRandomRating() {
    const min = 1; // shold be 0
    const max = 5;
    return randomInt(min, max);
}

export {
    getRandomRating
}