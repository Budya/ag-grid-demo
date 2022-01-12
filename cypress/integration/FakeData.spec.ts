import { MainPage } from '../PageObjects/MainPage';
import { PlayerModel } from '../Models/PlayerModel';
import { fakeUser } from '../testdata/fakeUser';
import { locators } from '../PageObjects/MainPageLocators';
import { numberToCurrency } from '../utils/CurrencyFormatter';
import { SidebarOptionsMonth } from '../Models/Enums/SidebarOptions';


describe('AG-grid test', function() {
    it('Facke data assertion', function() {
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