// Find the existing 'main' element and remove it
const mainElement = document.querySelector('main#main');
mainElement.remove();

// Create a new 'h1' element with the id 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Set the text content of the new 'h1' element
newHeader.textContent = 'Dominic is the champion'; // Replace 'YOUR-NAME' with your name

// Append the new 'h1' element to the document's body
document.body.appendChild(newHeader);
