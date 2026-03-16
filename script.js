class ToDo {

constructor(description) {

this.description = description;

this.completed = false; 

}

markComplete() {

this.completed = true;

console.log("${this.description}" marked as complete!);

}


}
