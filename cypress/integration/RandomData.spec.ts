import { MainPage } from '../PageObjects/MainPage';
import { generatePlayer } from '../utils/PlayerDataGenerator';
import { locators } from '../PageObjects/MainPageLocators';
import { numberToCurrency } from '../utils/CurrencyFormatter';


describe('AG-grid test', function() {
    it('Random data setting & assertion', function() {
        const mainPage = new MainPage();        
        const player = generatePlayer();
        const oldName = "Tony Smith"               
        mainPage.visit();        
        cy.title().should('include', 'datagrid');

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
        mainPage.changeJanAmount(player.jan);
        mainPage.changeFebAmount(player.feb);
        mainPage.changeMarAmount(player.mar);
        mainPage.changeAprAmount(player.apr);
        mainPage.changeMayAmount(player.may);
        mainPage.changeJunAmount(player.jun);
        mainPage.changeJulAmount(player.jul);
        mainPage.changeAugAmount(player.aug);
        mainPage.changeSepAmount(player.sep);
        mainPage.changeOctAmount(player.oct);
        mainPage.changeNovAmount(player.nov);
        mainPage.changeDecAmount(player.dec);

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
// TODO: optimize month method

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

        mainPage.selectJanColumn();
        cy.xpath(locators.jan).should('include.text', numberToCurrency.format(player.jan));

        mainPage.selectFebColumn();
        cy.xpath(locators.feb).should('include.text', numberToCurrency.format(player.feb));

        mainPage.selectMarColumn();
        cy.xpath(locators.mar).should('include.text', numberToCurrency.format(player.mar));

        mainPage.selectAprColumn();
        cy.xpath(locators.apr).should('include.text', numberToCurrency.format(player.apr));

        mainPage.selectMayColumn();
        cy.xpath(locators.may).should('include.text', numberToCurrency.format(player.may));

        mainPage.selectJunColumn();
        cy.xpath(locators.jun).should('include.text', numberToCurrency.format(player.jun));

        mainPage.selectJulColumn();
        cy.xpath(locators.jul).should('include.text', numberToCurrency.format(player.jul));

        mainPage.selectAugColumn();
        cy.xpath(locators.aug).should('include.text', numberToCurrency.format(player.aug));

        mainPage.selectSepColumn();
        cy.xpath(locators.sep).should('include.text', numberToCurrency.format(player.sep));

        mainPage.selectOctColumn();
        cy.xpath(locators.oct).should('include.text', numberToCurrency.format(player.oct));

        mainPage.selectNovColumn();
        cy.xpath(locators.nov).should('include.text', numberToCurrency.format(player.nov));

        mainPage.selectDecColumn();
        cy.xpath(locators.dec).should('include.text', numberToCurrency.format(player.dec));            
    });    
});