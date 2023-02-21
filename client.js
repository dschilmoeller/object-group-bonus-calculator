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
function calculateIndividualEmployeeBonus( employee ) {  
  for (let i=0; i<employees.length; i++) {
    if (employee === employees[i].name) {
      console.log('name found', employee);
      //test to see if names are found in object employees
      //check rating of employee
      console.log(employees[i].reviewRating); // return review rating
      let bonus = 0;
      if (employees[i].reviewRating <= 2) {
        if (employees[i].employeeNumber.length === 4) {
          if (employees[i].annualSalary < 65000) {
            bonus = employees[i].annualSalary*.05
            console.log('review 1 or 2, employee number 4 digits and < 65K', bonus)
          } else {
            bonus = employees[i].annualSalary*.04
            console.log('review 1 or 2, employee number 5 digits and > 65k', bonus)
          }
        } else {
        console.log('no bonus', bonus)
        }
      } else if (employees[i].reviewRating === 3) {
        if (employees[i].employeeNumber.length === 5) {
          if (employees[i].annualSalary < 65000) {
            bonus = .04*employees[i].annualSalary;
            console.log('review 3, employee number 5 digits and < 65K', bonus)
          } else {
            bonus = .03*employees[i].annualSalary;
            console.log('review 3, employee number 5 digits and > 65K', bonus)
          }
        } else {
          if (employees[i].annualSalary < 65000) {
            bonus = .09*employees[i].annualSalary;
            console.log('review 3, employee number 4 digits and < 65K', bonus)
          } else {
            bonus = .08*employees[i].annualSalary;
            console.log('review 3, employee number 4 digits and > 65K', bonus)
          }
        }
      }else if (employees[i].reviewRating === 4) {
        if (employees[i].employeeNumber.length === 5) {
          console.log(employees[i].name)
          console.log(employees[i].annualSalary)
          if (employees[i].annualSalary < 65000) {
            bonus = .06*employees[i].annualSalary;

            console.log('review 4, employee number 5 digits and < 65K', bonus) 
          } else {
            bonus = .05*employees[i].annualSalary;
            console.log('review 4, employee number 5 digits and > 65K', bonus) 
          }
        } else {
          if (employees[i].annualSalary < 65000) {
            bonus = .11*employees[i].annualSalary;
            console.log('review 4, employee number 4 digits and < 65K', bonus)
          } else {
            bonus = .10*employees[i].annualSalary;
            console.log('review 4, employee number 4 digits and > 65K', bonus)
          }
        }
      } else if (employees[i].reviewRating === 5) {
        if (employees[i].employeeNumber.length === 5) {
          if (employees[i].annualSalary < 65000) {
            bonus = .10*employees[i].annualSalary;
            console.log('review 5, employee number 5 digits and < 65K', bonus) 
          } else {
            bonus = .09*employees[i].annualSalary;
            console.log('review 5, employee number 5 digits and > 65K', bonus)
          }
        } else {
          if (employees[i].annualSalary < 65000) {
            bonus = .13*employees[i].annualSalary;
            console.log('review 5, employee number 4 digits and < 65K', bonus)
          } else {
            bonus = .13*employees[i].annualSalary;
            console.log('review 5, employee number 4 digits and > 65K', bonus)
          }
        }
      } 
    // return new object with bonus results
    return bonus;
    }
  } 
}
console.log('Atticus gets a bonus of $' + calculateIndividualEmployeeBonus('Atticus'));
console.log('Jem gets a bonus of $' + calculateIndividualEmployeeBonus('Jem'));
console.log('Scout gets a bonus of $' + calculateIndividualEmployeeBonus('Scout'));
console.log('Robert gets a bonus of $' + calculateIndividualEmployeeBonus('Robert'));
console.log('Mayella gets a bonus of $' + calculateIndividualEmployeeBonus('Mayella'));