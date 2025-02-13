// Task 1 - Function Declaration (Scenario: Employee Salary Calculation)

// Setting up the function to compute net salary

function calculatesalary(basesalary, bonus, taxrate) {
    let netsalary = (basesalary + bonus) - (basesalary * taxrate);
    return netsalary
};


// Console-log the function and declare values to the function

console.log(`Net Salary: $${calculatesalary(5000, 500, 0.1)}`)                  // Output: Net Salary: $5000
console.log(`Net Salary: $${calculatesalary(7000, 1000, 0.15)}`)                // Oupput: Net Salary: $6950