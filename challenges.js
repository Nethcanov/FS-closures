/*------------------
1)
Create a function named "counter". It does
not have any parameters.

This function should store a private variable (x).
It should return a closure that increases x by 1
before returning x.

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
Create a function named "startingCounter". It takes
in one parameter, a number (x);

The function should store x as a private variable.
It should also return a closure that increases x by 1
before returning x.

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
in one parameter, a number (x);

The function should store x as a private variable.
It should also return a closure. This closure should
decrease x by 1, and then return x (if x is greater than
one) or return "Time's Up!" if x is zero or less.

Test cases:
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
Create a function named "bankAccount"
that takes in a number (x). That number x
should be stored in a variable called "balance".

The bankAccount function should return a
closure with two parameters– a number (y) and 
a string (name it "action").

If the action is equal to "add", y should be added
to x. If the action is equal to "subtract", y should
be subtracted from x.

The closure should return x. 

Test cases:
const marcoAccount = bankAccount(100);
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
------------------*/


function createBank(password, startingBalance) {
  const checkPassword = createPassword(password);
  const bankAccount = createBankAccount(startingBalance);

  return function(password, amount, action) {
    let access = checkPassword(password);

    if (access === "CHANGE THIS TEXT") {
      // add or subtract from the bank account 
    } else {
      return access;
    }
  }
}

// const sofiaBank = createBank("Cod3ly!", 100);
// sofiaBank("Cod3ly!", 150, "add");
// sofiaBank("Codely123", 150, "add");
// sofiaBank("Cod3ly!", 50, "subtract");
