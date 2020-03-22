// event.keyCode: 16
const container = document.getElementById('checkboxesContainer');
const inputs = container.querySelectorAll('input');
let firstInput, lastInput;

inputs.forEach(input => input.addEventListener('keydown', saveChecked));
inputs.forEach(input => input.addEventListener('keyup', checkColumn));

function saveChecked(e) {
  if (e.keyCode === 16) {
    firstInput = Array.prototype.indexOf.call(inputs, e.target);
  }
}

/**
 * Check selected inputs.
 * @function
 * @param {Event} e 
 */
function checkColumn(e) {
  if (e.keyCode === 16) {
    let inputsToCheck;
    lastInput = Array.prototype.indexOf.call(inputs, e.target);

    if (lastInput < firstInput) {
      const aux = lastInput;
      lastInput = firstInput;
      firstInput = aux;
    }

    if (lastInput === inputs.length) {
      inputsToCheck = Array.prototype.slice.call(inputs, firstInput);
    } else {
      inputsToCheck = Array.prototype.slice.call(inputs, firstInput, lastInput + 1);
    }

    inputsToCheck.forEach(input => input.checked = true);

    // Trying to also uncheck
    // if (e.target.checked) {
    //   inputsToCheck.forEach(input => input.checked = true);
    // } else {
    //   inputsToCheck.forEach(input => input.removeAttribute('checked'));
    // }
  }
}


// WES SOLUTION

// const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// let lastChecked;

// function handleCheck(e) {
//   // Check if they had the shift key down
//   // AND check that they are checking it
//   let inBetween = false;
//   if (e.shiftKey && this.checked) {
//     // go ahead and do what we please
//     // loop over every single checkbox
//     checkboxes.forEach(checkbox => {
//       console.log(checkbox);
//       if (checkbox === this || checkbox === lastChecked) {
//         inBetween = !inBetween;
//         console.log('Starting to check them in between!');
//       }

//       if (inBetween) {
//         checkbox.checked = true;
//       }
//     });
//   }

//   lastChecked = this;
// }

// checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
