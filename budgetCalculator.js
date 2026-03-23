document.getElementById("calculateBudget").addEventListener("click", function () {
    try {
        const income = parseFloat(prompt("Enter your total monthly income (no commas):"));
        const expenses = parseFloat(prompt("Enter your estimated monthly expenses:"));
        const months = parseInt(prompt("Enter the number of months to project:"));

        if (isNaN(income) || isNaN(expenses) || isNaN(months)) {
            throw new Error("All inputs must be valid numbers.");
        }

        if (months <= 0) {
            throw new Error("Number of months must be a positive integer.");
        }

        calculateBudget(income, expenses, months);

    } catch (error) {
        alert("Error: " + error.message);
    }
});


function calculateBudget(income, expenses, months) {
    const monthlySavings = income - expenses;
    const totalProjectedSavings = monthlySavings * months;

    const resultsDiv = document.getElementById("budgetResults");
    resultsDiv.innerHTML = "";

    const summary = document.createElement("p");
    summary.innerHTML =
        "Monthly Income: $" + income.toFixed(2) + "<br>" +
        "Monthly Expenses: $" + expenses.toFixed(2) + "<br>" +
        "Monthly Savings: $" + monthlySavings.toFixed(2) + "<br>" +
        "Total Savings: $" + totalProjectedSavings.toFixed(2);
    resultsDiv.appendChild(summary);

    if (monthlySavings < 0) {
        const warning = document.createElement("p");
        warning.textContent = "stop spending so much $";
        warning.style.color = "red";
        resultsDiv.appendChild(warning);
    }

    for (let i = 1; i <= months; i++) {
        const monthP = document.createElement("p");
        monthP.textContent = "Month " + i + ": $" + (monthlySavings * i).toFixed(2);
        resultsDiv.appendChild(monthP);
    }
}