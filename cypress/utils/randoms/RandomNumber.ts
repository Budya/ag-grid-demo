function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumber(): number {
    const min = 1000;
    const max = 700000;

    return randomInt(min, max); 
}

export {
    getRandomNumber
}