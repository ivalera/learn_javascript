function addRecord(key, value){
    this.list[key] = value;
}

const phoneBook = {
    list: {
      "John": 123456789,
      "Jane Doe": 987654321,
    },
    addWhithThis(name, number) { 
      this.list[name] = number; // здесь this === phoneBook // phoneBook === объект перед точкой
    },
    addWhithVariable(name, number){ // так плохо вызывать список, через контекст
        phoneBook.list[name] = number;
    },
    addRecord
  };

const toDoList = {
    list:{
        "make a video": "open",
    },
    addRecord
}

const phoneBookCopy = Object.assign({}, phoneBook);
phoneBookCopy.list = {};
console.log(phoneBookCopy);

phoneBookCopy.addWhithVariable('Art', '123');
console.log(phoneBookCopy);

console.log(phoneBook);


toDoList.addRecord('do something', 'open');
console.log(toDoList.list);


//addRecord('go to gym', 'today') // тут будет ошибка, если вызывать без контекста