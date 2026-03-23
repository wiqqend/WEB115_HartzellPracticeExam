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
