'use strict';

/*
Exercises 01
------------
Add a label to each of the input fields: username, password, confirm password
*/
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const confirmPSW = document.querySelector('#confirmPassword');

username.insertAdjacentHTML('beforeBegin', '<label for="username">Username: </label>');
password.insertAdjacentHTML('beforeBegin', '<label for="password">Passwoord: </label>')
confirmPSW.insertAdjacentHTML('beforeBegin', '<label foe="confirmPassword">Confirm Password: </label>')


/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/


/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/

/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/


/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/



/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/