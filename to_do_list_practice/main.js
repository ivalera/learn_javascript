const STATUS_TO_DO = "To Do";
const STATUS_IN_PROGRESS = "In Progress";
const STATUS_DONE = "Done";
const STATUS_CHANGE_ERROR = "Such a task does not exist!";

const addTask = (post) => toDo.list[post] = STATUS_TO_DO;
const deleteTask = (post) => delete toDo.list[post];
const changeStatus = (post, status) => {
    if(post in toDo.list){
        toDo.list[post] = status;
    }else{
        console.log(`${post} - ${STATUS_CHANGE_ERROR}`)
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
        for (const post in toDo.list){
            if(this.list[post] === STATUS_TO_DO){
                console.log(`   "${post}"`);
                countToDo++;
            } 
        }
        if(countToDo == 0){
            console.log(`   -`);
        }
        console.log("In Progress:")
        for (const post in toDo.list){
            if(this.list[post] === STATUS_IN_PROGRESS){
                console.log(`   "${post}"`);
                countInProgress++;
            }
        }
        if(countInProgress == 0){
            console.log(`   -`);
        }
        console.log("Done:")
        for (const post in toDo.list){
            if(this.list[post] === STATUS_DONE){
                console.log(`   "${post}"`);
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