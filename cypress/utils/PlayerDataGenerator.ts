import { randomEnumCountry, randomEnumLanguage } from '../utils/randoms/RandomEnum';
import { makeRandomString } from '../utils/randoms/RandomString';
import { getRandomNumber } from '../utils/randoms/RandomNumber';
import { getRandomBoolean } from './randoms/RandomBoolean';
import { PlayerModel } from '../Models/PlayerModel';
import { getRandomRating } from './randoms/RandomRating';


export function generatePlayer(): PlayerModel {
    let player: {
        name: string;
        language: string;
        country: string ;
        gameName: string;
        bought: boolean;
        bankBalance: number;
        rating: number;
        totalWinnings: number;
        jan: number;
        feb: number;
        mar: number;
        apr: number;
        may: number;
        jun: number;
        jul: number;
        aug: number;
        sep: number;
        oct: number;
        nov: number;
        dec: number;
    } = {
        name: 'Jim Carrey',
        language: randomEnumLanguage(),
        country: randomEnumCountry(),
        gameName: makeRandomString(),
        bought: getRandomBoolean(),
        bankBalance: getRandomNumber(),
        rating: getRandomRating(),
        totalWinnings: getRandomNumber(),
        jan: getRandomNumber(),
        feb: getRandomNumber(),
        mar: getRandomNumber(),
        apr: getRandomNumber(),
        may: getRandomNumber(),
        jun: getRandomNumber(),
        jul: getRandomNumber(),
        aug: getRandomNumber(),
        sep: getRandomNumber(),
        oct: getRandomNumber(),
        nov: getRandomNumber(),
        dec: getRandomNumber()
    }

    return new PlayerModel(player);
}