import { randomInt } from '../randoms/RandomInt';

function getRandomBoolean() {
    const min = 0;
    const max = 1;
    const number = randomInt(min, max);
    
    return number > 0 ? true : false;
}

export {
    getRandomBoolean
}