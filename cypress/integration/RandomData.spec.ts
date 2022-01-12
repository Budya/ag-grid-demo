import { MainPage } from '../PageObjects/MainPage';
import { generatePlayer } from '../utils/PlayerDataGenerator';
import { locators } from '../PageObjects/MainPageLocators';
import { numberToCurrency } from '../utils/CurrencyFormatter';
import { SidebarOptionsMonth } from '../Models/Enums/SidebarOptions';


describe('AG-grid test', function() {
    it('Random data setting & assertion', function() {
        const mainPage = new MainPage();        
        const player = generatePlayer();
        const oldName = "Tony Smith"               
        mainPage.visit();

        mainPage.acceptCookies();        
        mainPage.openSidebar();

        mainPage.changeName(oldName, player.name);
        mainPage.setNameFilter(player.name);
        
        mainPage.changeLanguage(player.language);
        mainPage.changeCountry(player.country);
        mainPage.changeGameName(player.gameName);
        mainPage.changeBoughtStatus(player.bought);
        mainPage.changeBankBalance(player.bankBalance);
        mainPage.changeRating(player.rating);
        mainPage.changeTotalWinnings(player.totalWinnings);

        for(let month of Object.keys(SidebarOptionsMonth)) {
            mainPage.changeMonthAmount(SidebarOptionsMonth[month], player.getMonthAmount(SidebarOptionsMonth[month].toLowerCase()))
        };
        
        /// Assertion
        mainPage.selectLanguageColumn();
        cy.xpath(locators.language).should('include.text', player.language);
        
        mainPage.selectCountryColumn();
        cy.xpath(locators.country).should('include.text', player.country);

        mainPage.selectGameNameColumn();
        cy.xpath(locators.gameName).should('include.text', player.gameName);

        mainPage.selectBoughtColumn();
        cy.xpath(locators.bought).then( $el => {
            const val = $el.attr('title');            
            assert.equal(val, player.bought);
        });

        mainPage.selectBankBalance();
        cy.xpath(locators.bankBalance).should('include.text', numberToCurrency.format(player.bankBalance));

        mainPage.selectRatingColumn();
        cy.xpath(locators.ratingImgs).then( $el => {            
            const rating = $el.length;
            assert.equal(rating, player.rating);
        });

        mainPage.selectWinningsColumn();
        cy.xpath(locators.totalWinnings).should('include.text', numberToCurrency.format(player.totalWinnings));

        mainPage.selectGameNameColumn();
        cy.xpath(locators.gameName).should('include.text', player.gameName);

        mainPage.selectBoughtColumn();
        cy.xpath(locators.bought).then( $el => {
            const val = $el.attr('title');            
            assert.equal(val, player.bought);
        });

        mainPage.selectBankBalance();
        cy.xpath(locators.bankBalance).should('include.text', numberToCurrency.format(player.bankBalance));

        mainPage.selectRatingColumn();
        cy.xpath(locators.ratingImgs).then( $el => {            
            const rating = $el.length;
            assert.equal(rating, player.rating);
        });

        mainPage.selectWinningsColumn();
        cy.xpath(locators.totalWinnings).should('include.text', numberToCurrency.format(player.totalWinnings));

        for(let month of Object.keys(SidebarOptionsMonth)) {
            mainPage.selectMonthColumn(SidebarOptionsMonth[month]);
            cy.xpath(locators.monthCol(month)).should('include.text', numberToCurrency.format(player.getMonthAmount(month.toLowerCase())));
        };
    });    
});