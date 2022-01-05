import { MainPage } from '../PageObjects/MainPage';
import { PlayerModel } from '../Models/PlayerModel';
import { PlayerModelFake } from '../Models/PlayerModelFake';
import { Countries } from '../Models/Enums/Countries';
import { Languages } from '../Models/Enums/Languages';
import { SidebarOptions } from '../Models/Enums/SidebarOptions';
import { fakeUser } from '../testdata/fakeUser';
import { locators } from '../PageObjects/MainPageLocators'


describe('AG-grid selects', function() {
    it('Select language test', function() {
        const mainPage = new MainPage();
        const testData = fakeUser;
        const player = new PlayerModelFake(testData);

        const filterValue = player.name;
        mainPage.visit();        
        cy.title().should('include', 'datagrid');

        mainPage.acceptCookies();
        mainPage.setNameFilter(filterValue);
        mainPage.openSidebar();
        mainPage.selectLanguageColumn();
        cy.xpath(locators.language).should('include.text', player.language);        

        mainPage.selectBoughtColumn();
        cy.xpath(locators.bought).then( $el => {
            const val = $el.attr('title');            
            assert.equal(val, player.bought);
        });
        
            
    });

    // it('Select country test', function() {
    //     const mainPage = new MainPage();
    //     const filterValue = 'tony smith';
    //     const player = PlayerModel;
    //     mainPage.visit();        
    //     cy.title().should('include', 'datagrid');

    //     mainPage.acceptCookies();
    //     mainPage.setNameFilter(filterValue);
    //     mainPage.selectCountryColumn(); 
    //     player.setCountry(Countries.Luxembourg);
    //     //const countryName = player.getCountry();
    //     cy.xpath("//img[@class='flag']//parent::span").should('contain.text', Countries.Luxembourg);        
    // });
});