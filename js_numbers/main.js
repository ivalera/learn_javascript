// возвращает случайное число 
console.log(Math.random(1, 100));
// возвращает минимальное число
console.log(Math.min(6, 4));
// возвращает максимальное число
console.log(Math.max(100, 99));
// возвращает число возведенное в степень
console.log(Math.pow(2, 8));

// Округление

// округление в меньшую сторону
Math.floor(2.3); // 2;
Math.floor(2.9); // 2;

// округление в большую сторону
Math.ceil(1.2); // 2
Math.ceil(0.1); // 1

// округление до ближайшего числа
Math.round(2.4); // 2
Math.round(2.5); // 3

// “отбросить” дробную часть ничего не округляя
Math.trunc(5.4) // 5
Math.trunc(9.9) // 9
Math.trunc(-1.1) // -1

// Особенности 
console.log(0.1 + 0.2 == 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(9999999999999999); // 10000000000000000

// toFixed
// округляет число до n знаков после запятой и возвращает строковое представление результата.
let num1 = 12.34;
console.log( num1.toFixed(1) ); // "12.3"

// Округляет значение до ближайшего числа, как в большую, так и в меньшую сторону
let num2 = 12.36;
console.log( num2.toFixed(1) ); // "12.4"

// результатом toFixed является строка 
let num3 = 12.34;
// "12.34000", добавлены нули, чтобы получить 5 знаков после запятой
console.log(num3.toFixed(5)); 
console.log(typeof(num3.toFixed(5))); 
console.log(typeof(num3));

let numToNumber = 14.56;
console.log(+numToNumber.toFixed(5));
console.log(typeof(numToNumber));

//isFinite и isNaN
console.log(isNaN(NaN)); // true
console.log(isNaN("str")); // true
// NaN уникально тем, что оно не является равным ничему другому, даже самому себе
console.log( NaN === NaN ); // false

// isFinite(value) преобразует аргумент в число и возвращает true, если оно является обычным числом, т.е. не NaN/Infinity/-Infinity
console.log(isFinite("15")); // true
console.log(isFinite("str")); // false, потому что специальное значение: NaN
console.log(isFinite(Infinity)); // false, потому что специальное значение: Infinity

// Иногда isFinite используется для проверки, содержится ли в строке число:
// let num = +prompt("Enter a number", '');
// вернёт true всегда, кроме ситуаций, когда аргумент - Infinity/-Infinity или не число
// console.log(isFinite(num) );

console.log(isFinite(""));

// Number.isNaN и Number.isFinite
// не преобразуют аргумент в число, а наоборот – первым делом проверяют, является ли аргумент числом (принадлежит ли он к типу number

// Number.isNaN(value) возвращает true только в том случае, если аргумент принадлежит к типу number и является NaN. Во всех остальных случаях возвращает false.

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("str" / 2)); // true

// Обратите внимание на разный результат:
console.log(Number.isNaN("str")); // false, так как "str" является строкой, а не числом
console.log(isNaN("str")); // true, так как isNaN сначала преобразует строку "str" в число и в результате преобразования получает NaN

// Number.isFinite(value) возвращает true только в том случае, если аргумент принадлежит к типу number и не является NaN/Infinity/-Infinity. Во всех остальных случаях возвращает false.

console.log(Number.isFinite(123)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(2 / 0)); // false

// Обратите внимание на разный результат:
console.log(Number.isFinite("123")); // false, так как "123" является строкой, а не числом
console.log(isFinite("123")); // true, так как isFinite сначала преобразует строку "123" в число 123

// parseInt и parseFloat
// Для явного преобразования к числу можно использовать + или Number(). Если строка не является в точности числом, то результат будет NaN:

console.log( +"100px" ); // NaN

// Функция parseInt возвращает целое число, а parseFloatвозвращает число с плавающей точкой:
console.log( parseInt('100px') ); // 100
console.log( parseFloat('12.5em') ); // 12.5

console.log( parseInt('12.3') ); // 12, вернётся только целая часть
console.log( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке

// Функции parseInt/parseFloat вернут NaN, если не смогли прочитать ни одну цифру:
console.log( parseInt('a123') ); // NaN, на первом символе происходит остановка чтения

// Способы записи числа
// e добавляетс к числу и заменяет указанное количество нулей
let billion = 1e9;  // 1 миллиард, буквально: 1 и 9 нулей
console.log( 7.3e9 );  // 7.3 миллиардов (7,300,000,000)