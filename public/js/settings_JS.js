function initializePage() {
	// $('#user_phone').val("hello");
	$('#settings_user_phone_field').val($.cookie("user_phone"));

	$('#settings_user_name_field').val($.cookie("name"));
}
 function updateUserData() {
 	console.log("hello");
 	var user_phone = $('#settings_user_phone_field').val();
 	var user_name = $('#settings_user_name_field').val();
	$.cookie("user_phone", user_phone);
	$.cookie("name", user_name);
	alert("Update Success!");
	window.location.href = "/user_home";
 }

$(function() {
	if(!isLoggedIn()) {
		console.log("Not logged in, redirecting to home page");
		window.location.href = "/?message=error2";
	}
});