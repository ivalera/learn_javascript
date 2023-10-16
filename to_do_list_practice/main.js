const STATUS_TO_DO = "To Do";
const STATUS_IN_PROGRESS = "In Progress";
const STATUS_DONE = "Done";
const STATUS_CHANGE_ERROR = "Such a task does not exist!";

const addTask = (task) => toDo.list[task] = STATUS_TO_DO;
const deleteTask = (task) => delete toDo.list[task];
const changeStatus = (task, status) => {
    if(task in toDo.list){
        toDo.list[task] = status;
    }else{
        console.log(`${task} - ${STATUS_CHANGE_ERROR}`)
    }
}

const toDo = {
    list:{
        "I need to study today": "In Progress",
        "create a new practice task": "In Progress",
        "make a bed": "Done",
	    "write a post": "To Do",
        "go to home": "To Do",
    },
    showList(){
        let countToDo = 0;
        let countInProgress = 0;
        let countDone = 0;

        console.log("To do:");
        for (const task in toDo.list){
            if(this.list[task] === STATUS_TO_DO){
                console.log(`   "${task}"`);
                countToDo++;
            } 
        }
        if(countToDo == 0){
            console.log(`   -`);
        }
        console.log("In Progress:")
        for (const task in toDo.list){
            if(this.list[task] === STATUS_IN_PROGRESS){
                console.log(`   "${task}"`);
                countInProgress++;
            }
        }
        if(countInProgress == 0){
            console.log(`   -`);
        }
        console.log("Done:")
        for (const task in toDo.list){
            if(this.list[task] === STATUS_DONE){
                console.log(`   "${task}"`);
                countDone++;
            }
        }
        if(countDone == 0){
            console.log(`   -`);
        }
    },
    addTask,
    deleteTask,
    changeStatus
};



toDo.showList();
//addTask("clean the apartment");
changeStatus("go to home", STATUS_DONE);
changeStatus("I need to eat now.", STATUS_DONE);
deleteTask("write a post");
console.log("------------")
toDo.showList();