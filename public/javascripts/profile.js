// module.exports = {
// 	errorTest1: function(){
// 		// console.log('express error handling');
// 		return 'express error handling';
// 	}
// }

let newPasswordValue;
let confirmationValue;

const submitBtn = document.getElementById('update-profile');
const newPassword = document.getElementById('new-password');
const confirmation = document.getElementById('password-confirmation');
const validationMessage = document.getElementById('validation-message');


function validatePasswords(message, add, remove) {
		// console.log('function works');
		validationMessage.textContent = message;
		validationMessage.classList.add(add);
		validationMessage.classList.remove(remove);
}
confirmation.addEventListener('input', e => {
	e.preventDefault();
	newPasswordValue = newPassword.value;
	confirmationValue = confirmation.value;
	if (newPasswordValue !== confirmationValue) {
	  validatePasswords('Passwords must match!', 'color-red', 'color-green');
	  submitBtn.setAttribute('disabled', true);
	} else {
		validatePasswords('Passwords match!', 'color-green', 'color-red');
		submitBtn.removeAttribute('disabled');
	}
});
