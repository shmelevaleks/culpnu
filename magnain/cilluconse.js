// Reference to the element
const element = document.getElementById('myElement');

// Define the event listeners
function handleClick(event) {
    console.log('Clicked');
}

function handleMouseOver(event) {
    console.log('Mouse Over');
}

// Add event listeners
element.addEventListener('click', handleClick);
element.addEventListener('mouseover', handleMouseOver);

// Remove event listeners
element.removeEventListener('click', handleClick);
element.removeEventListener('mouseover', handleMouseOver);
