import { Languages } from '../Models/Enums/Languages';
import { Countries } from '../Models/Enums/Countries';
import cypress = require('cypress');


export class PlayerModel {    
    
    public static getName(): string {
        return 
    }

    public static setName(value: string) {
        
    }    

    public static getLanguage() {
        //language locator //div[@col-id='language' and not(@role='columnheader')]
        //let language: string;
        cy.xpath("//div[@col-id='language' and not(@role='columnheader')]").then($el => {
            const lang: string = $el.text();
            return lang.trim();
        });
        //return language;       
    }

    public static getCountry(): string {
        let countryName: string;
        cy.xpath("//img[@class='flag']//parent::span").then(($el) => {
            const text = $el.text();    
            countryName = text.trim();
        });
        return countryName;        
    }
    
    public static setCountry(value: Countries) {
        cy.get('.countryCell').dblclick();
        cy.get('.ag-rich-select-row').then(($el) => {
            const text = $el.text();
            if(!text.includes(value)) {
                cy.get('.ag-rich-select-row').last().scrollIntoView();
                cy.wait(100);
                cy.get('.ag-rich-select-row').contains(value).should('be.visible').click();                
            } else {
                cy.get('.ag-rich-select-row').contains(value).should('be.visible').click();
            }            
        });
    }
    // country: Countries;
    // gameName: string;
    // bought: boolean;
    // bankBalance: number;
    // rating: number; // can create custom type (5 is biggest mark)
    // totalWinnings: number;
    // jan: number;
    // feb: number;
    // mar: number;
    // apr: number;
    // may: number;
    // jun: number;
    // jul: number;
    // aug: number;
    // sep: number;
    // oct: number;
    // nov: number;
    // dec: number;
}