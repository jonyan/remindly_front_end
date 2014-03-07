function initializePage() {
	// $('#user_phone').val("hello");
	$('#settings_user_phone_field').val($.cookie("user_phone"));
	$('#settings_user_name_field').val($.cookie("name"));
}

function updateUserData() {
 	var user_phone = $('#settings_user_phone_field').val();
	var user_name = $('#settings_user_name_field').val();

	if (isEmpty()) {
		alert("Please fill out all fields!");
	} else if(isInvalid(user_phone)) {
		alert("Please enter a valid phone number!")
	} else {
		var account_phone = $.cookie("user_phone")

		var raw_phone = account_phone.substr(1, 3) + account_phone.substr(5, 3) + account_phone.substr(9, 4);
		var raw_new_phone = user_phone.substr(1, 3) + user_phone.substr(5, 3) + user_phone.substr(9, 4);

		$.post("http://www.aerodroid.com/remindly/update_user.php",
			{
				"user_phone" : raw_phone,
				"user_name" : $.cookie("name"), 
				"user_id" : $.cookie("user_id"),
				"new_name" : user_name,
				"new_phone" : raw_new_phone
			}, onFinish);

		$.cookie("user_phone", user_phone);
		$.cookie("name", user_name);
	}
}

function isInvalid(phone_number) {
	var phone = phone_number.substr(1, 3) + phone_number.substr(5, 3) + phone_number.substr(9, 4);
	var nondigits = /\D/g;
	console.log(phone);
	if (phone.length != 10 || nondigits.test(phone)) {
		console.log("returning true");
		return true;
	}
	return false;
}



function isEmpty() {
	if ($('#settings_user_phone_field').val() == "" || $('#settings_user_name_field').val() == "") {
		return true;
	}
	return false;
}


function onFinish(result) {
	if(result["success"] == 1)
		alert("Your account has been updated!");
	else 
		alert("An error has occurred, please try again later.");
	window.location.href = "/user_home";
}

$(function() {
	if(!isLoggedIn()) {
		console.log("Not logged in, redirecting to home page");
		window.location.href = "/?message=error2";
	}
});