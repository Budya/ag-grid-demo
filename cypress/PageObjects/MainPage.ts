import { SidebarOptions } from "../Models/Enums/SidebarOptions";
import { locators } from "../PageObjects/MainPageLocators"
export class MainPage {
    visit() {
       cy.visit('https://www.ag-grid.com/example.php'); 
    }

    acceptCookies() {
        cy.get('#onetrust-accept-btn-handler').should('be.visible').click();
    }

    setNameFilter(value: string) {        
        cy.get('.ag-input-wrapper > .ag-floating-filter-input').should('be.visible').type(value);
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

    private setSidebarOption(option: SidebarOptions | string) {
        this.resetSidebarOptions();
        this.setSidebarDefaultOptions();        
        cy.get('#ag-36-input').clear().type(option);
        cy.xpath(`//span[contains(@class, 'ag-column-select-column-label') and contains(text(), "${option}")]`).click();        
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
}

