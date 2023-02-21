// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
// 
/*
function calculateIndividualEmployeeBonus( employee ) {  
  for (let i=0; i<employees.length; i++) {
    if (employee === employees[i].name) {
      console.log('name found', employee);
      //test to see if names are found in object employees
      //check rating of employee
      console.log(employees[i].reviewRating); // return review rating
      let bonus = 0; // starting bonus of 0
      if (employees[i].reviewRating <= 2) {
        // this loop covers employees with ratings of 1 or 2
        console.log('Employee Rating of 2 or less'); 
        if (employees[i].employeeNumber.length === 4) {
          // this loop covers employees reviews of 1 or 2 and employeeNumber lengths of 4
          console.log('Employee rating 1 or 2, employee number is 4 digits')
          if (employees[i].annualSalary < 65000) {
            // this if covers people with a length of 4 and a salary of less than 65K
            bonus = employees[i].annualSalary*.05
            console.log('review 1 or 2, employee number 4 digits and < 65K', bonus);
          } else {
            // this covers people with a length of 4 and a salary of greater than 65k
            bonus = employees[i].annualSalary*.04
            console.log('review 1 or 2, employee number 4 digits and > 65k', bonus);
          } // this ends the loop of employees with an employeeNumber length of 4
        } else {
          // this covers everyone with a rating of 1 or 2, an employee number of 5 digits, and ignores salary (because 0%)
        console.log('no bonus', bonus)
        } // this ends the part of the function dealing with employees with a rating of 1 or 2.

      } else if (employees[i].reviewRating === 3) {
        // this loop covers employees with a rating of 3
        if (employees[i].employeeNumber.length === 5) {
          // this loop covers employees with a rating of 3 and employeeNumber lengths of 5
          console.log('Employee rating 3, employee number is 5 digits')
          if (employees[i].annualSalary < 65000) {
            // this covers employees with a rating of 3, employeeNumber length of 5, and salary less than 65k
            bonus = .04*employees[i].annualSalary;
            console.log('review 3, employee number 5 digits and < 65K', bonus);
          } else {
            // this covers employees with a rating of 3, employeeNumber length of 5, and a salary greater than 65k
            bonus = .03*employees[i].annualSalary;
            console.log('review 3, employee number 5 digits and > 65K', bonus);
          } // this ends employees with rating 3, employeeNumber lengths of 5
        } else {
          // this covers employees with employeeNumber lengths of 4 (+5% to bonus amount)
          if (employees[i].annualSalary < 65000) {
            // this covers employees with a rating of 3, employeeNumber length of not 5 (that is, 4 in our case but could be something else)
            // and a salary of less than 65000
            bonus = .09*employees[i].annualSalary;
            console.log('review 3, employee number 4 digits and < 65K', bonus);
          } else {
            // this covers employees with a rating of 3, employeeNumber of 4, and a salary greater than 65K
            bonus = .08*employees[i].annualSalary;
            console.log('review 3, employee number 4 digits and > 65K', bonus);
          }
        } // this ends the part of the function dealing with employees with a rating of 3.
        
      } else if (employees[i].reviewRating === 4) {
        if (employees[i].employeeNumber.length === 5) {
          // these were troubleshooting only and are useful to see what values are at this point in the function
          // console.log(employees[i].name)
          // console.log(employees[i].annualSalary)
          // this section deals with employees with a rating of 4 and employeeNumber with 5 digits
          if (employees[i].annualSalary < 65000) {
            // this covers employees with a rating of 4, employeeNumber length of 5, and salary less than 65K
            bonus = .06*employees[i].annualSalary;
            console.log('review 4, employee number 5 digits and < 65K', bonus);
          } else {
            // this covers employees with a rating of 4, employeeNumber length of 5, and salary greater than 65K
            bonus = .05*employees[i].annualSalary;
            console.log('review 4, employee number 5 digits and > 65K', bonus);
          }
        } else {
          // this covers employees with a rating of "Not 5", or 4 in the case of the presented data. 
          // can't stress enough this would be different in real life with more error checking (3 digit numbers, is the input )
          if (employees[i].annualSalary < 65000) {
            // this covers employees with a rating of 4, employeeNumber with 4 digits, and salary less than 65k
            bonus = .11*employees[i].annualSalary;
            console.log('review 4, employee number 4 digits and < 65K', bonus);
          } else {
            // this covers employees with a rating of 4, employeeNumber with 4 digits, and salary greater than 65k
            bonus = .10*employees[i].annualSalary;
            console.log('review 4, employee number 4 digits and > 65K', bonus);
          }
        } // this ends the part of the function dealing with employees with a rating of 4

      } else if (employees[i].reviewRating === 5) {
        // this loop deals with employees with a rating of 5
        if (employees[i].employeeNumber.length === 5) {
          // this loop covers employees with rating 5, employeeNumber length of 5
          if (employees[i].annualSalary < 65000) {
            // this covers employees with rating 5, employeeNumber length 5, and salary less than 65k
            bonus = .10*employees[i].annualSalary;
            console.log('review 5, employee number 5 digits and < 65K', bonus);
          } else {
            // this covers empployees with rating 5, employeeNumer length 5, and salary greater than 65k
            bonus = .09*employees[i].annualSalary;
            console.log('review 5, employee number 5 digits and > 65K', bonus);
          }
        } else {
          // this covers employees with an employeeNumber length of 4 (or strictly, NOT 5)
          if (employees[i].annualSalary < 65000) {
            // this covers employees with a rating of 5, employeeNumber length of 4, and salary less than 65k
            bonus = .13*employees[i].annualSalary;
            console.log('review 5, employee number 4 digits and < 65K', bonus);
          } else {
            // this covers employees with a rating of 5, employeeNumber length of 4, and salary greater than 65k
            bonus = .13*employees[i].annualSalary;
            console.log('review 5, employee number 4 digits and > 65K', bonus);
          }
        }
      } // this ends the section dealing with employees with a rating of 5
    // return new object with bonus results
    // need to define object properly.
    return bonus;
    }
  } 
}
console.log('Atticus gets a bonus of $' + calculateIndividualEmployeeBonus('Atticus'));
console.log('Jem gets a bonus of $' + calculateIndividualEmployeeBonus('Jem'));
console.log('Scout gets a bonus of $' + calculateIndividualEmployeeBonus('Scout'));
console.log('Robert gets a bonus of $' + calculateIndividualEmployeeBonus('Robert'));
console.log('Mayella gets a bonus of $' + calculateIndividualEmployeeBonus('Mayella'));
*/


