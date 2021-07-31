// I(1),  V(5), X(10),  L(50),  C(100),  D(500), M(100)

// Númerico para romano
let numbersInRoman = [
    { number: 1000, roman: 'M'}, 
    { number: 900, roman: 'CM'},
    { number: 500, roman: 'D'},
    { number: 400, roman: 'CD'},
    { number: 100, roman: 'C'},
    { number: 90, roman: 'XC'},
    { number: 50, roman: 'L'},
    { number: 40, roman: 'XL'},
    { number: 10, roman: 'X'},
    { number: 9, roman: 'IX'},
    { number: 5, roman: 'V'},
    { number: 4, roman: 'IV'},
    { number: 1, roman: 'I'}
];

// Conversão de arábico para romano

const arabicValue = document.querySelector('#arabicInput');
const arabicConvertButton = document.querySelector('.arabic-convert-button');
const arabicResetButton = document.querySelector('.arabic-reset-button');
const arabicResult = document.querySelector('.arabic-result');

function converToRoman(arabicNumber) {
    let romanLetter = '';
    let number = arabicNumber;
    for (let i = 0; i < numbersInRoman.length; i++) { //fazer um loop entre as arrays do Object
        if (numbersInRoman[i].number <= number) {
            number = number - numbersInRoman[i].number;
            romanLetter = romanLetter + numbersInRoman[i].roman;
            i--;
        }
    }
    return romanLetter;
}

arabicConvertButton.addEventListener('click', function () {
    if (arabicValue.value > 3999){
        arabicValue.value = "";
        arabicResult.textContent = "";
        window.alert('Por favor, insira um número entre 1 e 3999')
    } else {
        arabicResult.textContent = converToRoman(arabicValue.value);
    }
});;

arabicResetButton.addEventListener('click', function () {
    arabicValue.value = "";
    arabicResult.textContent = "";
});;



