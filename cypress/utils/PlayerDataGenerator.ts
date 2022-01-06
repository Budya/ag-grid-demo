import { randomEnumCountry, randomEnumLanguage } from '../utils/randoms/RandomEnum';
import { makeRandomString } from '../utils/randoms/RandomString';
import { getRandomNumber } from '../utils/randoms/RandomNumber';
import { PlayerModel } from '../Models/PlayerModel';


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
    };

    player.name = 'Jim Carrey';
    player.language = randomEnumLanguage();
    player.country = randomEnumCountry();
    player.gameName = makeRandomString();
    player.bought = true;
    player.bankBalance = getRandomNumber();
    player.rating = 5;
    player.totalWinnings = getRandomNumber();
    player.jan = getRandomNumber();
    player.feb = getRandomNumber();
    player.mar = getRandomNumber();
    player.apr = getRandomNumber();
    player.may = getRandomNumber();
    player.jun = getRandomNumber();
    player.jul = getRandomNumber();
    player.aug = getRandomNumber();
    player.sep = getRandomNumber();
    player.oct = getRandomNumber();
    player.nov = getRandomNumber();
    player.dec = getRandomNumber();

    return new PlayerModel(player);
}