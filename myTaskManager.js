const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

let tasks = ["Welcome to your task manager, Press:",
"1. to see all your task",
"2.to add a task",
"3.to delete a task",
"4.to mark a task as done",
"5.to Exit the task manager"];

const showtasks = () => {
    console.log(tasks)
}
showtasks()


function dailyTask (task1, task2, task3) {
    let array = [];

}

 rl.question('What is your option? ', (number) => {
     console.log();
        rl.close();
});
t
// EXEMPLE
// rl.question('What is your age? ', (age) => {
//     console.log('Your age is: ' + age);
//     rl.close();
// });
