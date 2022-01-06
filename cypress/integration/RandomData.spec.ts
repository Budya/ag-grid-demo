import { MainPage } from '../PageObjects/MainPage';
import { PlayerModel } from '../Models/PlayerModel';
import { fakeUser } from '../testdata/fakeUser';
import { locators } from '../PageObjects/MainPageLocators';


describe('AG-grid test', function() {
    it('Random data setting & assertion', function() {
        const mainPage = new MainPage();
        const testData = fakeUser;
        const player = new PlayerModel(testData);

        const filterValue = player.name;        
        mainPage.visit();        
        cy.title().should('include', 'datagrid');

        mainPage.acceptCookies();
        mainPage.setNameFilter(filterValue);
        mainPage.openSidebar();

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
        cy.xpath(locators.bankBalance).should('include.text', player.bankBalance);

        mainPage.selectRatingColumn();
        cy.xpath(locators.rating).then( $el => {
            const rating = $el.find(locators.ratingImgs).length;
            assert.equal(rating, player.rating);
        });

        mainPage.selectWinningsColumn();
        cy.xpath(locators.totalWinnings).should('include.text', player.totalWinnings);

        mainPage.selectJanColumn();
        cy.xpath(locators.jan).should('include.text', player.jan);

        mainPage.selectFebColumn();
        cy.xpath(locators.feb).should('include.text', player.feb);

        mainPage.selectMarColumn();
        cy.xpath(locators.mar).should('include.text', player.mar);

        mainPage.selectAprColumn();
        cy.xpath(locators.apr).should('include.text', player.apr);

        mainPage.selectMayColumn();
        cy.xpath(locators.may).should('include.text', player.may);

        mainPage.selectJunColumn();
        cy.xpath(locators.jun).should('include.text', player.jun);

        mainPage.selectJulColumn();
        cy.xpath(locators.jul).should('include.text', player.jul);

        mainPage.selectAugColumn();
        cy.xpath(locators.aug).should('include.text', player.aug);

        mainPage.selectSepColumn();
        cy.xpath(locators.sep).should('include.text', player.sep);

        mainPage.selectOctColumn();
        cy.xpath(locators.oct).should('include.text', player.oct);

        mainPage.selectNovColumn();
        cy.xpath(locators.nov).should('include.text', player.nov);

        mainPage.selectDecColumn();
        cy.xpath(locators.dec).should('include.text', player.dec);
        
            
    });    
});