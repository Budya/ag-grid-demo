import { Countries } from "../../Models/Enums/Countries";
import { Languages } from "../../Models/Enums/Languages";


const randomEnumValue = (enumeration) => {
    const values = Object.keys(enumeration);
    const enumKey = values[Math.floor(Math.random() * values.length)];
    return enumeration[enumKey];
  }

function randomEnumLanguage(): string {
    return randomEnumValue(Languages);
} 

function randomEnumCountry(): string {
    return randomEnumValue(Countries);
}

export {
    randomEnumCountry,
    randomEnumLanguage
}