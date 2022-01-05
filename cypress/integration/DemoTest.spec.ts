import { MainPage } from '../PageObjects/MainPage';

describe('AG grid main page', function() {
    it('Verify title of the page', function() {
        const mainPage = new MainPage();
        mainPage.visit();
        
        cy.title().should('include', 'datagrid');
        mainPage.acceptCookies();
        
    });
});