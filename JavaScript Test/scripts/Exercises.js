//Learning Variables

// const name2 = "Student";
// console.log("Hello " + name2 + " from this school. This works in the terminal!");
// //The "" is the old version for console.log to pass an value


// let countingClicks = 0;
// //The `` is the new value, it makes it cleaner to see and easier to understand
// countingClicks = countingClicks +1;
// console.log(`Initial clicks: ${countingClicks} clicks`);

//let name --> variable let has is being declared by name (variable identifier)
let empty = [];                            //[] it's an empty array (list)  
let colors = ["red", "blue", "green"];     //Type string
let numbers = [10, 20, 30, 40, 50];       //Numbers as integer  
let mixing = [true, "Hey ", 5];          //Different type of data

console.log(colors[2]);                 //Indice element 0, 1 or 2
console.log(colors.length);             //It displays the length of the array, in my example, is 3 red, blue and green

// let grocery = ["bread", 'milk'];
// grocery.push("eggs");
// console.log(grocery);

// to eliminate the last element of the list 
// grocery.pop();
// console.log(grocery); // ["bread", "milk"]

// to eliminate the first itme of the list 
// grocery.shift();
// console.log(grocery);

// let pendingTasks = ["study JS", "cooking for the week", "clean the wardrobe"];
// let lastTask = pendingTasks.pop();
// //the pendingTask.pop() will eliminate the last item ["clean the wardrobe"]
// //But the variable lastTask will pass it, that's why I can see it the output          
// console.log(`Completed task: ${lastTask}`);



//Learning function

//Declared function
//Use alert to see it on the browser, instead if the console.log
function salute(name3){
   console.log(`Hey! ${name3} Welcom to the JS world`);
}
salute("Ana");

//Arrow function
//num1 and num2 are the paramethers
const add = (num1, num2) => {
   
    //return num1 + num2;
    //return num1 * num2;
    //return num1 / num2;
    //return num1 - num2;
    //return num2 - num1;
    //return num2 / num1;
    return -num1 - num2;

}
//const result = add(10, 5);
const result = add(15,3);
console.log(`The result is: ${result}`);





