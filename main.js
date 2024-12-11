//1.Write the program to greet a person given their first and last name//

function greet(firstname, lastname ) {

  let fullname = firstname + " " + lastname;

  let message = "Hello, " + fullname + "! Welcome!";

  console.log(message);

}

greet("Supriyo", "Chakraborty");






//2. Write a program that greets a person based on their gender. (If else)//

function greetperson (name, gender ) {
   let message;

     if (gender === "male") {
         message = "Hello Mr. " + name + "!" ;
    } 
    
    else if (gender === "female") {  
        message = "Hello Ms. " + name + "!"; 
    } 

    else { 
        message = " Hello " + name + "!" ;
    }

  console.log(message);    
}

greetperson("Supriyo", "male");
greetperson("Parvati", "female");
greetperson("Chintu", "non-binary");





//3. Write a program that counts from 0 - 1000 and prints (for Loops)//

for(let i = 0 ; i <= 1000; i++ ) {
    console.log(i);
}

//This version I wanted to try//
//  for (let i = 0; i <= 1000; i++) {
//  console.log(i + " - Thank you Harkirat");
// }






//4. Write a program that reverse all the element of an array.//

let originalArray = [1, 2, 3, 4, 5];
let reversed = originalArray.reverse();

console.log("Original Array (Now Reversed): ", reversed);





//5.Write a program prints all the even numbers in an array

function printEvenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) { 
            console.log(arr[i]);
        }
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printEvenNumbers(numbers);







//6.Write a program to print the biggest number in an array

function findBiggestNumber(arr) {
    let max = Number(arr[0]); 
    for (let i = 1; i < arr.length; i++) {
        let currentValue = Number(arr[i]); 
        if (currentValue > max) {
            max = currentValue;
        }
    }
    console.log("The biggest number is: " + max);
}


const number = [23, "45", 67, 89, "12", 34, 56]; 

findBiggestNumber([12, 45, 67, 34, 89, 100, 22]);







//7.Write a program that prints all the male people's first name given a complex object

const people = [
    { firstName: "John", lastName: "Doe", gender: "male" },
    { firstName: "Jane", lastName: "Doe", gender: "female" },
    { firstName: "Mike", lastName: "Smith", gender: "male" },
    { firstName: "Emily", lastName: "Johnson", gender: "female" },
    { firstName: "David", lastName: "Williams", gender: "male" }
  ];
  
  
  for (let i = 0; i < people.length; i++) {
    if (people[i].gender === "male") {
      console.log(people[i].firstName); 
    }
  }
  





//8.Create a counter in Javascript (counts down from 30 to 0)

for (let i = 30; i >= 0; i-- ) {
     console.log(i);

}





//9.Calculate the time it takes between a setTimeout call and the inner function actually running


let startTime = Date.now();


setTimeout(function() {
    
    let endTime = Date.now();
    
    
    let timeTaken = endTime - startTime;
    
    
    console.log("Time taken: " + timeTaken + " milliseconds");
}, 2000); 







//10.Create a terminal clock (HH:MM:SS)

function startClock() {
    setInterval(() => {
        const now = new Date(); 
        let hours = now.getHours(); 
        let minutes = now.getMinutes(); 
        let seconds = now.getSeconds(); 
       
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

       
        console.log(`${hours}:${minutes}:${seconds}`);
    }, 1000); 
}


startClock();
