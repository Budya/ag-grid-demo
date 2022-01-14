import * as fs from 'fs'

let text = fs.readFileSync('/home/ITRANSITION.CORP/d.budinsky/Desktop/1.json','utf-8');
console.log(text)
let jsn = JSON.parse(text);
console.log(jsn)