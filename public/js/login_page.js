/* LOGIN PAGE */

$(function() {
	if(isLoggedIn())
		window.location.href = '/user_home';
});

function verifyLogin() {
	console.log("ENTERED!");
	var phone_number = $("#user_phone").val();
	console.log(phone_number);
	var nondigits = /\D/g;
	if (phone_number == "") {
		console.log("empty field");
		alert("You must input your phone number to log in.");
	}
	else if (phone_number.length != 10 || nondigits.test(phone_number)) {
		alert("Please enter a valid 10 digit phone number.");
	}
	else { 
		check_user(phone_number);
	}
	return false;
}

// function isNumber(phone_number) {
// 	var obtainDatePttrn = "dddddddddd";
// 	for(int i = 0; i < phone_number.length; i++) {
// 		if (!isDigit(phone_number[i])){
// 			return false;
// 		}
// 	}
// 	return true;
// }

function check_user(phone_number) { 
	console.log(phone_number);
	$.post("http://www.aerodroid.com/remindly/verify_user.php",
		{
			"user_phone" : phone_number
		}, onReceiveVerification);
}

function onReceiveVerification(result) {
	var phone_number = $('#user_phone').val();
	var name = result["name"];
	if (result["success"] == 1) { // if user exists
		$.cookie("user_phone", phone_number);
		$.cookie("name", name);
		goToHomeAction();
	} else if(result["success"] == 0) {
		window.location.href = '/new_user?user_phone=' + phone_number;
	} else { // invalid phone number
		window.location.href = "/?message=error1";		// error
	};
}