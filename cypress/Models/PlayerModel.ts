import { numberToCurrency } from '../utils/CurrencyFormatter';

export class PlayerModel {
    private _name: string
    private _language: string   
    private _country: string 
    private _gameName: string
    private _bought: boolean
    private _bankBalance: number
    private _rating: number
    private _totalWinnings: number
    private _jan: number
    private _feb: number
    private _mar: number
    private _apr: number
    private _may: number
    private _jun: number
    private _jul: number
    private _aug: number
    private _sep: number
    private _oct: number
    private _nov: number
    private _dec: number

    constructor(object) {
        this._name = object.name,
        this._language = object.language,
        this._country = object.country,
        this._gameName = object.gameName,
        this._bought = object.bought,
        this._bankBalance = object.bankBalance,
        this._rating = object.rating,
        this._totalWinnings = object.totalWinnings,
        this._jan = object.jan,
        this._feb = object.feb,
        this._mar = object.mar,
        this._apr = object.apr,
        this._may = object.may,
        this._jun = object.jun,
        this._jul = object.jul,
        this._aug = object.aug,
        this._sep = object.sep,
        this._oct = object.oct,
        this._nov = object.nov,
        this._dec = object.dec
    }

    public get name(): string {
        return this._name
    }

    public get language(): string {
        return this._language
    }

    public get country(): string {
        return this._country
    }

    public get gameName(): string {
        return this._gameName
    }

    public get bought(): string {
        return String(this._bought) 
    }
    
    
    public get bankBalance(): string {
        return numberToCurrency.format(this._bankBalance);
    }

    public get rating(): number {
        return this._rating
    }

    public get totalWinnings(): string {
        return numberToCurrency.format(this._totalWinnings);
    }

    public get jan(): string {
        return numberToCurrency.format(this._jan);
    }

    public get feb(): string {
        return numberToCurrency.format(this._feb);
    }

    public get mar(): string {
        return numberToCurrency.format(this._mar);
    }

    public get apr(): string {
        return numberToCurrency.format(this._apr);
    }

    public get may(): string {
        return numberToCurrency.format(this._may);
    }

    public get jun(): string {
        return numberToCurrency.format(this._jun);    
    }

    public get jul(): string {
        return numberToCurrency.format(this._jul);
    }

    public get aug(): string {
        return numberToCurrency.format(this._aug);
    }

    public get sep(): string {
        return numberToCurrency.format(this._sep);
    }

    public get oct(): string {
        return numberToCurrency.format(this._oct);
    }

    public get nov(): string {
        return numberToCurrency.format(this._nov);
    }

    public get dec(): string {
        return numberToCurrency.format(this._dec);
    }

    
}