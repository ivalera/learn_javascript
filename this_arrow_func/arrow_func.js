// function declaration
function sum(a, b){
    return a + b;
}
console.log(sum(10, 5));

// arrow function
const sum_new = (a, b) => a + b;
console.log(sum_new(20, 30));

// arrow function whithout parameters
let dateTime = new Date();
let year = dateTime.getFullYear();
let mounth = dateTime.getMonth();
let day = dateTime.getDate();
let hours = dateTime.getHours();
let minutes = dateTime.getMinutes();
console.log(`Дата: ${year}:${mounth + 1}:${day} - время: ${hours}:${minutes}`);

const timestamp = () => console.log(new Date());
timestamp();

const timestampForTask = () => console.log(`Дата: ${year}:${mounth + 1}:${day} - время: ${hours}:${minutes}`);
timestampForTask();

let sumBlock = (a, b) => { 
	if (!a || !b) {
		return undefined;
	}
	return a + b;
}

console.log(sum(20, 2)); 
console.log(sum(1));