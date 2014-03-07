function initializePage() {
	// $('#user_phone').val("hello");
	$('#settings_user_phone_field').val($.cookie("user_phone"));
	$('#settings_user_name_field').val($.cookie("name"));
}

function updateUserData() {
	console.log("hello");
 	var user_phone = $('#settings_user_phone_field').val();
	var user_name = $('#settings_user_name_field').val();
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