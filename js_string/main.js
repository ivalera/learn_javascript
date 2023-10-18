let guestList = "Guests:\n * John\n * Pete\n * Mary";
console.log(guestList);
console.log(guestList.length)

let animal = `bear`;
console.log( animal[0] );
console.log( animal.at(-2));

for (let char of "tarakan") {
     console.log(char); 
}

console.log("------------");


function showVerticalMessage(str){
    //console.log(str.length)
    if(str.length >= 7){
        str = str.slice(0, 7); 
    }
    for(let char of str){
        if(char === 's'){
            char = char.toUpperCase();
            console.log(char);
        }else{
            console.log(char);
        }
    }
}

showVerticalMessage("spider-man");

for (let char of "Hello") {
    alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т.д.)
}