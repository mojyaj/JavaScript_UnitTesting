export function showError(message) {
  const errorContainerElement = document.getElementById('errors'); // Select element to manipulate
  const errorMessageElement = document.createElement('p');  // Create <p> tag to display error message
  errorMessageElement.textContent = message;  // Insert the error message into <p> tag
  errorContainerElement.innerHTML = ''; // Clear the original elements inside of selected DOM element
  errorContainerElement.append(errorMessageElement);  // Add the error message into the DOM element
}
