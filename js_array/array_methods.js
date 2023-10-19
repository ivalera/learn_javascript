const users = ['Ivan', 'Petr', 'Anna'];

users.forEach(user => {
    console.log(user);
});

// task one
const numbers = [4, 10, 4, 5, 1, 3, 44, 109];
numbers.forEach(number => {
    console.log(`Number is ${number}`);
});
console.log("\n");

// find 
const numbers2 = [1, 11, -2, 3, -10, 4];
const firstNegativeNumber = numbers2.find(number => number < 0);
console.log('find:', firstNegativeNumber); // -2

const users2 = [
    { name: 'Ivan', age: 18 },
    { name: 'Petr', age: 25 },
    { name: 'Anna', age: 20 }
  ];
  
const user = users2.find(user => user.name === 'Petr');
console.log('find:', user);

// findIndex ищет первый элемент
const numbers3 = [1, 11, -2, 3, -10, 4];
const firstNegativeNumberIndex = numbers3.findIndex(number => number < 0);
console.log('findIndex:',firstNegativeNumberIndex); 

// indexOf возвращает позицию первого вхождения элемента
const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const lionIndex = animals.indexOf('tiger');
console.log('indexOf:', lionIndex);

// Используя начальную позицию, можем найти индекс второго вхождения строки
const animals2 = ['cat', 'dog', 'elephant', 'lion', 'tiger', 'lion'];
const secondLionIndex = animals2.indexOf('lion', 4);
console.log('indexOf:', secondLionIndex);

// includes проверяет наличие элемента в массиве, возвращает true или false
const animals3 = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const isElephantIncluded = animals3.includes('elephant');
console.log('includes:', isElephantIncluded); 

// task three
const zoo = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
for(let animal of zoo){
    if(animal.length > 7){
        console.log(animal);
    }
}

// filter позволяет фильтровать элементы массива по заданному условию
const animals4 = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const longWords = animals4.filter(word => word.length > 3);
console.log('filter:',longWords)

// filter поиск объектов в массиве
const usersFilter = [
    { name: 'Ivan', age: 18 },
    { name: 'Petr', age: 25 },
    { name: 'Anna', age: 20 },
    { name: 'Andy', age: 16 },
    { name: 'Michel', age: 25 },
];
  
const adults = usersFilter.filter(user => user.age <= 18);
console.log('filter:', adults);

// task three
const numbersFilter = [1, 11, -2, 3, -10, 4];
const negativeNumbers = numbersFilter.filter(number => number < 0);
console.log('negative_numbers:',negativeNumbers); 

// map принимает в качестве аргумента функцию и применяет ее к каждому элементу массива
const animals5 = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const upperCaseAnimals = animals5.map(word => word.toUpperCase());
console.log('map:', upperCaseAnimals); // ['CAT', 'DOG', 'ELEPHANT', 'TIGER', 'LION']

// можно использовать для преобразования объектов в массиве
const users3 = [
    { name: 'Ivan', age: 18 },
    { name: 'Petr', age: 25 },
    { name: 'Anna', age: 20 }
];
  
const userNames = users3.map(user => user.name);
console.log('map:', userNames); // ['Ivan', 'Petr', 'Anna']

// task four
const numbersMap = [1, 11, -2, 3, -10, 4];
const numbersAbs = numbersMap.map(number => Math.abs(number));
console.log('numbersAbs:', numbersAbs); 

// sort предназначен для сортировки элементов массива
const numbersSort = [1, 11, -2, 3, -10, 4];
const sortedNumbers = numbersSort.sort((a, b) => a - b);
console.log('sort:', sortedNumbers);

const users4 = [
    { name: 'Ivan', age: 18 },
    { name: 'Petr', age: 25 },
    { name: 'Anna', age: 20 }
];
  
const sortedUsers = users4.sort((user1, user2) => user1.age - user2.age);
console.log('sort:', sortedUsers);
 
// task five
const numbersSort2 = [1, 11, -2, 3, -10, 4];
const sortedNumbers2 = numbersSort2.sort((a, b) => b - a);
console.log('sort:', sortedNumbers2);

// concat позволяет объединить два или более массивов в один
const animalsZoo1 = ['cat', 'dog', 'elephant'];
const animalsZoo2 = ['tiger', 'lion'];

const animalsZoo = animalsZoo1.concat(animalsZoo2);
console.log('concat:', animals);

// split позволяет разделить строку на массив подстрок
const string = 'cat,dog,elephant';
const animals6 = string.split(',');
console.log('split:', animals6);

// join позволяет соединить массив подстрок в одну строку
const animals7 = ['cat', 'dog', 'elephant'];
const string2 = animals7.join('-');
console.log('join:', string2);

// reverse предназначен для перестановки элементов массива в обратном порядке
const words = ['cat', 'dog', 'elephant'];
const reversedWords = words.reverse();
console.log('reverse:',reversedWords);

// Array.isArray проверяет, является ли аргумент массивом
const animals8 = ['cat', 'dog', 'elephant'];
const isArray = Array.isArray(animals8);
console.log('Array.isArray:', isArray); // true

// Является ли string массивом.
const string3 = 'cat,dog,elephant';
const isArray2 = Array.isArray(string3);
console.log('Array.isArray:', isArray2); // false

// taks bonus
const bonusText = 'Метод concat позволяет объединить два или более массивов в один. Он принимает в качестве аргументов один или более массивов, а в качестве результата возвращает новый массив, состоящий из элементов, которые были в переданных массивах';

const wordsFromText = bonusText.split(' ');
let amount = 0;
for(let word of wordsFromText){
    if (word.includes('массив')){
        amount++;
    }
}
console.log(`Искомый текст \'массив\' встречается ${amount} раз.`)