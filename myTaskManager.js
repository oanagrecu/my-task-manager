const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

// let tasks = ["Welcome to your task manager, Press:",
// "1. to see all your task",
// "2.to add a task",
// "3.to delete a task",
// "4.to mark a task as done",
// "5.to Exit the task manager"];

// const showtasks = () => {
//     console.log(tasks)
// }
// // showtasks()


// function dailyTask (task1, task2, task3) {
//     let array = [];

// }

//  rl.question('What is your option? ', (number) => {
//      console.log(number);
//      if(number === 1){
//         showtasks();
    
//      }
//      rl.close();
// });

let tasks = ["1. to see all your tasks","2. to add a task", "3. to delete a task", "4. to mark a task as done","5. to Exit the task manager"];

function taskManagerDisplay() {
  console.log("Welcome to your task manager. Press:");
  for(let i = 0; i < tasks.length; i++)
    console.log(`${i + 1}. ${tasks[i]}`);
   
}

function SelectChoice(choice) {
  switch (choice) {
    case "1":
      taskManagerDisplay();
      break;
    case "2":
      addNewTask();
      break;
    case "3":
     deleteTask();
      break;
    case "4":
      console.log("4: Mark a task as done");
      break;
    case "5":
      console.log("Exiting the task manager. Goodbye!");
      rl.close();
      break;
    default:
      console.log("Invalid choice. Please select a valid option.");
      break;
  }
}

function printMenuChoice() {
  rl.question("Enter your choice: ", (choice) => {
    SelectChoice(choice);
    if (choice !== "5") {
      taskManagerDisplay();
      printMenuChoice();
    }
  });
}

// adding a new task
function addNewTask() {
  rl.question("Enter the new task: ", (task) => {
    tasks.push(task);
    for (let i = 0; i < tasks.length; i++) {
      console.log(`${i + 1}. ${tasks[i]}`);
    }
   printMenuChoice();
  });

}

function deleteTask() {
  rl.question("Enter the task number to delete: ", (taskNumber) => {
    const index = parseInt(taskNumber) - 1;
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index-1, 1);
      console.log("Task deleted successfully.");
    } else {
      console.log("Invalid task number.");
    }
    taskManagerDisplay();
    printMenuChoice();
  });
}

taskManagerDisplay();
printMenuChoice();
