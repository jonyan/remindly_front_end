/* LOGIN PAGE */

$(function() {
	if(isLoggedIn())
		window.location.href = '/user_home';
});

function verifyLogin() {
	var phone_number = $("#login_field").val();
	check_user(phone_number);
}

function check_user(phone_number) { 
	console.log(phone_number);
	$.post("http://www.aerodroid.com/remindly/verify_user.php",
		{
			"user_phone" : phone_number
		}, onReceiveVerification);
}

function onReceiveVerification(result) {
	console.log("Success: " + result["success"] + " Name: " + result["name"]);
	var phone_number = $('#login_field').val();
	var name = result["name"];
	if (result["success"] == 1) { // if user exists
		$.cookie("user_phone", phone_number);
		$.cookie("name", name);
		window.location.href = '/user_home';
	} else if(result["success"] == 0) {
		window.location.href = '/new_user?user_phone=' + phone_number;
	} else { // invalid phone number
		window.location.href = "/?message=error1";		// error
	};
}