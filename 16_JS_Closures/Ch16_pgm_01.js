// Level 1

// Create a closure which has one inner function

// Level 2

// Create a closure which has three inner functions

// Level 3

// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner 
// variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and 
// accountBalance inner functions. Incomes is a set of incomes and its description and 
// expenses is also a set of expenses and its description.

// Closure with one inner function
function outerFunction() {
    let outerVar = 'I am outer';
  
    function innerFunction() {
      console.log(outerVar);
    }
  
    return innerFunction;
  }
  
  const innerFunc = outerFunction();
  innerFunc(); // Output: I am outer

  // Closure with three inner functions
function outerFunction() {
    let outerVar = 'Outer variable';
  
    function innerFunction1() {
      console.log(outerVar);
    }
  
    function innerFunction2() {
      console.log('Inner function 2');
    }
  
    function innerFunction3() {
      console.log('Inner function 3');
    }
  
    return {
      inner1: innerFunction1,
      inner2: innerFunction2,
      inner3: innerFunction3
    };
  }
  
  const innerFunctions = outerFunction();
  innerFunctions.inner1(); // Output: Outer variable
  innerFunctions.inner2(); // Output: Inner function 2
  innerFunctions.inner3(); // Output: Inner function 3

  // Closure for personAccount
function personAccount(firstName, lastName) {
    let incomes = new Map();
    let expenses = new Map();
  
    function addIncome(description, amount) {
      incomes.set(description, amount);
    }
  
    function addExpense(description, amount) {
      expenses.set(description, amount);
    }
  
    function totalIncome() {
      let total = 0;
      for (let amount of incomes.values()) {
        total += amount;
      }
      return total;
    }
  
    function totalExpense() {
      let total = 0;
      for (let amount of expenses.values()) {
        total += amount;
      }
      return total;
    }
  
    function accountInfo() {
      return `${firstName} ${lastName} - Total Income: ${totalIncome()}, Total Expense: ${totalExpense()}`;
    }
  
    function accountBalance() {
      return totalIncome() - totalExpense();
    }
  
    return {
      addIncome,
      addExpense,
      accountInfo,
      accountBalance
    };
  }
  
  // Usage example
  const person = personAccount('John', 'Doe');
  person.addIncome('Salary', 5000);
  person.addIncome('Freelance', 1000);
  person.addExpense('Rent', 1500);
  person.addExpense('Food', 500);
  
  console.log(person.accountInfo()); // Output: John Doe - Total Income: 6000, Total Expense: 2000
  console.log(person.accountBalance()); // Output: 4000
  