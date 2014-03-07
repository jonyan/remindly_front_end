function createNewUser() {
	var user_phone = $('#user_phone').val();
	user_phone = user_phone.substr(1, 3) + user_phone.substr(5, 3) + user_phone.substr(9, 4);
	var name = $('#user_name').val();

	if(!$('#user_name').val()) {
		alert("We need your first name to send Remindly's, please try again.");
		return false;
	}

	create_user(user_phone, name);
	return false;
}



function create_user(user_phone, name) {
	$.post("http://www.aerodroid.com/remindly/add_user.php",
		{
			"user_phone" : user_phone, 
			"name" : name,
			"pin" : '',
			"email" : ''
		}, onFinish);
}

function onFinish(result) {
	$.cookie("user_phone", $('#user_phone').val());
	$.cookie("name", $('#user_name').val());
	$.cookie("user_id", result["user_id"]);
	window.location.href = '/user_home';
	
}