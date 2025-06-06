const.js : 
// Function buttons 
export const display = document.getElementById("display") 
export const clearBtn = document.querySelector(".clear-btn"); 
export const changeBtn = document.querySelector(".change-btn"); 
export const porcentageBtn = document.querySelector(".porcentage-btn"); 
// Operator buttons 
export const divisorBtn = document.querySelector(".divisor-btn"); 
export const multipleBtn = document.querySelector(".multiple-btn"); 
export const substractionBtn = 
document.querySelector(".substraction-btn"); 
export const additionBtn = document.querySelector(".addition-btn"); 
export const equalBtn = document.querySelector(".equal-btn"); 
export const commaBtn = document.querySelector(".comma-btn"); 
functions.js: 
export function comprobation(){ 
let content = display.value; 
let size = content.length; 
let lastElement = content[size-1]; 
if(!((lastElement==="-") || (lastElement==="*") || (lastElement==="+") || 
(lastElement==="/"))) return true; 
return false; 
} 
main.js: 
import { display, clearBtn, changeBtn, porcentageBtn, divisorBtn, 
multipleBtn, substractionBtn, additionBtn, equalBtn, commaBtn } from 
"./consts.js"; 
import { comprobation } from "./functions.js"; 
// Checking that there is only one comma in each number 
let commaBand = false; 
clearBtn.addEventListener("click",()=>{ 
display.value=""; 
commaBand = false; 
}) 
changeBtn.addEventListener("click",()=>{ 
let content = display.value; 
let size = content.length; 
let lastElement = content[size-1]; 
if(content === "") display.value = "-0"; 
else if(comprobation() && lastElement !== "."){ 
let number = eval(content); 
number = number *- 1; 
let wordStr = number.toString(); 
display.value = wordStr; 
} 
}) 
porcentageBtn.addEventListener("click",()=>{ 
let content = display.value; 
let size = content.length; 
let lastElement = content[size-1]; 
if(comprobation() && lastElement !== "." && content !== "" && content !== 
"0") { 
let number = eval(content); 
display.value = number / 100; 
} 
}) 
divisorBtn.addEventListener("click",()=>{ 
if(comprobation() && display.value != ""){ 
display.value += "/"; 
commaBand = false; 
} 
}) 
multipleBtn.addEventListener("click",()=>{ 
if(comprobation() && display.value != ""){ 
display.value += "*"; 
commaBand = false; 
} 
}) 
substractionBtn.addEventListener("click",()=>{ 
if(comprobation()){ 
display.value += "-"; 
commaBand = false; 
} 
}) 
additionBtn.addEventListener("click",()=>{ 
if(comprobation() && display.value != ""){ 
display.value += "+"; 
commaBand = false; 
} 
}) 
equalBtn.addEventListener("click",()=>{ 
display.value = eval(display.value); 
}) 
commaBtn.addEventListener("click",()=>{ 
let size = display.value.length; 
let lastElement = display.value[size-1]; 
if(comprobation() && (lastElement !== ".") && !commaBand){ 
if(display.value === "") display.value += "0"; 
display.value += "."; 
commaBand = true; 
} 
}) 