/* proper return
Notes from class:
*/



function calculateIndividualEmployeeBonus(employees) {
  console.log('current employee', employee);

  // variable to track bonus percentage
    let bonusPercentage = 0

    if (employee.reviewRating <= 2) {
      console.log('employee rating is 2');
      bonusPercentage = 0;
      console.log('current bonus percentage', bonusPercentage);
    }

    if (employee.reviewRating === 3) {
      console.log('employee rating is 3');
      bonusPercentage = 4;
      console.log('current bonus percentage', bonusPercentage);
    }

    if (employee.reviewRating === 4) {
      console.log('employee rating is 4');
      bonusPercentage = 6;
      console.log('current bonus percentage', bonusPercentage);
    }

    if (employee.reviewRating === 5) {
      console.log('employee rating is 5');
      bonusPercentage = 10;
      console.log('current bonus percentage', bonusPercentage);
    }

    if (employee.employeeNumber.length === 4) {
      console.log(`$(employee.name) is a senior.`);
      console.log('initial bonus', bonusPercentage);
      bonusPercentage += 5;
      console.log('Current bonus is', bonusPercentage)
    }

    if (employee.annualSalary > 65000) {
      console.log(`${employee.name} makes more than $65,000`);
      bonusPercentage += -1;
      console.log('Current Bonus Percentage:', bonusPercentage);
    }

    if (bonusPercentage > 13) {
      console.log(`${employee.name} has a bonus greater than 13%`);
      console.log('Initial bonus:', bonusPercentage);
      bonusPercentage = 13
      console.log('Bonus changed to:', bonusPercentage);
    
    } else if (bonusPercentage < 0) {
      console.log(`${employee.name} has a bonus of less than 0%`);
      console.log(`current bonus percentage:`, bonusPercentage)
      bonusPercentage = 0
    
    } return finalIndidivudalEmployeeBonus;
    let finalIndidivudalEmployeeBonus = {
      name: employee.name,
      bonusPercentage: bonusPercentage,
      totalCompensation: 'total_comp',
      totalBonus: 'total_bonus'
    }
  } 

  
for (let individual of employees) {
  calculateIndividualEmployeeBonus(individual);
}

/* Deeper explanation of for loops
for (let employee of employees ) {
  //some code
}
for - prepare code to iterate
let employee - declare variable employee
employee value stores current employee
employees - declares array that is to be iterated through
  -> incoming array

  main difference between this and an 'i' loop
  i loops can start at indices other than 0.
  for x of y loops go through entire array and perform same task.
*/