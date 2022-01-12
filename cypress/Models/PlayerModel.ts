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
    
    
    public get bankBalance(): number {
        return this._bankBalance
    }

    public get rating(): number {
        return this._rating
    }

    public get totalWinnings(): number {
        return this._totalWinnings;        
    }

    public get jan(): number {
        return this._jan;        
    }

    public get feb(): number {
        return this._feb;        
    }

    public get mar(): number {
        return this._mar;
    }

    public get apr(): number {
        return this._apr;
    }

    public get may(): number {
        return this._may;
    }

    public get jun(): number {
        return this._jun;    
    }

    public get jul(): number {
        return this._jul;
    }

    public get aug(): number {
        return this._aug;
    }

    public get sep(): number {
        return this._sep;
    }

    public get oct(): number {
        return this._oct;
    }

    public get nov(): number {
        return this._nov;
    }

    public get dec(): number {
        return this._dec;
    }
    
    public getMonthAmount(month) {
        switch (month) {
            case "jan":
                return this._jan;
                break;
            case "feb":
                return this._feb;
                break;
            case "mar":
                return this._mar;
                break;
            case "apr":
                return this._apr;
                break;
            case "may":
                return this._may;
                break;
            case "jun":
                return this._jun;
                break;
            case "jul":
                return this._jul;
                break;
            case "aug":
                return this._aug;
                break;
            case "sep":
                return this._sep;
                break;
            case "oct":
                return this._oct;
                break;
            case "nov":
                return this._nov;
                break;
            case "dec":
                return this._dec;
                break;
        }
    }
}