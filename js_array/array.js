let toDoList = ['почитать', 'помыть посуду', 'помыть машину'];
let toDoList1 = Array.of('почитать', 'помыть посуду', 'помыть машину');
let toDoList2 = new Array('почитать', 'помыть посуду', 'помыть машину');

let countArray = toDoList.length;
console.log(countArray);

// Access to the element
const firstElem = toDoList[0];
const lastElem = toDoList[toDoList.length - 1];
console.log(`firstElem - ${firstElem}\nlastElem - ${lastElem}`);

// Change element
toDoList[1] = "прогуляться";
console.log(toDoList);


console.log('\n\n');
// Methods pop, push, shift, unshift, slice and splice

// add an element to the end
toDoList.push("посадить цветы");
toDoList.push("поехать домой");
console.log(` push
    ${toDoList}`);

// delete the last element
toDoList.pop();
console.log(` pop
    ${toDoList}`);

// delete the first element
toDoList.shift();
console.log(` shift
    ${toDoList}`);

// add an element to the beginning
toDoList.unshift('пойти в кино');
console.log(` unshift
    ${toDoList}`);

// for...of
let toDoList3 = ['почитать', 'помыть посуду', 'помыть машину', 'посадить цветы'];

for (const task of toDoList3) {
  console.log(task);
}


// example toDo
const toDoTask = ["пойти домой", "пойти покрутить", "пойти поплавать"];
const addToDo = (task) => toDoTask.push(task);
const deleteToDo = (taks) =>{
    for(let i = 0; i < toDoTask.length; i++){
        if(toDoTask[i] === taks){
            toDoTask.splice(i, 1);
        }
    }
};
const showTask = () =>{
    for(const taks of toDoTask){
        console.log(`${taks}`);
    }
};

showTask();
console.log("------");
addToDo("иди спать");
addToDo("на пробежку");
showTask();
console.log("------");
deleteToDo("пойти покрутить");
showTask();
