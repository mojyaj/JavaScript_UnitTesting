export function showError(message) {
  const errorContainerElement = document.getElementById('errors');  
  const errorMessageElement = document.createElement('p');          
  errorMessageElement.textContent = message;                        
  errorContainerElement.innerHTML = '';                             
  errorContainerElement.append(errorMessageElement); 
  
  // Select element to manipulate
  // Create <p> tag to display error message
  // Insert the error message into <p> tag
  // Clear the original elements inside of selected DOM element
  // Add the error message into the DOM element
}
