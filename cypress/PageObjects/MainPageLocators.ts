export const locators = {
    // Columns locators
    language: "//div[@col-id='language' and not(@role='columnheader')]",
    country: "//div[@col-id='country' and not(@role='columnheader')]", 
    gameName: "//div[@col-id='game.name' and not(@role='columnheader')]",
    bought: "//div[@col-id='game.bought' and not(@role='columnheader')]//span[contains(@class,'ag-icon')]",
    bankBalance: "//div[@col-id='bankBalance' and not(@role='columnheader')]",
    rating: "//div[@col-id='rating' and not(@role='columnheader')]",
    ratingImgs: `//div[@col-id='rating' and not(@role='columnheader')]//img`,
    totalWinnings: "//div[@col-id='totalWinnings' and not(@role='columnheader')]",
    monthCol: (month: string) => `//div[@col-id='${month.toLowerCase()}' and not(@role='columnheader')]`,

    // Locators for edit
    nameEditLocator: "//div[@col-id='name' and not(@role='columnheader')]//span[@class='ag-cell-value'][1]",    
    nameInputLocator: "//div[@col-id='name' and not(@role='columnheader')]//input",
    countryListItemLocator: "//div[contains(@class, 'ag-virtual-list-item')]//img//parent::span",
    countryListLocator: "//*[@id='example-wrapper']/div[3]/div/div/div[2]/div",
    rowInputLocator: "//div[contains(@class, 'ag-cell-edit-wrapper')]//input",

    // Other locators
    acceptCookies: "#onetrust-accept-btn-handler",
    nameFilter: ".ag-input-wrapper > .ag-floating-filter-input",
    sideButtonXpath: "//div[contains(@class, 'ag-side-buttons')]//div[contains(@class, 'ag-side-button') and contains(@role, 'presentation')][1]",
    sideButtonCSS: ":nth-child(1) > .ag-side-button-button",
    sideBarFilterChBx: "#ag-35-input",
    sideBarFilterInput: "#ag-36-input",
    nameFilterSpan: `[aria-posinset="2"] > .ag-column-select-column > .ag-column-select-column-label`,
    sideBarOption: (option: string) => `//span[contains(@class, 'ag-column-select-column-label') and contains(text(), "${option}")]`,
    languageListItem: (language: string) => `//*[contains(text(), '${language}')]`,
    languageDropDownPicker: () => `${locators.language}//div[@class='ag-picker-field-icon']`





    

}