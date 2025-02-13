// Task 1 - Function Declaration (Scenario: Employee Salary Calculation)

// Setting up the function to compute net salary

function calculatesalary(basesalary, bonus, taxrate) {
    let netsalary = (basesalary + bonus) - (basesalary * taxrate);
    return netsalary
};


// Console-log the function and declare values to the function

console.log(`Net Salary: $${calculatesalary(5000, 500, 0.1)}`)                  // Output: Net Salary: $5000
console.log(`Net Salary: $${calculatesalary(7000, 1000, 0.15)}`)                // Oupput: Net Salary: $6950





// Task 2 - Function Expression (Scenario: Product Price after Discount)

// Setting up the function to determine final price of a product

let calculatediscount = function(price, discountrate) {
    let finalprice = price - (price * discountrate);
    return finalprice;
};


// Console-Logging the function and declare values to the function

console.log(`Final Price: $${calculatediscount(100, 0.2)}`)                     // Output: Final Price: $80
console.log(`Final Price: $${calculatediscount(250, 0.15)}`)                    // Output: Final Price: $212.5