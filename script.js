//Roman numeral converter
//takes in a number from user and converts to roman numeral

// I -1
// IV - 4
// V -5
// IX- 9
// X- 10
// XL-40
// L-50
// XC - 90
// C-100
// CD -400
// D-500
// CM - 900
// M- 1000

function convertToRoman(num){
const numerals = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
}
//initialize an empty string to build the final roman numeral result
let romanized = "";

//object -> loop to go through keys of object
//conver the object keys (which are strings) into an array then reverse it
//this ensures we start with the largest number
const numeralKeys = Object.keys(numerals).reverse().map(Number)

// iterate over each key in the numeralKeys array
numeralKeys.forEach(key =>{
    //while the current roman numeral value (key) can be subtracted from num..
    while(key <= num){
        //append the corresponding roman numeral symbol to the result string
        romanized += numerals[key]
        //subtract the current key from num, reducing it until the numeral can no longer be used
        num -= key
    }
})
return romanized
}
console.log(convertToRoman)