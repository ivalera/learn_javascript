/*let count = 0;

function logCount() { // функция
	let count = 1; // объявим локальную переменную count
	console.log(count); // 0 или 1 ?
}

//logCount();

function logCount2() {
	console.log(count)
}

count = 40;
//logCount2();  */


function createCounter() {
    let count = 0;
    return () => ++count;
}

let counterA = createCounter();
let counterB = createCounter();

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterA()); // 3

console.log(counterB()); // 1

// oadway example
function createIncrement() {
    let count = 0;

    function increment() {
        count++;
    }

   
    function log() {
       let message = `Count is ${count}`;
       console.log(message);
    }

    return [increment, log]
}

const [increment, log] = createIncrement();

increment();
increment();
increment();

log();