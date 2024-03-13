// Execute the code when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Initialize variables to store the expression and reference to the input field
  let expression = '';
  const inputField = document.querySelector('.input');

  // Function to handle button clicks in the calculator
  function handleButtonClick(value) {
    // Determine the action based on the clicked button value
    switch (value) {
      // Calculate and display the result of the expression
      case '=':
        calculateResult();
        break;
      // Clear the input and reset the calculator
      case 'C':
        clearInput();
        break;
      // Calculate and display the square root of the number in the expression
      case '√':
        calculateSquareRoot();
        break;
      // Delete the last character from the expression
      case 'Del':
        deleteLastCharacter();
        break;
      // Append '/' to the expression for division
      case '÷':
        appendToExpression('/');
        break;
      // Append '*' to the expression for multiplication
      case '×':
        appendToExpression('*');
        break;
      // For other buttons (digits and operators), append them to the expression
      default:
        appendToExpression(value);
    }
  }

  // Function to calculate and display the result of the expression
  function calculateResult() {
    try {
      // Use eval to evaluate the expression and convert the result to a string
      const result = eval(expression);
      expression = String(result);
      // Display the result in the input field
      inputField.value = expression;
    } catch (error) {
      // If an error occurs during evaluation, display 'Error' and reset the expression
      inputField.value = 'Error';
      expression = '';
    }
  }

  // Function to clear the input and reset the calculator
  function clearInput() {
    expression = '';
    inputField.value = expression;
  }

  // Function to calculate and display the square root of the number in the expression
  function calculateSquareRoot() {
    const num = parseFloat(expression);
    if (!isNaN(num) && num >= 0) {
      // If the number is non-negative, calculate the square root
      expression = Math.sqrt(num).toString();
      // Display the result in the input field
      inputField.value = expression;
    } else {
      // If the input is invalid, display an error message
      inputField.value = 'Invalid input';
    }
  }

  // Function to delete the last character from the expression
  function deleteLastCharacter() {
    expression = expression.slice(0, -1);
    // Update the input field with the modified expression
    inputField.value = expression;
  }

  // Function to append a value to the current expression
  function appendToExpression(value) {
    expression += value;
    // Update the input field with the modified expression
    inputField.value = expression;
  }

  // Attach event listeners to buttons to trigger the handleButtonClick function
  document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', (e) => {
      handleButtonClick(e.target.innerHTML);
    });
  });
});
