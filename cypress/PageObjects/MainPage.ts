import { SidebarOptions } from "../Models/Enums/SidebarOptions";
import { locators } from "./MainPageLocators";

export class MainPage {
    visit() {
       cy.visit('https://www.ag-grid.com/example.php'); 
    }

    acceptCookies() {
        cy.get('#onetrust-accept-btn-handler').should('be.visible').click();
    }

    setNameFilter(value: string) {        
        cy.get('.ag-input-wrapper > .ag-floating-filter-input').should('be.visible').clear().type(value);
    }

    openSidebar() {
        cy.xpath("//div[contains(@class, 'ag-side-buttons')]//div[contains(@class, 'ag-side-button') and contains(@role, 'presentation')][1]").then($el => {            
            if(!$el.hasClass('ag-selected')){
                cy.get(':nth-child(1) > .ag-side-button-button').click();
            }            
        });
    }

    private resetSidebarOptions() {
        cy.get('#ag-36-input').clear();
        cy.get('#ag-35-input').check().uncheck();        
    }

    private selectNameOption() {
        cy.get('[aria-posinset="2"] > .ag-column-select-column > .ag-column-select-column-label').click();
    }

    private setSidebarDefaultOptions() {
        this.resetSidebarOptions();
        this.selectNameOption();
    }

    private setSidebarOption(option: SidebarOptions) {
        this.resetSidebarOptions();
        this.setSidebarDefaultOptions();        
        cy.get('#ag-36-input').clear().type(option);
        //cy.xpath("//div[contains(@class, 'ag-virtual-list-container')]//div[contains(@class, 'ag-virtual-list-item')]").should('have.length.gt', 5);
        //cy.xpath("//span[contains(@class, 'ag-column-select-column-label') and contains(text(), 'Language')]")
        cy.xpath(`//span[contains(@class, 'ag-column-select-column-label') and contains(text(), "${option}")]`).then( el => {
            el.get(0).click();
        })
        //#ag-979-input
        //cy.xpath("//span[contains(@class, 'ag-column-select-column-label') and contains(text(), 'Language')]").click();
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

    selectJanColumn() {
        this.setSidebarOption(SidebarOptions.Jan);
    }

    selectFebColumn() {
        this.setSidebarOption(SidebarOptions.Feb);
    }

    selectMarColumn() {
        this.setSidebarOption(SidebarOptions.Mar);        
    }

    selectAprColumn() {
        this.setSidebarOption(SidebarOptions.Apr);
    }

    selectMayColumn() {
        this.setSidebarOption(SidebarOptions.May);
    }

    selectJunColumn() {
        this.setSidebarOption(SidebarOptions.Jun);
    }

    selectJulColumn() {
        this.setSidebarOption(SidebarOptions.Jul);
    }

    selectAugColumn() {
        this.setSidebarOption(SidebarOptions.Aug);        
    }

    selectSepColumn() {
        this.setSidebarOption(SidebarOptions.Sep);
    }

    selectOctColumn() {
        this.setSidebarOption(SidebarOptions.Oct);
    }

    selectNovColumn() {
        this.setSidebarOption(SidebarOptions.Nov);
    }

    selectDecColumn() {
        this.setSidebarOption(SidebarOptions.Dec);
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
        cy.xpath(`${locators.language}//div[@class='ag-picker-field-icon']`).click();        
        cy.xpath(`//*[contains(text(), '${language}')]`).then( el => {                        
            el.get(0).click();
        });
    }

    scrollAndSetCountry(searchText, listItemLocator, listLocator) {
        
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
    
    changeJanAmount(amount) {
        this.selectJanColumn();
        cy.xpath(locators.jan).click().dblclick();
        cy.xpath(locators.rowInputLocator).type(amount).type('{enter}');
    }

    changeFebAmount(amount) {
        this.selectFebColumn();
        cy.xpath(locators.feb).click().dblclick();
        cy.xpath(locators.rowInputLocator).type(amount).type('{enter}');
    }

    changeMarAmount(amount) {
        this.selectMarColumn();
        cy.xpath(locators.mar).click().dblclick();
        cy.xpath(locators.rowInputLocator).type(amount).type('{enter}');
    }

    changeAprAmount(amount) {
        this.selectAprColumn();
        cy.xpath(locators.apr).click().dblclick();
        cy.xpath(locators.rowInputLocator).type(amount).type('{enter}');
    }

    changeMayAmount(amount) {
        this.selectMayColumn();
        cy.xpath(locators.may).click().dblclick();
        cy.xpath(locators.rowInputLocator).type(amount).type('{enter}');
    }

    changeJunAmount(amount) {
        this.selectJunColumn();
        cy.xpath(locators.jun).click().dblclick();
        cy.xpath(locators.rowInputLocator).type(amount).type('{enter}');
    }

    changeJulAmount(amount) {
        this.selectJulColumn();
        cy.xpath(locators.jul).click().dblclick();
        cy.xpath(locators.rowInputLocator).type(amount).type('{enter}');
    }

    changeAugAmount(amount) {
        this.selectAugColumn();
        cy.xpath(locators.aug).click().dblclick();
        cy.xpath(locators.rowInputLocator).type(amount).type('{enter}');
    }

    changeSepAmount(amount) {
        this.selectSepColumn();
        cy.xpath(locators.sep).click().dblclick();
        cy.xpath(locators.rowInputLocator).type(amount).type('{enter}');
    }

    changeOctAmount(amount) {
        this.selectOctColumn();
        cy.xpath(locators.oct).click().dblclick();
        cy.xpath(locators.rowInputLocator).type(amount).type('{enter}');
    }

    changeNovAmount(amount) {
        this.selectNovColumn();
        cy.xpath(locators.nov).click().dblclick();
        cy.xpath(locators.rowInputLocator).type(amount).type('{enter}');
    }

    changeDecAmount(amount) {
        this.selectDecColumn();
        cy.xpath(locators.dec).click().dblclick();
        cy.xpath(locators.rowInputLocator).type(amount).type('{enter}');
    }


}

