const numberToCurrency = new Intl.NumberFormat('en-US' , {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
});

export  {
   numberToCurrency 
}

//numberToCurrency.format(1232132)