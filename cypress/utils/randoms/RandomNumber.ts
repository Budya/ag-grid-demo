import { randomInt } from '../randoms/RandomInt';

function getRandomNumber(): number {
    const min = 1000;
    const max = 700000;

    return randomInt(min, max); 
}

export {
    getRandomNumber
}