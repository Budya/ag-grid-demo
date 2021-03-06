export const locators = {
    language: "//div[@col-id='language' and not(@role='columnheader')]",
    country: "//div[@col-id='country' and not(@role='columnheader')]", 
    gameName: "//div[@col-id='game.name' and not(@role='columnheader')]",
    bought: "//div[@col-id='game.bought' and not(@role='columnheader')]//span[contains(@class,'ag-icon')]",
    bankBalance: "//div[@col-id='bankBalance' and not(@role='columnheader')]",
    rating: "//div[@col-id='rating' and not(@role='columnheader')]",
    ratingImgs: `//div[@col-id='rating' and not(@role='columnheader')]//img`,
    totalWinnings: "//div[@col-id='totalWinnings' and not(@role='columnheader')]",
    jan: "//div[@col-id='jan' and not(@role='columnheader')]",
    feb: "//div[@col-id='feb' and not(@role='columnheader')]",
    mar: "//div[@col-id='mar' and not(@role='columnheader')]",
    apr: "//div[@col-id='apr' and not(@role='columnheader')]",
    may: "//div[@col-id='may' and not(@role='columnheader')]",
    jun: "//div[@col-id='jun' and not(@role='columnheader')]",
    jul: "//div[@col-id='jul' and not(@role='columnheader')]",
    aug: "//div[@col-id='aug' and not(@role='columnheader')]",
    sep: "//div[@col-id='sep' and not(@role='columnheader')]",
    oct: "//div[@col-id='oct' and not(@role='columnheader')]",
    nov: "//div[@col-id='nov' and not(@role='columnheader')]",
    dec: "//div[@col-id='dec' and not(@role='columnheader')]",

    // Locators for edit
    nameEditLocator: "//div[@col-id='name' and not(@role='columnheader')]//span[@class='ag-cell-value'][1]",    
    nameInputLocator: "//div[@col-id='name' and not(@role='columnheader')]//input",
    countryListItemLocator: "//div[contains(@class, 'ag-virtual-list-item')]//img//parent::span",
    countryListLocator: "//*[@id='example-wrapper']/div[3]/div/div/div[2]/div",
    rowInputLocator: "//div[contains(@class, 'ag-cell-edit-wrapper')]//input",
    

}