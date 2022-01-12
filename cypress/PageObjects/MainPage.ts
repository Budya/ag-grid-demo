import { SidebarOptions, SidebarOptionsMonth } from "../Models/Enums/SidebarOptions";
import { locators } from "./MainPageLocators";

export class MainPage {
    visit() {
       cy.visit('https://www.ag-grid.com/example.php');
       cy.title().should('include', 'datagrid'); 
    }

    acceptCookies() {
        cy.get(locators.acceptCookies).should('be.visible').click();
    }

    setNameFilter(value: string) {        
        cy.get(locators.nameFilter).should('be.visible').clear().type(value);
    }

    openSidebar() {
        cy.xpath(locators.sideButtonXpath).then($el => {            
            if(!$el.hasClass('ag-selected')){
                cy.get(locators.sideButtonCSS).click();
            }            
        });
    }

    private resetSidebarOptions() {
        cy.get(locators.sideBarFilterInput).clear();
        cy.get(locators.sideBarFilterChBx).check().uncheck();        
    }

    private selectNameOption() {
        cy.get(locators.nameFilterSpan).click();
    }

    private setSidebarDefaultOptions() {
        this.resetSidebarOptions();
        this.selectNameOption();
    }

    private setSidebarOption(option: SidebarOptions | SidebarOptionsMonth) {
        this.resetSidebarOptions();
        this.setSidebarDefaultOptions();        
        cy.get(locators.sideBarFilterInput).clear().type(option);        
        cy.xpath(locators.sideBarOption(option)).then( el => {
            el.get(0).click();
        });        
    }

    //#region Sidebar selection methods
    selectNameColumn() {        
        this.setSidebarDefaultOptions();
    }
    
    selectLanguageColumn() {        
        this.setSidebarOption(SidebarOptions.Language);
    }

    selectCountryColumn() {        
        this.setSidebarOption(SidebarOptions.Country);
    }

    selectGameNameColumn() {
        this.setSidebarOption(SidebarOptions.GameName);
    }

    selectBoughtColumn() {
        this.setSidebarOption(SidebarOptions.Bought);      
    }

    selectBankBalance() {
        this.setSidebarOption(SidebarOptions.BankBalance);
    }

    selectRatingColumn() {
        this.setSidebarOption(SidebarOptions.Rating);
    }

    selectWinningsColumn() {
        this.setSidebarOption(SidebarOptions.TotalWinnings);
    }

    selectMonthColumn(month: SidebarOptionsMonth) {
        this.setSidebarOption(month);
    }
//#endregion
    
    changeName(oldName: string, newName: string) {
        this.selectNameColumn();
        this.setNameFilter(oldName);
        cy.wait(500)
        cy.xpath(locators.nameEditLocator).dblclick();
        cy.xpath(locators.nameInputLocator).clear().type(newName).type('{enter}'); 
    }

    changeLanguage(language: string) {        
        this.selectLanguageColumn();
        cy.xpath(locators.language).click().dblclick();
        cy.xpath(locators.languageDropDownPicker()).click();        
        cy.xpath(locators.languageListItem(language)).then( el => {                        
            el.get(0).click();
        });
    }

    private scrollAndSetCountry(searchText, listItemLocator, listLocator) {
        
        cy.xpath(listItemLocator).then( el => {
            if(!el.text().includes(searchText)) {
                cy.xpath(listLocator).scrollTo('bottom');
                cy.wait(400);
                this.scrollAndSetCountry(searchText, listItemLocator, listLocator);
            } else {
               cy.xpath(listItemLocator).contains(searchText).click();
            }
        });
        
    }

    changeCountry(country: string) {
        this.selectCountryColumn();
        cy.xpath(locators.country).click().dblclick();
        this.scrollAndSetCountry(country, locators.countryListItemLocator, locators.countryListLocator);        
    }

    changeGameName(gameName: string) {
        this.selectGameNameColumn();
        cy.xpath(locators.gameName).click().dblclick();
        cy.xpath(locators.rowInputLocator).type(gameName).type('{enter}');
    }

    changeBoughtStatus(boughtStatus: string) {
        this.selectBoughtColumn();
        cy.xpath(locators.bought).click().dblclick();        
        cy.xpath(locators.rowInputLocator).type(boughtStatus).type('{enter}');
    }

    changeBankBalance(bankBalance) {
        this.selectBankBalance();
        cy.xpath(locators.bankBalance).click().dblclick();        
        cy.xpath(locators.rowInputLocator).type(bankBalance).type('{enter}');
    }

    changeRating(rating) {
        this.selectRatingColumn();
        cy.xpath(locators.rating).click().dblclick();        
        cy.xpath(locators.rowInputLocator).type(rating).type('{enter}');
    }

    changeTotalWinnings(totalWinnings) {
        this.selectWinningsColumn();
        cy.xpath(locators.totalWinnings).click().dblclick();
        cy.xpath(locators.rowInputLocator).type(totalWinnings).type('{enter}');
    }
    
    changeMonthAmount(month, amount) {        
        this.selectMonthColumn(month)
        cy.xpath(locators.monthCol(month)).click().dblclick();
        cy.xpath(locators.rowInputLocator).type(amount).type('{enter}');
    }
}

