/* LOGIN PAGE */

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
	console.log("Just called POST!");
}

// function onRedirect(res, req) {
// 	console.log("in on redirect");
// 	res.render('user_home');
// }

function onReceiveVerification(result) {
	console.log("Success: " + result["success"] + " Name: " + result["name"]);
	var phone_number = $('#login_field').val();
	if (result["success"] == 1) { // if user exists
		window.location.href = '/user_home?user_phone=' + phone_number + '&user_name=' + result["name"];
	} else if(result["success"] == 0) {
		window.location.href = '/new_user?user_phone=' + phone_number;
	} else { // invalid phone number
		window.location.href = "/?message=error1";		// error
	};
}