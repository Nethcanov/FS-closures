/*------------------
1)
DONE
Create a function named "counter". It does
not have any parameters.

Create a variable named y, and create a
closure that increases y by 1 before 
returning y.
------------------*/
// function counter (){
// //declare and initialise state we want to hide/maintain - not sure on line 11
//   let y = 0;
//   return function increase () {
//     y += 1;
//     return y;
//   }
//   //return increase(); // need to remove return from the start of the inner function if do this
// }
// //closure creator
// const counterOne = counter();
// const counterTwo = counter();
// //Test cases:
// console.log(counterOne()); // 1
// console.log(counterOne()); // 2
// console.log(counterOne()); // 3
// console.log(counterTwo()); // 1
// console.log(counterTwo()); // 2


/*------------------
2)
JIM DID THIS
Create a function named "startingCounter".
It takes in one parameter, a number (x).

Store x in a variable named count, and return
a closure that increases count by 1 before
returning count.
------------------*/

// function startingCounter(x){
//   //declare and initialise state we want to hide/maintain
//   let count = x;
//   //declare but don't call the closure
//   return function incrementCount(){
//     count++;

//     return count;
//   }
//   //return new closure
//   //the line belox can be omitted and "return function" used instead
//   //return incrementCount;
// }

// //closure creator
// const counterThree = startingCounter(10);
// const counterFour = startingCounter(3);
// //test cases
// console.log(counterThree()); // 11
// console.log(counterThree()); // 12
// console.log(counterThree()); // 13
// console.log(counterFour()); // 4
// console.log(counterFour()); // 5

/*------------------
3)
DONE but with a question
Create a function named "countdown". It takes
in one parameter, a number (x). Store x
in a variable called count.

Return a closure that decreases count by 1,
and then returns either the count (if
the count is greater than or equal to one)
or "Time's Up!" (if the count is zero or less).

------------------*/

// function countdown(x) {
//   //declare and initialise state we want to hide/maintain
//   let count = x;
//   return function decrement(){
//     count--;
//     if(count >0){
//       return count;
//     }
//       return "Time's Up!";
//   }
// }
// //closure creator
// const counterFive = countdown(3);
// //test case
// console.log(counterFive()); // 2
// console.log(counterFive()); // 1
// console.log(counterFive()); // "Time's up!"
// console.log(counterFive()); // "Time's up!"
////if(count-- >1) - is this ok?

/*------------------
4)
DONE
Create a function named "multiplier"
that takes in a number (x).

The multiplier function should return a
closure that takes another number (y) as a parameter.
That closure should return the result of x * y.
------------------*/
// function multiplier(x){
//   return function mulitplied(y){
//     return x * y;
//   }
// }

// const multiplyByFive = multiplier(5);
// const multiplyByTen = multiplier(10);
// console.log(multiplyByFive(4)); // 20
// console.log(multiplyByTen(4)); // 40

/*------------------
5)
DONE - is this ok or should I declare a variable called password and assign y as its value? 
Create a function named "createPassword"
that takes in a string (x).

The createPassword function should return a
closure that takes another string (y) as a parameter.
If that x is equal to y, the closure should
return "Password correct". If not, the closure
should return "Password incorrect".
------------------*/
// function createPassword(x){
//   let password = x;
//   return function(y){
//     if(password === y){
//       return "Password correct";
//     }
//       return "Password incorrect";
//   }
// }
// const password = createPassword("123pass!");
// console.log(password("123pass!")); // Password correct.
// console.log(password("123pass")); // Password incorrect.

/*------------------
6)
DONE - covered in Jim's lecture 
Create a function named "createBankAccount"
that takes in a number (x). That number x
should be stored in a variable called "balance".

The createBankAccount function should return a
closure with two parameters– a number (y) - money and 
a string (name it "action").

If the action is equal to "add", y should be added
to balance. If the action is equal to "subtract", y should
be subtracted from balance.

The closure should return balance. 
------------------*/
// function createBankAccount(x){
//   let balance = x;
//   //because x can be replaced and the replacement value stored in balance
//   return function newBalance(money, action){
//     if(action === "add"){
//       return balance += money;
//     }
//     if(action === "subtract"){
//       return balance -= money;
//     }
//     return "Error - please choose an action!"
//   }
// }

// const marcoAccount = createBankAccount(100);
// console.log(marcoAccount(50, "add")); // 150
// console.log(marcoAccount(10, "add")); // 160
// console.log(marcoAccount(70, "subtract")); // 90
// console.log(marcoAccount(70, "added")); // 90

/*------------------
7)
*****Need to uncomment createBankAccount(no6) and createPassword (no5) *****
The function below uses the other functions you
created to make a secure account. 
-> Modify the conditional in the if statement so that it evaluates to true. 
-> Then, use the bank account function so that money is added
or subtracted from the account.

-> This closure should return the bank account balance.

Look back at the other functions you created to make sure
you understand how they work!,
------------------*/

