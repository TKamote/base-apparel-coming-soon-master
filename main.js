

var message = document.querySelector(".message");
var emailInput = document.querySelector("#email-address");
var submitButton = document.querySelector("#email-button");

//this will style the text notice if the input is not the write email format or invalid
function myfunction() {
	// body...
	message.textContent = 'Please provide a valid email';
	message.style.fontSize = "1.75rem";
	message.style.paddingTop = '25px';
}


//this will style the text notice if the input is corect
message.textContent = 'Thank you'; 

