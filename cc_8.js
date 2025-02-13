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





// Task 3 - Arrow Function (Scenario: Service Fee Calculation)

// Setting up an arrow function to calculate a fee

let calculateservicefee = (amount, servicetype) => {
    let feepercentage;

    switch (servicetype) {
        case "Premium":
            feepercentage = 0.15;
            break;
        case "Standard":
            feepercentage = 0.10;
            break;
        case "Basic":
            feepercentage = 0.05
            break
    }

    return amount * feepercentage
};


console.log(`Service Fee: $${calculateservicefee(200, "Premium")}`)                     // Output: Service Fee: $30
console.log(`Service Fee: $${calculateservicefee(500, "Standard")}`)                    // Output: Service Fee: $50





// Task 4 - Parameters and Arguments (Scenario: Car Rental Cost Calculation)

// Setting up the function to calculate the rental cost based on several factors

function calculaterentalcost(days, cartype, insurance = false) {
    let dailyrate

    switch (cartype) {
        case "Economy":
            dailyrate = 40;
            break;
        case "Standard":
            dailyrate = 60
            break;
        case "Luxury":
            dailyrate = 100
            break;
    }

    let totalcost = days * dailyrate;

    if (insurance) {
        totalcost += days * 20;
    }

    return totalcost;
}


// Console-logging the function and declaring values

console.log(`Total Cost to Rent: $${calculaterentalcost(3, "Economy", true)}`)              // Output: Total Cost to Rent: $180
console.log(`Total Cost to Rent: $${calculaterentalcost(5, "Luxury", false)}`)              // Output: Total Cost to Rent: $500