// function createPassword(x){
//   let CreatedPassword = x;
//   return function(y){
//     return(CreatedPassword === y ?  
//       "Password correct" :
//       "Password incorrect")
//   }
// }
// const password = createPassword("123pass!");
// // console.log(password("123pass!")); // Password correct.
// // console.log(password("123pass")); // Password incorrect.

// function createBankAccount(x){
//   let balance = x;
//   //because x can be replaced and the replacement value stored in balance
//   return function newBalance(money, action){
//     if(action === "add"){
//       return balance += money;
//     }
//     if(action === "subtract"){
//       return balance -= money;
//     }
//   }
// }
// const marcoAccount = createBankAccount(100);
// // /*-------------------------------*/
// function createBank(password, startingBalance) {
//   const checkPassword = createPassword(password);
//   const bankAccount = createBankAccount(startingBalance);

//   return function(password, amount, action) {
//     let access = checkPassword(password);

//     if (access === "Password correct") {
//       return bankAccount(amount, action);

//       // use your bankAccount function
//       // to add or subtract money here
//     } else {
//       return access;
//     }
//   }
// }
// const sofiaBank = createBank("Cod3ly!", 100);
// console.log(sofiaBank("Cod3ly!", 150, "add")); //250
// console.log(sofiaBank("Codely123", 150, "add")); //Password incorrect
// console.log(sofiaBank("Cod3ly!", 50, "subtract")); //200




/*
BLANK COPY
/*------------------
1)
Create a function named "counter". It does
not have any parameters.

Create a variable named y, and create a
closure that increases y by 1 before 
returning y.

Test cases:
const counterOne = counter();
const counterTwo = counter();
console.log(counterOne()); // 1
console.log(counterOne()); // 2
console.log(counterOne()); // 3
console.log(counterTwo()); // 1
console.log(counterTwo()); // 2
------------------*/
/*------------------
2)
Create a function named "startingCounter".
It takes in one parameter, a number (x).

Store x in a variable named count, and return
a closure that increases count by 1 before
returning count.

Test cases:
const counterThree = startingCounter(10);
const counterFour = startingCounter(3);
console.log(counterThree()); // 11
console.log(counterThree()); // 12
console.log(counterThree()); // 13
console.log(counterFour()); // 4
console.log(counterFour()); // 5
------------------*/


/*------------------
3)
Create a function named "countdown". It takes
in one parameter, a number (x). Store x
in a variable called count.

Return a closure that decreases count by 1,
and then returns either the count (if
the count is greater than or equal to one)
or "Time's Up!" (if the count is zero or less).

const counterFive = countdown(3);
console.log(counterFive()); // 2
console.log(counterFive()); // 1
console.log(counterFive()); // "Time's up!"
console.log(counterFive()); // "Time's up!"
------------------*/



/*------------------
4)
Create a function named "multiplier"
that takes in a number (x).

The multiplier function should return a
closure that takes another number (y) as a parameter.
That closure should return the result of x * y.

Test cases:
const multiplyByFive = multiplier(5);
const multiplyByFive = multiplier(10);
console.log(multiplyByFive(4)); // 20
console.log(multiplyByTen(4)); // 40
------------------*/



/*------------------
5)
Create a function named "createPassword"
that takes in a string (x).

The createPassword function should return a
closure that takes another string (y) as a parameter.
If that x is equal to y, the closure should
return "Password correct". If not, the closure
should return "Password incorrect".

Test cases:
const password = createPassword("123pass!");
console.log(password("123pass!")); // Password correct.
console.log(password("123pass")); // Password incorrect.
------------------*/



/*------------------
6)
Create a function named "createBankAccount"
that takes in a number (x). That number x
should be stored in a variable called "balance".

The createBankAccount function should return a
closure with two parameters– a number (y) and 
a string (name it "action").

If the action is equal to "add", y should be added
to balance. If the action is equal to "subtract", y should
be subtracted from balance.

The closure should return balance. 

Test cases:
const marcoAccount = createBankAccount(100);
console.log(marcoAccount(50, "add")); // 150
console.log(marcoAccount(10, "add")); // 160
console.log(marcoAccount(70, "subtract")); // 90
------------------*/




/*------------------
7)
The function below uses the other functions you
created to make a secure account. Modify the conditional
in the if statement so that it evaluates to true. Then, 
use the bank account function so that money is added
or subtracted from the account.

This closure should return the bank account balance.

Look back at the other functions you created to make sure
you understand how they work!
------------------*/


// function createBank(password, startingBalance) {
//   const checkPassword = createPassword(password);
//   const bankAccount = createBankAccount(startingBalance);

//   return function(password, amount, action) {
//     let access = checkPassword(password);

//     if (access === "CHANGE THIS TEXT") {
//       // use your bankAccount function
//       // to add or subtract money here
//     } else {
//       return access;
//     }
//   }
// }

// const sofiaBank = createBank("Cod3ly!", 100);
// console.log(sofiaBank("Cod3ly!", 150, "add")); //250
// console.log(sofiaBank("Codely123", 150, "add")); //Password incorrect
// console.log(sofiaBank("Cod3ly!", 50, "subtract")); //200

